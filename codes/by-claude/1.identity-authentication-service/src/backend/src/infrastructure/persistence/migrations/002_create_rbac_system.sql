-- ================================================================
-- MIGRATION: 002_create_rbac_system
-- ================================================================
-- Purpose: Create Role-Based Access Control (RBAC) tables
-- Reference: SRS-Grok-V2.md - Access_Control_Tree_Grok.md
-- Version: 1.0.0
-- ================================================================

-- ================================================================
-- ROLES TABLE
-- ================================================================
-- Hierarchical role management system

CREATE TABLE IF NOT EXISTS roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(150) NOT NULL,
    description TEXT,
    
    -- Hierarchy Support
    level INTEGER NOT NULL DEFAULT 0,
    parent_role_id UUID,
    
    -- Tenant Association (NULL = system-wide role)
    tenant_id UUID,
    
    -- Status
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_system BOOLEAN NOT NULL DEFAULT false,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_roles_parent FOREIGN KEY (parent_role_id) 
        REFERENCES roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_roles_tenant FOREIGN KEY (tenant_id) 
        REFERENCES tenants(id) ON DELETE CASCADE,
    
    -- Constraints
    CONSTRAINT roles_level_positive CHECK (level >= 0),
    CONSTRAINT roles_level_max CHECK (level <= 10),
    CONSTRAINT roles_name_format CHECK (name ~ '^[A-Z][A-Z0-9_]*$'),
    
    -- Unique constraint: name must be unique per tenant
    CONSTRAINT unique_role_name_per_tenant UNIQUE (name, tenant_id)
);

-- Indexes for Roles
CREATE INDEX idx_roles_tenant_id ON roles(tenant_id);
CREATE INDEX idx_roles_level ON roles(level);
CREATE INDEX idx_roles_is_active ON roles(is_active);
CREATE INDEX idx_roles_is_system ON roles(is_system);
CREATE INDEX idx_roles_parent_role_id ON roles(parent_role_id);

-- Comments
COMMENT ON TABLE roles IS 'Hierarchical roles for access control';
COMMENT ON COLUMN roles.level IS 'Role hierarchy level: 0=highest (SUPER_ADMIN), 10=lowest';
COMMENT ON COLUMN roles.is_system IS 'System roles cannot be deleted or modified';
COMMENT ON COLUMN roles.tenant_id IS 'NULL indicates system-wide role';

-- ================================================================
-- PERMISSIONS TABLE
-- ================================================================
-- Granular permission management

CREATE TABLE IF NOT EXISTS permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resource VARCHAR(100) NOT NULL,
    action VARCHAR(50) NOT NULL,
    scope VARCHAR(20) NOT NULL DEFAULT 'own',
    description TEXT,
    
    -- System Permission Flag
    is_system BOOLEAN NOT NULL DEFAULT false,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT permissions_resource_format CHECK (resource ~ '^[a-z][a-z0-9_]*$'),
    CONSTRAINT permissions_action_format CHECK (action ~ '^[a-z][a-z0-9_]*$'),
    CONSTRAINT permissions_scope_valid CHECK (scope IN ('all', 'own', 'team', 'tenant')),
    
    -- Unique constraint: resource + action + scope must be unique
    CONSTRAINT unique_permission UNIQUE (resource, action, scope)
);

-- Indexes for Permissions
CREATE INDEX idx_permissions_resource ON permissions(resource);
CREATE INDEX idx_permissions_action ON permissions(action);
CREATE INDEX idx_permissions_scope ON permissions(scope);
CREATE INDEX idx_permissions_is_system ON permissions(is_system);

-- Composite index for permission lookup
CREATE INDEX idx_permissions_resource_action_scope ON permissions(resource, action, scope);

-- Comments
COMMENT ON TABLE permissions IS 'Granular permissions for resources';
COMMENT ON COLUMN permissions.resource IS 'Resource name (e.g., campaigns, users, reports)';
COMMENT ON COLUMN permissions.action IS 'Action type (e.g., create, read, update, delete)';
COMMENT ON COLUMN permissions.scope IS 'Permission scope: all, own, team, tenant';

