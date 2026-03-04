import { useId } from 'react';

interface FormFieldIds {
  id: string;
  errorId: string;
  descriptionId: string;
}

/**
 * Custom hook to generate consistent ID attributes for form fields
 * @param providedId - Optional user-provided ID
 * @returns Object with id, errorId, and descriptionId
 */
export const useFormFieldIds = (providedId?: string): FormFieldIds => {
  const generatedId = useId();
  const id = providedId || generatedId;

  return {
    id,
    errorId: `${id}-error`,
    descriptionId: `${id}-description`,
  };
};
