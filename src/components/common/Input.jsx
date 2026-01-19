import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';

/**
 * Input component with label, error states, and black/white theme
 */
const Input = forwardRef(
  (
    {
      id,
      name,
      type = 'text',
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      helperText,
      required = false,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              error ? 'text-white' : 'text-gray-300',
              disabled && 'opacity-50'
            )}
          >
            {label}
            {required && <span className="text-white ml-1">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200',
            'bg-gray-900 border',
            error
              ? 'border-white focus:border-white'
              : 'border-gray-700 focus:border-white',
            'focus:outline-none focus:ring-1 focus:ring-white',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />

        {(error || helperText) && (
          <p
            className={cn(
              'mt-1.5 text-xs',
              error ? 'text-white' : 'text-gray-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Input);
