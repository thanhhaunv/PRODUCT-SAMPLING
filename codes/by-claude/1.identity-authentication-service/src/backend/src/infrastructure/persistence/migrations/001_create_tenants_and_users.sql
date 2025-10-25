-- ================================================================
-- MIGRATION: 001_create_tenants_and_users
-- ================================================================
-- Purpose: Create foundational tables for multi-tenant user management
-- Reference: SRS-Grok-V2.md - Part07.3.2.1 Users Table
-- Version: 1.0.0
-- ================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================================
-- TENANTS TABLE
-- ================================================================
-- Multi-tenancy support for brand/organization isolation

CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    api_key VARCHAR(255) NOT NULL UNIQUE,
    
    -- Status & Metadata
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    
    -- GDPR Compliance
    consent_gdpr BOOLEAN NOT NULL DEFAULT false,
    
    -- Constraints
    CONSTRAINT tenants_name_length CHECK (char_length(name) >= 2),
    CONSTRAINT tenants_slug_format CHECK (slug ~ '^[a-z0-9-]+$')
);

-- Indexes for Tenants
CREATE INDEX idx_tenants_slug ON tenants(slug);
CREATE INDEX idx_tenants_is_active ON tenants(is_active);
CREATE INDEX idx_tenants_created_at ON tenants(created_at);

-- Comments
COMMENT ON TABLE tenants IS 'Multi-tenant organizations/brands';
COMMENT ON COLUMN tenants.api_key IS 'Encrypted API key for tenant authentication';
COMMENT ON COLUMN tenants.consent_gdpr IS 'GDPR consent flag for tenant';

-- ================================================================
-- USERS TABLE
-- ================================================================
-- Core user entity for authentication and profile management

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    
    -- Profile Information
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20),
    avatar_url VARCHAR(500),
    
    -- Status & Security
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_verified BOOLEAN NOT NULL DEFAULT false,
    is_locked BOOLEAN NOT NULL DEFAULT false,
    failed_login_attempts INTEGER NOT NULL DEFAULT 0,
    last_login_at TIMESTAMP,
    last_login_ip VARCHAR(45), -- IPv6 support
    
    -- 2FA
    two_factor_enabled BOOLEAN NOT NULL DEFAULT false,
    two_factor_secret VARCHAR(255),
    
    -- Tenant Association
    tenant_id UUID NOT NULL,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    
    -- GDPR Compliance
    consent_gdpr BOOLEAN NOT NULL DEFAULT false,
    consent_marketing BOOLEAN NOT NULL DEFAULT false,
    
    -- Foreign Keys
    CONSTRAINT fk_users_tenant FOREIGN KEY (tenant_id) 
        REFERENCES tenants(id) ON DELETE CASCADE,
    
    -- Constraints
    CONSTRAINT users_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT users_password_hash_length CHECK (char_length(password_hash) >= 60),
    CONSTRAINT users_failed_login_attempts_positive CHECK (failed_login_attempts >= 0)
);

-- Indexes for Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_tenant_id ON users(tenant_id);
CREATE INDEX idx_users_is_active ON users(is_active);
CREATE INDEX idx_users_is_verified ON users(is_verified);
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_users_last_login_at ON users(last_login_at);

-- Composite indexes for common queries
CREATE INDEX idx_users_tenant_active ON users(tenant_id, is_active);
CREATE INDEX idx_users_tenant_email ON users(tenant_id, email);

-- Comments
COMMENT ON TABLE users IS 'Core user accounts for identity and authentication';
COMMENT ON COLUMN users.password_hash IS 'Bcrypt hashed password (60+ characters)';
COMMENT ON COLUMN users.failed_login_attempts IS 'Counter for account lockout logic';
COMMENT ON COLUMN users.two_factor_secret IS 'TOTP secret for 2FA';
COMMENT ON COLUMN users.consent_gdpr IS 'GDPR data processing consent';
COMMENT ON COLUMN users.consent_marketing IS 'Marketing communications consent';

-- ================================================================
-- TRIGGERS
-- ================================================================

-- Auto-update updated_at timestamp for tenants
CREATE OR REPLACE FUNCTION update_tenants_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_tenants_updated_at
    BEFORE UPDATE ON tenants
    FOR EACH ROW
    EXECUTE FUNCTION update_tenants_updated_at();

-- Auto-update updated_at timestamp for users
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_users_updated_at();

-- ================================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================================

-- Enable RLS on tenants
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;

-- Policy: Tenants can only see their own data
CREATE POLICY tenant_isolation_policy ON tenants
    FOR ALL
    USING (id = current_setting('app.current_tenant_id', true)::UUID);

-- Enable RLS on users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access data from their tenant
CREATE POLICY user_tenant_isolation_policy ON users
    FOR ALL
    USING (tenant_id = current_setting('app.current_tenant_id', true)::UUID);

-- ================================================================
-- SEED DATA (for development/testing)
-- ================================================================

-- Insert system tenant (only if not exists)
INSERT INTO tenants (id, name, slug, api_key, consent_gdpr)
VALUES (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'System Tenant',
    'system',
    'SYSTEM_API_KEY_PLACEHOLDER',
    true
)
ON CONFLICT (id) DO NOTHING;

-- ================================================================
-- VERIFICATION QUERIES
-- ================================================================

-- Verify table creation
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tenants') THEN
        RAISE EXCEPTION 'Table tenants was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        RAISE EXCEPTION 'Table users was not created';
    END IF;
    
    RAISE NOTICE 'Migration 001 completed successfully';
END $$;
