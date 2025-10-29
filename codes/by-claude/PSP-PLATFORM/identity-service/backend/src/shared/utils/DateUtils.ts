/**
 * DateUtils.ts - Date Manipulation Utilities
 * 
 * Purpose: Common date operations and formatting utilities
 * Usage: Import for consistent date handling across services
 */

export class DateUtils {
  /**
   * Get current UTC timestamp
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Add minutes to a date
   */
  static addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }

  /**
   * Add hours to a date
   */
  static addHours(date: Date, hours: number): Date {
    return new Date(date.getTime() + hours * 3600000);
  }

  /**
   * Add days to a date
   */
  static addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 86400000);
  }

  /**
   * Check if date is expired
   */
  static isExpired(date: Date): boolean {
    return date < new Date();
  }

  /**
   * Format date to ISO string
   */
  static toISOString(date: Date): string {
    return date.toISOString();
  }

  /**
   * Parse ISO string to date
   */
  static fromISOString(isoString: string): Date {
    return new Date(isoString);
  }

  /**
   * Check if date is valid
   */
  static isValid(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  /**
   * Get start of day
   */
  static startOfDay(date: Date): Date {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
  }

  /**
   * Get end of day
   */
  static endOfDay(date: Date): Date {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
  }

  /**
   * Get difference in minutes
   */
  static differenceInMinutes(date1: Date, date2: Date): number {
    return Math.floor((date1.getTime() - date2.getTime()) / 60000);
  }

  /**
   * Format for display
   */
  static formatForDisplay(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
