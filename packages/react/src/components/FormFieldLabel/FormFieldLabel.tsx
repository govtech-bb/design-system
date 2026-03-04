import { ReactNode } from 'react';
import { DESCRIPTION_CLASS, ERROR_CLASS, LABEL_CLASS } from '../../utils/typography';

export interface FormFieldLabelProps {
  id: string;
  label?: string;
  description?: string;
  error?: ReactNode;
  errorId?: string;
  descriptionId?: string;
}

/**
 * Reusable component for rendering form field labels with optional description and error message
 * Ensures description is hidden when error is present (fixes common UX bug)
 */
export const FormFieldLabel = ({
  id,
  label,
  description,
  error,
  errorId,
  descriptionId,
}: FormFieldLabelProps) => {
  if (!label) return null;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`block ${LABEL_CLASS}`}>
        {label}
      </label>

      {!error && description && (
        <p id={descriptionId} className={DESCRIPTION_CLASS}>
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className={ERROR_CLASS}>
          {error}
        </p>
      )}
    </div>
  );
};

FormFieldLabel.displayName = 'FormFieldLabel';
