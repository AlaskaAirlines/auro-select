// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 *
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the dropdown menu.
 * @prop {Boolean} error - When attribute is present element shows error state.
 * @prop {Boolean} disabled - When attribute is present element shows disabled state.
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 */

// build the component class
class AuroSelect extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Please select option';
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
    this.optionSelected = undefined;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      /**
       * @private
       */
      items: { type: Array },

      optionSelected: {
        type: Object
      },
      value: {
        type: String,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      placeholder: { type: String }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  /**
   * @private
   */
  performUpdate() {
    super.performUpdate();

    if (this.error) {
      this.shadowRoot.querySelector('auro-dropdown').setAttribute('error', '');
    } else if (!this.error) {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('error');
    }

    if (this.disabled) {
      this.shadowRoot.querySelector('auro-dropdown').setAttribute('disabled', '');
    } else if (!this.disabled) {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('disabled');
    }

    if (this.required && this.value) {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('error');
    }
  }

  // lifecycle runs only after the element's DOM has been updated the first time
  firstUpdated() {
    this.items = this.querySelectorAll('auro-menuoption');
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');
    this.menu = this.querySelector('auro-menu');

    this.addEventListener('keydown', (evt) => {
      if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.menu.selectNextItem('up');
      }

      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.menu.selectNextItem('down');
      }

      if (evt.key === 'Enter') {
        if (!this.dropdown.isPopoverVisible) {
          evt.preventDefault();
          this.menu.makeSelection();
        }
      }

      if (evt.key === 'Tab') {
        this.dropdown.hide();
      }
    });

    // custom event listener from auro-menu fires with both 'click' and keypress events
    this.addEventListener('selectedOption', (evt) => {
      this.displayValue = evt.target.optionSelected.innerText;
      this.value = evt.target.optionSelected.value;
      this.optionSelected = evt.target.optionSelected;

      if (this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }
    });

    /**
     * When this.value is preset auro-menu.selectByValue(this.value) is called.
     * However, if this.value does not match one of the menu options,
     * auro-menu will notify via event. In this case, clear out this.value
     * so that it is not storing an invalid value which can then later be returned
     * with `auro-select.value`.
     */
    this.addEventListener('auroMenuSelectValueFailure', () => {
      this.value = undefined;
      this.removeAttribute('value');
    });
  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      if (this.value && (!this.optionSelected || this.value !== this.optionSelected.value)) {
        this.menu.selectByValue(this.value);
      }
    }
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <auro-dropdown
          for="selectmenu"
          toggle
          inset
          bordered
          rounded
          chevron>
          <span slot="trigger" aria-haspopup="true" id="triggerFocus">
            ${this.value ? this.displayValue : html`<span class="placeholder">${this.placeholder}</span>`}
          </span>
          <div class="menuWrapper">
            <slot></slot>
          </div>
          <slot name="label" slot="label"></slot>
          <slot name="helpText" slot="helpText"></slot>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-select")) {
  customElements.define("auro-select", AuroSelect);
}
