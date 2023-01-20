// This file is part of React-Invenio-Forms
// Copyright (C) 2023 CERN.
//
// React-Invenio-Forms is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

let components;

/**
 * Singleton class to provide a global access point to the overriden components
 */
class OverridenSingleton {
  constructor() {
    if (!OverridenSingleton.instance) {
      OverridenSingleton.instance = this;
    }

    return OverridenSingleton.instance;
  }

  getComponents() {
    return components;
  }

  addComponents(newComponents) {
    components = { ...components, ...newComponents };
  }
}

export const overridableRegistry = new OverridenSingleton();
