import { useId, useState } from 'react';
import { cn } from '../../utils/css';

export interface SearchProps {
  /** Accessible label for the search landmark and input (visually hidden) */
  label?: string;
  /** Text for the submit button */
  buttonLabel?: string;
  /** Initial value for the search input */
  defaultValue?: string;
  /** Called with the trimmed query string when the form is submitted */
  onSearch?: (query: string) => void;
  action?: string;
  /** Name attribute for the search input */
  name?: string;
  /** Placeholder text for the search input */
  placeholder?: string;
  className?: string;
}

export function Search({
  label = 'Search',
  buttonLabel = 'Search',
  defaultValue = '',
  onSearch,
  action = '/search',
  name = 'q',
  placeholder,
  className,
}: SearchProps) {
  const id = useId();
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (onSearch) {
      event.preventDefault();
      onSearch(query.trim());
    }
  }

  return (
    <search aria-label={label}>
      <form action={action} className={cn('flex w-full', className)} onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          className="h-15.5 w-full min-w-0 flex-1 rounded-l-sm bg-white-00 px-4 text-[20px] leading-normal outline-none transition-all hover:shadow-form-hover focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-teal-100"
          id={id}
          name={name}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          type="search"
          value={query}
        />
        <button
          className="h-15.5 rounded-r-sm bg-teal-00 px-6 text-[20px] text-white-00 leading-normal outline-none transition-[background-color,box-shadow] duration-200 hover:bg-[#1a777d] hover:shadow-[inset_0_0_0_4px_rgba(222,245,246,0.10)] focus-visible:ring-4 focus-visible:ring-teal-100 focus-visible:ring-offset-1 active:bg-[#0a4549] active:shadow-[inset_0_0_0_3px_rgba(0,0,0,0.20)] active:ring-4 active:ring-teal-100 active:ring-offset-1"
          type="submit"
        >
          {buttonLabel}
        </button>
      </form>
    </search>
  );
}
