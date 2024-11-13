import { AuroSelect } from '../../src/auro-select.js';

/**
 * The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 */
class AuroSelectWCA extends AuroSelect {}

if (!customElements.get("auro-select")) {
  customElements.define("auro-select", AuroSelectWCA);
}
