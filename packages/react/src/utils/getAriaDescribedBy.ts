/**
 * Generates aria-describedby attribute value for form fields
 * Ensures description and error are properly linked when present
 */
export const getAriaDescribedBy = (options: {
  hasDescription?: boolean;
  hasError?: boolean;
  descriptionId?: string;
  errorId?: string;
}): string | undefined => {
  const ids: string[] = [];

  if (options.hasDescription && !options.hasError && options.descriptionId) {
    ids.push(options.descriptionId);
  }

  if (options.hasError && options.errorId) {
    ids.push(options.errorId);
  }

  return ids.length > 0 ? ids.join(' ') : undefined;
};
