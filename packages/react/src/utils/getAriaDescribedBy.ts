/**
 * Generates aria-describedby attribute value for form fields
 * Ensures description and error are properly linked when present
 */
export const getAriaDescribedBy = (options: {
  description?: boolean;
  error?: boolean;
  descriptionId?: string;
  errorId?: string;
}): string | undefined => {
  const ids: string[] = [];

  if (options.description && !options.error && options.descriptionId) {
    ids.push(options.descriptionId);
  }

  if (options.error && options.errorId) {
    ids.push(options.errorId);
  }

  return ids.length > 0 ? ids.join(' ') : undefined;
};
