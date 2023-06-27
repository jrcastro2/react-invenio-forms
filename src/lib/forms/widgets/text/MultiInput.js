import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormikContext, getIn } from "formik";

import { FieldLabel } from "../../FieldLabel";
import { SelectField } from "../../SelectField";

export default function MultiInput({
  additionLabel,
  description,
  placeholder,
  fieldPath,
  label,
  icon,
  required,
  labelPopup,
}) {
  const [options, setOptions] = useState([]);
  const { values } = useFormikContext();
  const serializeValues = (values) =>
    values?.map((item) => ({
      text: item,
      key: item,
      value: item,
    }));

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
        options={serializeValues(getIn(values, fieldPath, []))}
        placeholder={placeholder}
        required={required}
        search
        multiple
        clearable
        optimized
        defaultValue={[]}
        noResultsMessage={placeholder} // show the placeholder to instruct user how to add new values
        additionLabel={additionLabel}
        onChange={({ data, formikProps }) => {
          setOptions(serializeValues(data.value));
          formikProps.form.setFieldValue(fieldPath, data.value);
        }}
        allowAdditions
        onAddItem={({ data }) => {
          setOptions([{ text: data.value, value: data.value }, ...options]);
        }}
      />
      {description && <label className="helptext">{description}</label>}
    </>
  );
}

MultiInput.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionLabel: PropTypes.string,
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

MultiInput.defaultProps = {
  additionLabel: undefined,
  icon: undefined,
  required: false,
  labelPopup: {},
};
