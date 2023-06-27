import React, { Component } from "react";
import PropTypes from "prop-types";

import { FieldLabel } from "../../FieldLabel";
import { TextAreaField } from "../../TextAreaField";

export default class TextArea extends Component {
  render() {
    const { fieldPath, required, label, icon, description, rows, labelPopup } =
      this.props;

    return (
      <>
        <TextAreaField
          key={fieldPath}
          fieldPath={fieldPath}
          required={required}
          label={
            <FieldLabel
              htmlFor={fieldPath}
              icon={icon}
              label={label}
              popup={labelPopup}
            />
          }
          rows={rows}
        />
        {description && <label className="helptext">{description}</label>}
      </>
    );
  }
}

TextArea.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  labelPopup: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    popupId: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
  }),
};

TextArea.defaultProps = {
  icon: undefined,
  required: false,
  rows: 3,
  labelPopup: {},
};
