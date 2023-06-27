import React, { Component } from "react";
import PropTypes from "prop-types";

import { FieldLabel } from "../../FieldLabel";
import { SelectField } from "../../SelectField";

export default class Dropdown extends Component {
  serializeOptions = (options) =>
    options?.map((option) => ({
      text: option.title_l10n,
      value: option.id,
      key: option.id,
    }));

  render() {
    const {
      description,
      placeholder,
      fieldPath,
      label,
      icon,
      options,
      search,
      multiple,
      clearable,
      required,
      labelPopup,
    } = this.props;
    return (
      <>
        <SelectField
          fieldPath={fieldPath}
          label={
            <FieldLabel
              htmlFor={fieldPath}
              icon={icon}
              label={label}
              popup={labelPopup}
            />
          }
          options={this.serializeOptions(options)}
          search={search}
          multiple={multiple}
          placeholder={placeholder}
          clearable={clearable}
          required={required}
          optimized
          defaultValue={multiple ? [] : ""}
        />
        {description && <label className="helptext">{description}</label>}
      </>
    );
  }
}

Dropdown.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title_l10n: PropTypes.string.isRequired,
    })
  ).isRequired,
  icon: PropTypes.string,
  search: PropTypes.bool,
  multiple: PropTypes.bool,
  clearable: PropTypes.bool,
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

Dropdown.defaultProps = {
  icon: undefined,
  search: false,
  multiple: false,
  clearable: true,
  required: false,
  labelPopup: {},
};
