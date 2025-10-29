/**
 * CryptoUtils.ts - Cryptographic Utilities
 * 
 * SRS Reference: Part05.3 Security Requirements
 * Purpose: Cryptographic functions for security operations
 * Usage: Import for hashing, encryption, token generation
 */

import { randomBytes, createHash, createHmac, pbkdf2Sync, randomUUID } from 'crypto';

// ========================
// HASH UTILITIES
// ========================

export class HashUtils {
  /**
   * Generate SHA-256 hash of input
   */
  static sha256(input: string): string {
    return createHash('sha256').update(input, 'utf8').digest('hex');
  }

  /**
   * Generate SHA-512 hash of input
   */
  static sha512(input: string): string {
    return createHash('sha512').update(input, 'utf8').digest('hex');
  }

  /**
   * Generate MD5 hash (use only for non-security purposes)
   */
  static md5(input: string): string {
    return createHash('md5').update(input, 'utf8').digest('hex');
  }

  /**
   * Generate HMAC-SHA256 signature
   */
  static hmacSha256(data: string, secret: string): string {
    return createHmac('sha256', secret).update(data, 'utf8').digest('hex');
  }

  /**
   * Generate HMAC-SHA512 signature
   */
  static hmacSha512(data: string, secret: string): string {
    return createHmac('sha512', secret).update(data, 'utf8').digest('hex');
  }

  /**
   * Verify HMAC signature
   */
  static verifyHmac(data: string, signature: string, secret: string, algorithm: 'sha256' | 'sha512' = 'sha256'): boolean {
    const expectedSignature = algorithm === 'sha256' 
      ? this.hmacSha256(data, secret)
      : this.hmacSha512(data, secret);
    
    return this.timingSafeEqual(signature, expectedSignature);
  }

  /**
   * Timing-safe string comparison to prevent timing attacks
   */
  static timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
  }
}

// ========================
// PASSWORD UTILITIES
// ========================

export class PasswordUtils {
  private static readonly SALT_ROUNDS = 12;
  private static readonly PBKDF2_ITERATIONS = 100000;
  private static readonly HASH_LENGTH = 64;

  /**
   * Hash password using PBKDF2
   */
  static async hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
    const passwordSalt = salt || this.generateSalt();
    const hash = pbkdf2Sync(password, passwordSalt, this.PBKDF2_ITERATIONS, this.HASH_LENGTH, 'sha512');
    
    return {
      hash: hash.toString('hex'),
      salt: passwordSalt
    };
  }

  /**
   * Verify password against hash
   */
  static async verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
    const { hash: computedHash } = await this.hashPassword(password, salt);
    return HashUtils.timingSafeEqual(hash, computedHash);
  }

  /**
   * Generate cryptographically secure salt
   */
  static generateSalt(length: number = 32): string {
    return randomBytes(length).toString('hex');
  }

  /**
   * Generate secure random password
   */
  static generateRandomPassword(length: number = 16): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const allChars = uppercase + lowercase + numbers + symbols;

    let password = '';
    
    // Ensure at least one character from each category
    password += this.getRandomChar(uppercase);
    password += this.getRandomChar(lowercase);
    password += this.getRandomChar(numbers);
    password += this.getRandomChar(symbols);

    // Fill the rest randomly
    for (let i = 4; i < length; i++) {
      password += this.getRandomChar(allChars);
    }

    // Shuffle the password
    return this.shuffleString(password);
  }

  /**
   * Check password strength
   */
  static checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
    isStrong: boolean;
  } {
    const feedback: string[] = [];
    let score = 0;

    // Length check
    if (password.length >= 8) score += 1;
    else feedback.push('Password should be at least 8 characters long');

    if (password.length >= 12) score += 1;

    // Character variety checks
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Password should contain lowercase letters');

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Password should contain uppercase letters');

    if (/[0-9]/.test(password)) score += 1;
    else feedback.push('Password should contain numbers');

    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else feedback.push('Password should contain special characters');

    // Additional checks
    if (!/(.)\1{2,}/.test(password)) score += 1;
    else feedback.push('Password should not contain repeated characters');

    if (!/123|abc|qwe|asd|zxc/i.test(password)) score += 1;
    else feedback.push('Password should not contain common sequences');

    return {
      score,
      feedback,
      isStrong: score >= 6
    };
  }

  private static getRandomChar(chars: string): string {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }

  private static shuffleString(str: string): string {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }
}

