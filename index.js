import { AuroSelect } from './src/auro-select';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-select') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroSelect {});
  }
};

export { registerComponent };
