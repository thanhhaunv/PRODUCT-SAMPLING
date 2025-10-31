import { validate, ValidationError } from 'class-validator';
import { Result } from '../core/Result';

/**
 * Validation utilities using class-validator
 * Refs: SRS Part05.4 Input Validation, EMSA-v1.0 validation standards
 */
export class ValidationUtils {
  /**
   * Validate an object using class-validator decorators
   */
  public static async validateObject<T extends object>(obj: T): Promise<Result<T>> {
    const errors: ValidationError[] = await validate(obj);
    
    if (errors.length > 0) {
      const errorMessages = this.formatValidationErrors(errors);
      return Result.fail<T>(`Validation failed: ${errorMessages.join(', ')}`);
    }
    
    return Result.ok<T>(obj);
  }

  /**
   * Format validation errors into readable messages
   */
  private static formatValidationErrors(errors: ValidationError[]): string[] {
    const messages: string[] = [];
    
    errors.forEach(error => {
      if (error.constraints) {
        Object.values(error.constraints).forEach(constraint => {
          messages.push(`${error.property}: ${constraint}`);
        });
      }
      
      if (error.children && error.children.length > 0) {
        const childMessages = this.formatValidationErrors(error.children);
        messages.push(...childMessages.map(msg => `${error.property}.${msg}`));
      }
    });
    
    return messages;
  }

  /**
   * Check if email format is valid
   */
  public static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Check if phone number format is valid (international format)
   */
  public static isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Check if password meets security requirements
   */
  public static isValidPassword(password: string): boolean {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  /**
   * Sanitize string input to prevent XSS
   */
  public static sanitizeString(input: string): string {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }
}