// ========================
// TOKEN UTILITIES
// ========================

export class TokenUtils {
  /**
   * Generate cryptographically secure random token
   */
  static generateSecureToken(length: number = 32): string {
    return randomBytes(length).toString('hex');
  }

  /**
   * Generate URL-safe token
   */
  static generateUrlSafeToken(length: number = 32): string {
    return randomBytes(length).toString('base64url');
  }

  /**
   * Generate numeric token (for OTP codes)
   */
  static generateNumericToken(length: number = 6): string {
    const digits = '0123456789';
    let token = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      token += digits[randomIndex];
    }
    
    return token;
  }

  /**
   * Generate alphanumeric token
   */
  static generateAlphanumericToken(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      token += chars[randomIndex];
    }
    
    return token;
  }

  /**
   * Generate UUID v4
   */
  static generateUUID(): string {
    return randomUUID();
  }

  /**
   * Generate session ID
   */
  static generateSessionId(): string {
    return this.generateSecureToken(32);
  }

  /**
   * Generate API key
   */
  static generateApiKey(prefix?: string): string {
    const token = this.generateSecureToken(32);
    return prefix ? `${prefix}_${token}` : token;
  }

  /**
   * Generate refresh token
   */
  static generateRefreshToken(): string {
    return this.generateUrlSafeToken(64);
  }

  /**
   * Hash token for storage (to prevent token theft if database is compromised)
   */
  static hashToken(token: string): string {
    return HashUtils.sha256(token);
  }
}

// ========================
// ENCRYPTION UTILITIES (Basic)
// ========================

export class EncryptionUtils {
  /**
   * Simple Base64 encoding (NOT for security - use for data encoding only)
   */
  static base64Encode(data: string): string {
    return Buffer.from(data, 'utf8').toString('base64');
  }

  /**
   * Simple Base64 decoding
   */
  static base64Decode(encodedData: string): string {
    return Buffer.from(encodedData, 'base64').toString('utf8');
  }

  /**
   * Generate encryption key
   */
  static generateEncryptionKey(length: number = 32): string {
    return randomBytes(length).toString('hex');
  }

  /**
   * Generate initialization vector
   */
  static generateIV(length: number = 16): Buffer {
    return randomBytes(length);
  }

  /**
   * XOR cipher (simple encryption - NOT for production security)
   */
  static xorCipher(data: string, key: string): string {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      const keyChar = key.charCodeAt(i % key.length);
      const dataChar = data.charCodeAt(i);
      result += String.fromCharCode(dataChar ^ keyChar);
    }
    return result;
  }
}

// ========================
// SECURITY UTILITIES
// ========================

export class SecurityUtils {
  /**
   * Generate CSRF token
   */
  static generateCSRFToken(): string {
    return TokenUtils.generateUrlSafeToken(32);
  }

  /**
   * Generate secure random bytes
   */
  static generateRandomBytes(length: number): Buffer {
    return randomBytes(length);
  }

  /**
   * Create fingerprint from request data
   */
  static createFingerprint(userAgent: string, ipAddress: string, acceptLanguage?: string): string {
    const data = `${userAgent}|${ipAddress}|${acceptLanguage || ''}`;
    return HashUtils.sha256(data);
  }

  /**
   * Generate nonce for Content Security Policy
   */
  static generateNonce(): string {
    return TokenUtils.generateUrlSafeToken(16);
  }

