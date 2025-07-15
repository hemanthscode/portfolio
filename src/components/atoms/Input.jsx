import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { typography } from '../../constants/theme';

/**
 * Input component with validation and sanitization
 * @param {Object} props
 * @param {string} props.id - Input ID
 * @param {string} props.name - Input name
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element}
 */
const Input = ({ id, name, type = 'text', placeholder, value, onChange, error, className = '', ...props }) => {
  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    onChange({ ...e, target: { ...e.target, value: sanitizedValue } });
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`w-full px-4 py-3 rounded-lg border bg-white ${typography.body.base} text-gray-800 ${error ? 'border-error' : 'border-gray-300'} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className={`mt-1 ${typography.body.sm} text-error`}>{DOMPurify.sanitize(error)}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Input);