-- ================================================================
-- MIGRATION: 003_create_security_and_sessions
-- ================================================================
-- Purpose: Create tables for session management, OTP, and security
-- Reference: SRS-Grok-V2.md - Part07.2.5 Session Management
-- Version: 1.0.0
-- ================================================================

-- ================================================================
-- SESSIONS TABLE
-- ================================================================
-- JWT session tracking and management

CREATE TABLE IF NOT EXISTS sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    
    -- Session Data
    token VARCHAR(500) NOT NULL UNIQUE,
    refresh_token VARCHAR(500) UNIQUE,
    device_info JSONB,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    
    -- Session Lifecycle
    is_active BOOLEAN NOT NULL DEFAULT true,
    expires_at TIMESTAMP NOT NULL,
    last_activity_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_sessions_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    
    -- Constraints
    CONSTRAINT sessions_expires_future CHECK (expires_at > created_at)
);

-- Indexes for Sessions
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_refresh_token ON sessions(refresh_token);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);
CREATE INDEX idx_sessions_is_active ON sessions(is_active);
CREATE INDEX idx_sessions_last_activity_at ON sessions(last_activity_at);

-- Composite indexes
CREATE INDEX idx_sessions_user_active ON sessions(user_id, is_active);
CREATE INDEX idx_sessions_active_not_expired ON sessions(is_active, expires_at) 
    WHERE is_active = true AND expires_at > CURRENT_TIMESTAMP;

-- Comments
COMMENT ON TABLE sessions IS 'JWT session tracking and management';
COMMENT ON COLUMN sessions.device_info IS 'JSON containing browser, OS, device type';
COMMENT ON COLUMN sessions.last_activity_at IS 'Last activity timestamp for session timeout';

-- ================================================================
-- OTP_CODES TABLE
-- ================================================================
-- One-Time Password codes for authentication

CREATE TABLE IF NOT EXISTS otp_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    
    -- OTP Data
    code VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    purpose TEXT,
    
    -- Security
    attempts INTEGER NOT NULL DEFAULT 0,
    max_attempts INTEGER NOT NULL DEFAULT 3,
    
    -- Lifecycle
    is_used BOOLEAN NOT NULL DEFAULT false,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_otp_codes_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    
    -- Constraints
    CONSTRAINT otp_codes_type_valid CHECK (type IN (
        'EMAIL_VERIFICATION',
        'PASSWORD_RESET',
        'TWO_FACTOR',
        'PHONE_VERIFICATION'
    )),
    CONSTRAINT otp_codes_attempts_positive CHECK (attempts >= 0),
    CONSTRAINT otp_codes_max_attempts_positive CHECK (max_attempts > 0),
    CONSTRAINT otp_codes_expires_future CHECK (expires_at > created_at)
);

-- Indexes for OTP Codes
CREATE INDEX idx_otp_codes_user_id ON otp_codes(user_id);
CREATE INDEX idx_otp_codes_code ON otp_codes(code);
CREATE INDEX idx_otp_codes_type ON otp_codes(type);
CREATE INDEX idx_otp_codes_expires_at ON otp_codes(expires_at);
CREATE INDEX idx_otp_codes_is_used ON otp_codes(is_used);

-- Composite indexes
CREATE INDEX idx_otp_codes_user_type_active ON otp_codes(user_id, type, is_used) 
    WHERE is_used = false AND expires_at > CURRENT_TIMESTAMP;

-- Comments
COMMENT ON TABLE otp_codes IS 'One-time password codes for authentication and verification';
COMMENT ON COLUMN otp_codes.type IS 'OTP type: EMAIL_VERIFICATION, PASSWORD_RESET, TWO_FACTOR, PHONE_VERIFICATION';
COMMENT ON COLUMN otp_codes.attempts IS 'Number of verification attempts';

-- ================================================================
-- AUDIT_LOGS TABLE
-- ================================================================
-- Comprehensive audit trail for security and compliance

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    
    -- Event Information
    action VARCHAR(100) NOT NULL,
    resource VARCHAR(100) NOT NULL,
    resource_id UUID,
    
    -- Context
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    changes JSONB,
    metadata JSONB,
    
    -- Result
    status VARCHAR(20) NOT NULL,
    error_message TEXT,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_audit_logs_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE SET NULL,
    
    -- Constraints
    CONSTRAINT audit_logs_status_valid CHECK (status IN (
        'SUCCESS',
        'FAILURE',
        'PENDING'
    ))
);

-- Indexes for Audit Logs
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_resource ON audit_logs(resource);
CREATE INDEX idx_audit_logs_resource_id ON audit_logs(resource_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_status ON audit_logs(status);

-- Composite indexes
CREATE INDEX idx_audit_logs_user_action_date ON audit_logs(user_id, action, created_at);
CREATE INDEX idx_audit_logs_resource_action ON audit_logs(resource, action);

-- GIN indexes for JSONB columns
CREATE INDEX idx_audit_logs_changes ON audit_logs USING GIN (changes);
CREATE INDEX idx_audit_logs_metadata ON audit_logs USING GIN (metadata);

-- Comments
COMMENT ON TABLE audit_logs IS 'Comprehensive audit trail for security and compliance';
COMMENT ON COLUMN audit_logs.changes IS 'Before/after state for update operations';
COMMENT ON COLUMN audit_logs.metadata IS 'Additional context for the action';

-- ================================================================
-- PASSWORD_RESET_TOKENS TABLE
-- ================================================================
-- Secure password reset mechanism

CREATE TABLE IF NOT EXISTS password_reset_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    
    -- Security
    is_used BOOLEAN NOT NULL DEFAULT false,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT password_reset_tokens_email_format CHECK (
        email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    ),
    CONSTRAINT password_reset_tokens_expires_future CHECK (expires_at > created_at)
);