  /**
   * Mask sensitive data for logging
   */
  static maskSensitiveData(data: string, visibleChars: number = 4): string {
    if (data.length <= visibleChars * 2) {
      return '*'.repeat(data.length);
    }
    
    const start = data.substring(0, visibleChars);
    const end = data.substring(data.length - visibleChars);
    const middle = '*'.repeat(data.length - visibleChars * 2);
    
    return `${start}${middle}${end}`;
  }

  /**
   * Generate rate limiting key
   */
  static generateRateLimitKey(identifier: string, endpoint: string): string {
    return `rate_limit:${HashUtils.sha256(`${identifier}:${endpoint}`)}`;
  }

  /**
   * Generate cache key
   */
  static generateCacheKey(namespace: string, identifier: string): string {
    return `${namespace}:${HashUtils.sha256(identifier)}`;
  }

  /**
   * Validate token format
   */
  static isValidTokenFormat(token: string, expectedLength?: number): boolean {
    if (!token || typeof token !== 'string') {
      return false;
    }

    // Check if token is hexadecimal
    const hexPattern = /^[a-f0-9]+$/i;
    if (!hexPattern.test(token)) {
      return false;
    }

    // Check length if specified
    if (expectedLength && token.length !== expectedLength) {
      return false;
    }

    return true;
  }

  /**
   * Generate backup codes for 2FA
   */
  static generateBackupCodes(count: number = 10): string[] {
    const codes: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const code = TokenUtils.generateAlphanumericToken(8);
      // Format as XXXX-XXXX for readability
      const formatted = `${code.substring(0, 4)}-${code.substring(4, 8)}`;
      codes.push(formatted);
    }
    
    return codes;
  }
}

// ========================
// MAIN CRYPTO UTILS CLASS
// ========================

export class CryptoUtils {
  static Hash = HashUtils;
  static Password = PasswordUtils;
  static Token = TokenUtils;
  static Encryption = EncryptionUtils;
  static Security = SecurityUtils;

  /**
   * Generate a secure random string with specified length and character set
   */
  static generateSecureRandom(
    length: number, 
    charset: 'numeric' | 'alpha' | 'alphanumeric' | 'hex' | 'base64' = 'alphanumeric'
  ): string {
    switch (charset) {
      case 'numeric':
        return TokenUtils.generateNumericToken(length);
      case 'alpha':
        return TokenUtils.generateAlphanumericToken(length).replace(/[0-9]/g, '');
      case 'alphanumeric':
        return TokenUtils.generateAlphanumericToken(length);
      case 'hex':
        return TokenUtils.generateSecureToken(Math.ceil(length / 2)).substring(0, length);
      case 'base64':
        return TokenUtils.generateUrlSafeToken(Math.ceil(length * 3 / 4)).substring(0, length);
      default:
        return TokenUtils.generateAlphanumericToken(length);
    }
  }

  /**
   * Quick hash function for non-security purposes
   */
  static quickHash(input: string): string {
    return HashUtils.sha256(input).substring(0, 16);
  }

  /**
   * Generate checksum for data integrity
   */
  static generateChecksum(data: string): string {
    return HashUtils.sha256(data);
  }

  /**
   * Verify data integrity using checksum
   */
  static verifyChecksum(data: string, checksum: string): boolean {
    return HashUtils.timingSafeEqual(this.generateChecksum(data), checksum);
  }
}

// ========================
// TYPE DEFINITIONS
// ========================

export interface PasswordHashResult {
  hash: string;
  salt: string;
}

export interface PasswordStrengthResult {
  score: number;
  feedback: string[];
  isStrong: boolean;
}

export type TokenType = 'session' | 'api' | 'refresh' | 'csrf' | 'otp' | 'uuid';
export type HashAlgorithm = 'sha256' | 'sha512' | 'md5';
export type CharsetType = 'numeric' | 'alpha' | 'alphanumeric' | 'hex' | 'base64';

// Export all utilities
export {
  HashUtils,
  PasswordUtils,
  TokenUtils,
  EncryptionUtils,
  SecurityUtils
};
