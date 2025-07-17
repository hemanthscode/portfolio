import React, { memo } from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { theme } from "../../constants/theme";

/**
 * Input component with validation and sanitization.
 * @param {Object} props
 * @param {string} props.id - Input ID for accessibility.
 * @param {string} props.name - Input name for form submission.
 * @param {string} props.type - Input type (text, email, etc.).
 * @param {string} props.placeholder - Placeholder text.
 * @param {string} props.value - Input value.
 * @param {Function} props.onChange - Change handler.
 * @param {string} props.error - Error message.
 * @param {string} props.className - Additional Tailwind classes.
 * @param {Object} props.rest - Additional props for the input.
 * @returns {JSX.Element}
 * @example
 * <Input id="name" name="name" value={form.name} onChange={handleChange} />
 */
const Input = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = "",
  ...rest
}) => (
  <div className="relative w-full">
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 ${theme.borderRadius.default} ${theme.colors.border} ${theme.colors.background} ${theme.typography.body.base} ${theme.colors.text.primary} placeholder-gray-500 focus:outline-none focus:ring-2 ${theme.colors.focusRing} ${theme.transition.default} ${error ? theme.colors.error : ""} ${className}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      {...rest}
    />
    {error && (
      <p
        id={`${id}-error`}
        className={`${theme.typography.body.sm} mt-1 ${theme.colors.text.error}`}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(error) }}
      />
    )}
  </div>
);

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