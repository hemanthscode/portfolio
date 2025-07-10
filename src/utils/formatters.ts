// src/utils/formatters.ts
/**
 * Formats a string by trimming whitespace and normalizing spaces.
 * @param str - The input string to format.
 * @returns The formatted string.
 */
export const formatString = (str: string): string => {
  return str.trim().replace(/\s+/g, ' ');
};

/**
 * Capitalizes the first letter of a string.
 * @param str - The input string.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formats a date to a readable string.
 * @param date - The input date.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};