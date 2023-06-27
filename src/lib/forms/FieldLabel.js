// This file is part of React-Invenio-Forms
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020 Northwestern University.
// Copyright (C) 2021 Graz University of Technology.
//
// React-Invenio-Forms is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import _isEmpty from "lodash/isEmpty";
import { InvenioPopup } from "../elements/accessibility/InvenioPopup";

export class FieldLabel extends Component {
  render() {
    const { htmlFor, icon, label, className, popup } = this.props;
    return (
      <label htmlFor={htmlFor} className={className}>
        {icon ? <Icon name={icon} /> : null}
        {label}
        {!_isEmpty(popup) && (
          <InvenioPopup
            ariaLabel={popup.ariaLabel}
            trigger={
              <span>
                <Icon name="question circle outline" className="neutral ml-5" />
              </span>
            }
            content={popup.content}
            popupId={popup.popupId}
            inverted={popup.inverted}
            position={popup.position}
            size={popup.size}
          />
        )}
      </label>
    );
  }
}

FieldLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.string,
  className: PropTypes.string,
  popup: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    popupId: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
  }),
};

FieldLabel.defaultProps = {
  className: "field-label-class invenio-field-label",
  icon: "",
  htmlFor: undefined,
  label: undefined,
  popup: {},
};
