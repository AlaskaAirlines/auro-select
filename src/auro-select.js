// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

import '@aurodesignsystem/auro-menu';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

/* eslint-disable max-lines, prefer-named-capture-group */

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 *
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityCustomError - Custom help text message to display when validity = `customError`.
 * @attr {String} setCustomValidityValueMissing - Custom help text message to display when validity = `valueMissing`.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the element. Used for client-side validation.
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the component.
 * @prop {Boolean} disabled - When attribute is present element shows disabled state.
 * @prop {Boolean} noCheckmark - When true, checkmark on selected option will no longer be present.
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @fires auroSelect-ready - Notifies that the component has finished initializing.
 * @fires auroSelect-valueSet - Notifies that the component has a new value set.
 */

// build the component class
class AuroSelect extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Please select option';
    this.optionSelected = undefined;
    this.validity = undefined;

    const idLength = 36;
    const idSubstrEnd = 8;
    const idSubstrStart = 2;

    /**
     * @private
     */
    this.uniqueId = Math.random().
      toString(idLength).
      substring(idSubstrStart, idSubstrEnd);
  }

  /**
   * @private
   * @returns {void} Internal defaults.
   */
  privateDefaults() {
    this.options = [];
    this.optionActive = null;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      optionSelected: {
        type: Object
      },
      value: {
        type: String,
        reflect: true
      },
      noValidate: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: String,
        reflect: true
      },
      setCustomValidity: {
        type: String
      },
      setCustomValidityCustomError: {
        type: String
      },
      setCustomValidityValueMissing: {
        type: String
      },
      validity: {
        type: String,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      noCheckmark: {
        type: Boolean,
        reflect: true
      },
      placeholder: { type: String },

      /**
       * @private
       */
      options: { type: Array },

      /**
       * @private
       */
      optionActive: { type: Object },
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  /**
   * Determines the validity state of the element.
   * @private
   * @returns {void}
   */
  validate() {
    // Handle error attribute change regardless of focus
    if (this.hasAttribute('error')) {
      this.validity = 'customError';
      this.setCustomValidity = this.error;
    } else {
      this.validity = undefined;
      this.removeAttribute('validity');
      this.setCustomValidity = '';
    }
    // Validate only if noValidate is not true and the input does not have focus
    if (!this.contains(document.activeElement)) {
      if (this.value !== undefined && !this.noValidate) {
        this.validity = 'valid';
        this.setCustomValidity = '';

        /**
         * Only validate once we interact with the datepicker
         * this.value === undefined is the initial state pre-interaction.
         *
         * The validityState definitions are located at https://developer.mozilla.org/en-US/docs/Web/API/ValidityState.
         */
        if ((!this.value || this.value.length === 0) && this.required) {
          this.validity = 'valueMissing';
          this.setCustomValidity = this.setCustomValidityValueMissing;
        }
      } else if (!this.hasAttribute('error')) {
        this.validity = undefined;
        this.setCustomValidity = '';
      }
    }
    if (this.validity && this.validity !== 'valid') {
      this.isValid = false;
      // Use the validity message override if it is declared
      if (this.ValidityMessageOverride) {
        this.setCustomValidity = this.ValidityMessageOverride;
      }
    } else {
      this.isValid = true;
    }
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureDropdown() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');

    this.dropdown.addEventListener('auroDropdown-ready', () => {
      this.auroDropdownReady = true;
    });
  }

  /**
   * Binds all behavior needed to the menu after rendering.
   * @private
   * @returns {void}
   */
  configureMenu() {
    this.menu = this.querySelector('auro-menu');

    this.menu.setAttribute('aria-hidden', 'true');

    this.generateOptionsArray();

    this.menu.addEventListener('auroMenu-ready', () => {
      this.auroMenuReady = true;
    });

    this.addEventListener('auroMenu-activatedOption', (evt) => {
      this.optionActive = evt.detail;
    });

    this.menu.addEventListener('selectedOption', () => {
      const dropdown = this.shadowRoot.querySelector('auro-dropdown');
      const triggerContentEl = dropdown.querySelector('#triggerFocus');

      this.optionSelected = this.menu.optionSelected;
      this.value = this.optionSelected.value;
      triggerContentEl.innerHTML = this.optionSelected.innerHTML;

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
    this.menu.addEventListener('auroMenu-selectValueFailure', () => {
      this.menu.optionSelected = undefined;
      this.optionSelected = this.menu.optionSelected;

      const dropdown = this.shadowRoot.querySelector('auro-dropdown');
      const triggerContentEl = dropdown.querySelector('#triggerFocus');

      this.validity = 'badInput';

      // Capitilizes the first letter of each word in this.value string
      triggerContentEl.innerHTML = this.value.replace(/(^\w{1})|(\s+\w{1})/gu, (letter) => letter.toUpperCase());
    });

    this.menu.addEventListener('auroMenu-selectValueReset', () => {
      const dropdown = this.shadowRoot.querySelector('auro-dropdown');
      const triggerContentEl = dropdown.querySelector('#triggerFocus');

      triggerContentEl.innerHTML = this.placeholder;

      this.optionSelected = undefined;
      this.value = undefined;
      this.validity = undefined;
      this.validate();
    });
  }

  /**
   * Binds all behavior needed to the component after rendering.
   * @private
   * @returns {void}
   */
  configureSelect() {
    this.addEventListener('keydown', (evt) => {
      if (evt.key === 'ArrowUp') {
        evt.preventDefault();

        this.dropdown.show();

        if (this.dropdown.isPopoverVisible) {
          this.menu.selectNextItem('up');
        }
      }

      if (evt.key === 'ArrowDown') {
        evt.preventDefault();

        this.dropdown.show();

        if (this.dropdown.isPopoverVisible) {
          this.menu.selectNextItem('down');
        }
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

    this.addEventListener('focusin', this.handleFocusin);

    this.addEventListener('blur', () => {
      this.validate();
    });

    this.labelForSr();
  }

  /**
   * Function to support @focusin event.
   * @private
   * @return {void}
   */
  handleFocusin() {

    /**
     * The input is considered to be in it's initial state based on
     * if this.value === undefined. The first time we interact with the
     * input manually, by applying focusin, we need to flag the
     * input as no longer in the initial state.
     */
    if (this.value === undefined) {
      this.value = '';
      this.removeEventListener('focusin', this.handleFocusin);
    }
  }

  /**
   * Marks the component as ready and sends event.
   * @private
   * @returns {void}
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroSelect-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Monitors readiness of peer dependencies and begins work that should only start when ready.
   * @private
   * @returns {void}
   */
  async checkReadiness() {
    if (this.auroDropdownReady && this.auroMenuReady) {
      this.readyActions();
      this.notifyReady();
    } else {
      // Start a retry counter to limit the retry count
      if (!this.readyRetryCount && this.readyRetryCount !== 0) {
        this.readyRetryCount = 0;
      } else {
        this.readyRetryCount += 1;
      }

      const readyTimer = 0;
      const readyRetryLimit = 200;

      if (this.readyRetryCount <= readyRetryLimit) {

        const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

        await sleep(readyTimer);
        this.checkReadiness();
      }
    }
  }

  /**
   * Determines the element error state based on the `required` attribute and input value.
   * @private
   * @returns {void}
   */
  generateOptionsArray() {
    if (this.menu) {
      this.options = [...this.menu.querySelectorAll('auro-menuoption')];
    } else {
      this.options = [];
    }
  }

  /**
   * Functionality that should not be performed until the combobox is in a ready state.
   * @private
   * @returns {void}
   */
  readyActions() {
    // Set the initial value in auro-menu if defined
    if (this.hasAttribute('value') && this.getAttribute('value').length > 0) {
      this.menu.value = this.value;
    }
  }

  /**
   * Handle element attributes on update.
   * @private
   * @returns {void}
   */
  performUpdate() {
    super.performUpdate();

    if (this.validity !== undefined && this.validity !== 'valid') {
      this.shadowRoot.querySelector('auro-dropdown').setAttribute('error', '');
    } else {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('error');
    }

    if (this.disabled) {
      this.shadowRoot.querySelector('auro-dropdown').setAttribute('disabled', '');
    } else if (!this.disabled) {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('disabled');
    }

    if (this.noCheckmark) {
      this.menu.setAttribute('nocheckmark', '');
    }
  }

  // lifecycle runs only after the element's DOM has been updated the first time
  firstUpdated() {
    this.configureMenu();
    this.configureDropdown();
    this.configureSelect();

    this.checkReadiness();
  }

  updated(changedProperties) {
    // After the component is ready, send direct value changes to auro-menu.
    if (this.ready && changedProperties.has('value')) {
      if (this.value) {
        this.menu.value = this.value;
      } else {
        this.menu.value = undefined;
      }
    }

    if (changedProperties.has('value')) {
      this.validate();
    }

    if (changedProperties.has('value')) {
      this.dispatchEvent(new CustomEvent('auroSelect-valueSet', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    }

    if (changedProperties.has('error')) {
      this.validate();
    }
  }

  /**
   * Handles reading of auro-select by screenreaders.
   * @private
   * @returns {void}
   */
  labelForSr() {
    const placeholderLabel = document.createElement("div");
    const textId = "label";

    placeholderLabel.setAttribute("id", textId);
    placeholderLabel.setAttribute("aria-live", "polite");

    const styles = {
      position: 'absolute',
      overflow: 'hidden',
      clipPath: 'inset(1px, 1px, 1px, 1px)',
      width: '1px',
      height: '1px',
      padding: '0',
      border: '0'
    };

    Object.assign(placeholderLabel.style, styles);

    this.addEventListener('focus', () => {
      document.body.appendChild(placeholderLabel);

      if (!this.optionSelected) {
        document.getElementById(textId).innerHTML = this.placeholder;
      } else {
        document.getElementById(textId).innerHTML = `${this.optionSelected.innerText}, ${this.placeholder}`;
      }
    });

    this.addEventListener('blur', () => {
      document.body.removeChild(document.getElementById(textId));
    });
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <div aria-live="polite" class="util_displayHiddenVisually">
          ${this.optionActive && this.options.length > 0
            ? html`
              ${`${this.optionActive.innerText}, option ${this.options.indexOf(this.optionActive) + 1} of ${this.options.length}`}
            `
            : undefined
          };

          ${this.optionSelected && this.options.length > 0
            ? html`
            ${`${this.optionSelected.innerText} selected`}
            `
            : undefined
          };
        </div>
        <auro-dropdown
          for="selectmenu"
          ?error="${this.validity !== undefined && this.validity !== 'valid'}"
          common
          matchWidth
          chevron>
          <span slot="trigger" aria-haspopup="true" id="triggerFocus">
            ${this.value ? this.displayValue : html`<span class="placeholder">${this.placeholder}</span>`}
          </span>
          <div class="menuWrapper">
            <slot></slot>
          </div>
          <slot name="label" slot="label"></slot>
        </auro-dropdown>
        <!-- Help text and error message template -->
        ${!this.validity || this.validity === undefined || this.validity === 'valid'
          ? html`
            <p class="selectElement-helpText" id="${this.uniqueId}" part="helpText">
              <slot name="helpText"></slot>
            </p>`
          : html`
            <p class="selectElement-helpText" id="${this.uniqueId}" role="alert" aria-live="assertive" part="helpText">
              ${this.setCustomValidity}
            </p>`
        }
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-select")) {
  customElements.define("auro-select", AuroSelect);
}
