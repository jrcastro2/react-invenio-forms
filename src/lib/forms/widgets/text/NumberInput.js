import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

const NumberInput = (props) => {
  const {
    fieldPath,
    label,
    placeholder,
    description,
    icon,
    required,
    disabled,
    type,
    positiveIntegerOnly,
  } = props;
  const onKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <Input
      fieldPath={fieldPath}
      label={label}
      placeholder={placeholder}
      description={description}
      icon={icon}
      required={required}
      disabled={disabled}
      type={type}
      onKeyPress={positiveIntegerOnly && onKeyPress}
    />
  );
};

export default NumberInput;

NumberInput.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  positiveIntegerOnly: PropTypes.bool,
};

NumberInput.defaultProps = {
  icon: undefined,
  required: false,
  disabled: false,
  type: "number",
  positiveIntegerOnly: false,
};
