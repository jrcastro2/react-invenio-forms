import React, { Component } from "react";
import PropTypes from "prop-types";

import { FieldLabel } from "../../FieldLabel";
import { RichInputField } from "../../RichInputField";

export default class RichInput extends Component {
  render() {
    const { fieldPath, required, label, icon, description, editorConfig, labelPopup } =
      this.props;
    return (
      <>
        <RichInputField
          key={fieldPath}
          fieldPath={fieldPath}
          required={required}
          editorConfig={editorConfig}
          label={
            <FieldLabel
              htmlFor={fieldPath}
              icon={icon}
              label={label}
              popup={labelPopup}
            />
          }
        />
        {description && <label className="helptext">{description}</label>}
      </>
    );
  }
}

RichInput.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  editorConfig: PropTypes.object,
  icon: PropTypes.string,
  required: PropTypes.bool,
  labelPopup: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    popupId: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
  }),
};

RichInput.defaultProps = {
  icon: undefined,
  editorConfig: {},
  labelPopup: {},
  required: false,
};