-- ================================================================
-- ROLE_PERMISSIONS TABLE (Junction)
-- ================================================================
-- Many-to-many relationship between roles and permissions

CREATE TABLE IF NOT EXISTS role_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_id UUID NOT NULL,
    permission_id UUID NOT NULL,
    
    -- Optional Constraints (JSON)
    conditions JSONB,
    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_role_permissions_role FOREIGN KEY (role_id) 
        REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_role_permissions_permission FOREIGN KEY (permission_id) 
        REFERENCES permissions(id) ON DELETE CASCADE,
    
    -- Unique constraint: one permission per role
    CONSTRAINT unique_role_permission UNIQUE (role_id, permission_id)
);

-- Indexes for Role Permissions
CREATE INDEX idx_role_permissions_role_id ON role_permissions(role_id);
CREATE INDEX idx_role_permissions_permission_id ON role_permissions(permission_id);
CREATE INDEX idx_role_permissions_conditions ON role_permissions USING GIN (conditions);

-- Comments
COMMENT ON TABLE role_permissions IS 'Junction table linking roles to permissions';
COMMENT ON COLUMN role_permissions.conditions IS 'Additional conditions (time-based, IP-based, etc.)';

-- ================================================================
-- USER_ROLES TABLE (Junction)
-- ================================================================
-- Many-to-many relationship between users and roles

CREATE TABLE IF NOT EXISTS user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    role_id UUID NOT NULL,
    
    -- Time-based role assignment
    valid_from TIMESTAMP,
    valid_to TIMESTAMP,
    
    -- Metadata
    assigned_by UUID,
    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) 
        REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_user_roles_assigned_by FOREIGN KEY (assigned_by) 
        REFERENCES users(id) ON DELETE SET NULL,
    
    -- Constraints
    CONSTRAINT user_roles_valid_dates CHECK (
        valid_from IS NULL OR valid_to IS NULL OR valid_from < valid_to
    ),
    
    -- Unique constraint: one role per user (unless time-based)
    CONSTRAINT unique_user_role UNIQUE (user_id, role_id)
);

-- Indexes for User Roles
CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role_id ON user_roles(role_id);
CREATE INDEX idx_user_roles_valid_dates ON user_roles(valid_from, valid_to);
CREATE INDEX idx_user_roles_assigned_by ON user_roles(assigned_by);

-- Composite index for active role lookup
CREATE INDEX idx_user_roles_user_active ON user_roles(user_id, role_id) 
    WHERE valid_to IS NULL OR valid_to > CURRENT_TIMESTAMP;

-- Comments
COMMENT ON TABLE user_roles IS 'Junction table linking users to roles';
COMMENT ON COLUMN user_roles.valid_from IS 'Role becomes active at this time';
COMMENT ON COLUMN user_roles.valid_to IS 'Role expires at this time';

-- ================================================================
-- TRIGGERS
-- ================================================================

-- Auto-update updated_at for roles
CREATE OR REPLACE FUNCTION update_roles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_roles_updated_at
    BEFORE UPDATE ON roles
    FOR EACH ROW
    EXECUTE FUNCTION update_roles_updated_at();

-- Auto-update updated_at for permissions
CREATE OR REPLACE FUNCTION update_permissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_permissions_updated_at
    BEFORE UPDATE ON permissions
    FOR EACH ROW
    EXECUTE FUNCTION update_permissions_updated_at();

-- Auto-update updated_at for user_roles
CREATE OR REPLACE FUNCTION update_user_roles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_user_roles_updated_at
    BEFORE UPDATE ON user_roles
    FOR EACH ROW
    EXECUTE FUNCTION update_user_roles_updated_at();

-- ================================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================================

-- Enable RLS on roles
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

