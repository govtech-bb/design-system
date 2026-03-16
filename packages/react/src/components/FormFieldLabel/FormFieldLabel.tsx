import { ReactNode } from 'react';

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
      <label htmlFor={id} className="text-[1.25rem] leading-normal font-bold text-black-00">
        {label}
      </label>

      {!error && description && (
        <p id={descriptionId} className="text-[1.25rem] leading-normal text-mid-grey-00">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="text-[1.25rem] leading-normal text-red-00">
          {error}
        </p>
      )}
    </div>
  );
};

FormFieldLabel.displayName = 'FormFieldLabel';
