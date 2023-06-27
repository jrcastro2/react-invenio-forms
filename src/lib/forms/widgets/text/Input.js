import React, { Component } from "react";
import PropTypes from "prop-types";

import { FieldLabel } from "../../FieldLabel";
import { TextField } from "../../TextField";

export default class Input extends Component {
  render() {
    const {
      fieldPath,
      required,
      label,
      icon,
      placeholder,
      description,
      disabled,
      type,
      labelPopup,
    } = this.props;

    return (
      <TextField
        key={fieldPath}
        fieldPath={fieldPath}
        required={required}
        helpText={description}
        disabled={disabled}
        label={
          <FieldLabel
            htmlFor={fieldPath}
            icon={icon}
            label={label}
            popup={labelPopup}
          />
        }
        placeholder={placeholder}
        type={type}
      />
    );
  }
}

Input.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  labelPopup: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    popupId: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
  }),
};

Input.defaultProps = {
  icon: undefined,
  required: false,
  disabled: false,
  type: "input",
  labelPopup: {},
};