-- Policy: Roles are visible only within tenant context
CREATE POLICY role_tenant_isolation_policy ON roles
    FOR ALL
    USING (
        tenant_id IS NULL OR 
        tenant_id = current_setting('app.current_tenant_id', true)::UUID
    );

-- Enable RLS on user_roles
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Policy: User roles are visible only within tenant context
CREATE POLICY user_role_tenant_isolation_policy ON user_roles
    FOR ALL
    USING (
        user_id IN (
            SELECT id FROM users 
            WHERE tenant_id = current_setting('app.current_tenant_id', true)::UUID
        )
    );

-- ================================================================
-- SEED DATA: System Roles & Permissions
-- ================================================================

-- Insert System-Wide Roles
INSERT INTO roles (id, name, display_name, description, level, is_system, tenant_id) VALUES
    ('10000000-0000-0000-0000-000000000001', 'SUPER_ADMIN', 'Super Administrator', 'Full system access', 0, true, NULL),
    ('10000000-0000-0000-0000-000000000002', 'ADMIN', 'Administrator', 'Tenant administrator', 1, true, NULL),
    ('10000000-0000-0000-0000-000000000003', 'CAMPAIGN_MANAGER', 'Campaign Manager', 'Manage campaigns', 2, true, NULL),
    ('10000000-0000-0000-0000-000000000004', 'CONTENT_CREATOR', 'Content Creator', 'Create and edit content', 3, true, NULL),
    ('10000000-0000-0000-0000-000000000005', 'ANALYST', 'Analyst', 'View reports and analytics', 4, true, NULL),
    ('10000000-0000-0000-0000-000000000006', 'VIEWER', 'Viewer', 'Read-only access', 5, true, NULL)
ON CONFLICT (id) DO NOTHING;

-- Insert Core Permissions
INSERT INTO permissions (resource, action, scope, description, is_system) VALUES
    -- User Management
    ('users', 'create', 'tenant', 'Create users in tenant', true),
    ('users', 'read', 'all', 'Read all users', true),
    ('users', 'read', 'own', 'Read own profile', true),
    ('users', 'update', 'all', 'Update all users', true),
    ('users', 'update', 'own', 'Update own profile', true),
    ('users', 'delete', 'all', 'Delete any user', true),
    
    -- Role Management
    ('roles', 'create', 'tenant', 'Create roles', true),
    ('roles', 'read', 'all', 'Read all roles', true),
    ('roles', 'update', 'all', 'Update roles', true),
    ('roles', 'delete', 'all', 'Delete roles', true),
    ('roles', 'assign', 'all', 'Assign roles to users', true),
    
    -- Campaign Management
    ('campaigns', 'create', 'tenant', 'Create campaigns', true),
    ('campaigns', 'read', 'all', 'Read all campaigns', true),
    ('campaigns', 'read', 'own', 'Read own campaigns', true),
    ('campaigns', 'update', 'all', 'Update all campaigns', true),
    ('campaigns', 'update', 'own', 'Update own campaigns', true),
    ('campaigns', 'delete', 'all', 'Delete all campaigns', true),
    ('campaigns', 'delete', 'own', 'Delete own campaigns', true),
    
    -- Reports
    ('reports', 'read', 'all', 'View all reports', true),
    ('reports', 'read', 'own', 'View own reports', true),
    ('reports', 'export', 'all', 'Export all reports', true),
    
    -- Settings
    ('settings', 'read', 'tenant', 'Read tenant settings', true),
    ('settings', 'update', 'tenant', 'Update tenant settings', true)
ON CONFLICT (resource, action, scope) DO NOTHING;

-- ================================================================
-- VERIFICATION QUERIES
-- ================================================================

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'roles') THEN
        RAISE EXCEPTION 'Table roles was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'permissions') THEN
        RAISE EXCEPTION 'Table permissions was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'role_permissions') THEN
        RAISE EXCEPTION 'Table role_permissions was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_roles') THEN
        RAISE EXCEPTION 'Table user_roles was not created';
    END IF;
    
    RAISE NOTICE 'Migration 002 completed successfully';
END $$;
