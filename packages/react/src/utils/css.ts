import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Converts pixels to rem units (base 16px)
 * @param px - Pixel value to convert
 * @returns rem value as string
 * @example rem(16) => "1rem"
 * @example rem(24) => "1.5rem"
 * @example rem(0) => "0"
 */
export const rem = (px: number): string => {
  if (px === 0) return '0';
  return `${px / 16}rem`;
};

/**
 * Converts pixels to em units
 * @param px - Pixel value to convert
 * @param base - Base font size in pixels (default: 16)
 * @returns em value as string
 * @example em(16) => "1em"
 * @example em(12, 12) => "1em"
 * @example em(24, 16) => "1.5em"
 */
export const em = (px: number, base: number = 16): string => {
  if (px === 0) return '0';
  return `${px / base}em`;
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