-- Indexes for Password Reset Tokens
CREATE INDEX idx_password_reset_tokens_email ON password_reset_tokens(email);
CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX idx_password_reset_tokens_expires_at ON password_reset_tokens(expires_at);
CREATE INDEX idx_password_reset_tokens_is_used ON password_reset_tokens(is_used);

-- Composite index for active token lookup
CREATE INDEX idx_password_reset_tokens_active ON password_reset_tokens(email, is_used, expires_at) 
    WHERE is_used = false AND expires_at > CURRENT_TIMESTAMP;

-- Comments
COMMENT ON TABLE password_reset_tokens IS 'Secure password reset tokens';
COMMENT ON COLUMN password_reset_tokens.token IS 'Unique token for password reset link';

-- ================================================================
-- EMAIL_VERIFICATION_TOKENS TABLE
-- ================================================================
-- Email verification during registration

CREATE TABLE IF NOT EXISTS email_verification_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    
    -- Security
    is_used BOOLEAN NOT NULL DEFAULT false,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT email_verification_tokens_email_format CHECK (
        email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    ),
    CONSTRAINT email_verification_tokens_expires_future CHECK (expires_at > created_at)
);

-- Indexes for Email Verification Tokens
CREATE INDEX idx_email_verification_tokens_email ON email_verification_tokens(email);
CREATE INDEX idx_email_verification_tokens_token ON email_verification_tokens(token);
CREATE INDEX idx_email_verification_tokens_expires_at ON email_verification_tokens(expires_at);
CREATE INDEX idx_email_verification_tokens_is_used ON email_verification_tokens(is_used);

-- Composite index for active token lookup
CREATE INDEX idx_email_verification_tokens_active ON email_verification_tokens(email, is_used, expires_at) 
    WHERE is_used = false AND expires_at > CURRENT_TIMESTAMP;

-- Comments
COMMENT ON TABLE email_verification_tokens IS 'Email verification tokens for new registrations';
COMMENT ON COLUMN email_verification_tokens.token IS 'Unique token for email verification link';

-- ================================================================
-- FUNCTIONS FOR SESSION MANAGEMENT
-- ================================================================

-- Function to clean up expired sessions
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    WITH deleted AS (
        DELETE FROM sessions
        WHERE expires_at < CURRENT_TIMESTAMP
        RETURNING *
    )
    SELECT COUNT(*) INTO deleted_count FROM deleted;
    
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to clean up expired OTP codes
CREATE OR REPLACE FUNCTION cleanup_expired_otp_codes()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    WITH deleted AS (
        DELETE FROM otp_codes
        WHERE expires_at < CURRENT_TIMESTAMP
        RETURNING *
    )
    SELECT COUNT(*) INTO deleted_count FROM deleted;
    
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to clean up expired tokens
CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS TABLE(
    password_reset_count INTEGER,
    email_verification_count INTEGER
) AS $$
DECLARE
    pr_count INTEGER;
    ev_count INTEGER;
BEGIN
    WITH deleted_pr AS (
        DELETE FROM password_reset_tokens
        WHERE expires_at < CURRENT_TIMESTAMP
        RETURNING *
    )
    SELECT COUNT(*) INTO pr_count FROM deleted_pr;
    
    WITH deleted_ev AS (
        DELETE FROM email_verification_tokens
        WHERE expires_at < CURRENT_TIMESTAMP
        RETURNING *
    )
    SELECT COUNT(*) INTO ev_count FROM deleted_ev;
    
    RETURN QUERY SELECT pr_count, ev_count;
END;
$$ LANGUAGE plpgsql;

-- ================================================================
-- SCHEDULED CLEANUP JOBS (via pg_cron or external scheduler)
-- ================================================================

-- Note: These need pg_cron extension or external job scheduler
-- Example for pg_cron:
-- SELECT cron.schedule('cleanup-expired-sessions', '0 * * * *', 'SELECT cleanup_expired_sessions()');
-- SELECT cron.schedule('cleanup-expired-otps', '0 * * * *', 'SELECT cleanup_expired_otp_codes()');
-- SELECT cron.schedule('cleanup-expired-tokens', '0 0 * * *', 'SELECT cleanup_expired_tokens()');

-- ================================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================================

-- Enable RLS on sessions
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own sessions
CREATE POLICY session_user_isolation_policy ON sessions
    FOR ALL
    USING (user_id = current_setting('app.current_user_id', true)::UUID);

-- Enable RLS on otp_codes
ALTER TABLE otp_codes ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own OTP codes
CREATE POLICY otp_user_isolation_policy ON otp_codes
    FOR ALL
    USING (user_id = current_setting('app.current_user_id', true)::UUID);

-- Enable RLS on audit_logs
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own audit logs (admins see all via application logic)
CREATE POLICY audit_log_user_isolation_policy ON audit_logs
    FOR SELECT
    USING (user_id = current_setting('app.current_user_id', true)::UUID);

-- ================================================================
-- VERIFICATION QUERIES
-- ================================================================

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'sessions') THEN
        RAISE EXCEPTION 'Table sessions was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'otp_codes') THEN
        RAISE EXCEPTION 'Table otp_codes was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'audit_logs') THEN
        RAISE EXCEPTION 'Table audit_logs was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'password_reset_tokens') THEN
        RAISE EXCEPTION 'Table password_reset_tokens was not created';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'email_verification_tokens') THEN
        RAISE EXCEPTION 'Table email_verification_tokens was not created';
    END IF;
    
    RAISE NOTICE 'Migration 003 completed successfully';
END $$;
