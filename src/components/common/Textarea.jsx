import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';

/**
 * Textarea component with label, error states, and character counter
 */
const Textarea = forwardRef(
  (
    {
      id,
      name,
      label,
      placeholder,
      value = '',
      onChange,
      onBlur,
      error,
      helperText,
      rows = 4,
      maxLength,
      required = false,
      disabled = false,
      showCharCount = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const textareaId = id || name;
    const currentLength = value?.length || 0;
    const isNearLimit = maxLength && currentLength >= maxLength * 0.9;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
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

        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 resize-none',
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

        <div className="flex items-center justify-between mt-1.5">
          <div className="flex-1">
            {(error || helperText) && (
              <p className={cn('text-xs', error ? 'text-white' : 'text-gray-400')}>
                {error || helperText}
              </p>
            )}
          </div>

          {showCharCount && maxLength && (
            <p
              className={cn(
                'text-xs',
                isNearLimit ? 'text-white' : 'text-gray-500'
              )}
            >
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  showCharCount: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Textarea);
