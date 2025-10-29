/**
 * ValidationUtils.ts - Common Validation Utilities
 * 
 * Purpose: Reusable validation functions
 * Usage: Import for consistent validation across services
 */

import { ValidationRules } from '../constants/SystemConstants';

export class ValidationUtils {
  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    return ValidationRules.EMAIL_REGEX.test(email);
  }

  /**
   * Validate phone number format
   */
  static isValidPhoneNumber(phone: string): boolean {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return ValidationRules.PHONE_REGEX.test(cleanPhone);
  }

  /**
   * Validate password strength
   */
  static isValidPassword(password: string): boolean {
    return ValidationRules.PASSWORD_REGEX.test(password);
  }

  /**
   * Validate UUID format
   */
  static isValidUUID(uuid: string): boolean {
    return ValidationRules.UUID_REGEX.test(uuid);
  }

  /**
   * Validate username format
   */
  static isValidUsername(username: string): boolean {
    return ValidationRules.USERNAME_REGEX.test(username);
  }

  /**
   * Check if string is not empty
   */
  static isNotEmpty(value: string): boolean {
    return value && value.trim().length > 0;
  }

  /**
   * Check string length
   */
  static isValidLength(value: string, min: number, max?: number): boolean {
    const length = value ? value.length : 0;
    if (length < min) return false;
    if (max && length > max) return false;
    return true;
  }

  /**
   * Validate URL format
   */
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validate JSON format
   */
  static isValidJson(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Sanitize input string
   */
  static sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '');
  }

  /**
   * Check if value is numeric
   */
  static isNumeric(value: any): boolean {
    return !isNaN(value) && !isNaN(parseFloat(value));
  }

  /**
   * Validate file type
   */
  static isValidImageType(mimeType: string): boolean {
    return ValidationRules.IMAGE_MIME_TYPES.includes(mimeType);
  }
}
