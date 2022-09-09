// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

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
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the component.
 * @prop {Boolean} error - When attribute is present element shows error state.
 * @prop {Boolean} disabled - When attribute is present element shows disabled state.
 * @prop {Boolean} checkmark - When true, selected option will show the checkmark.
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @fires auroSelect-ready - Notifies that the component has finished initializing.
 */

// build the component class
class AuroSelect extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Please select option';
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
    this.optionSelected = undefined;
    this.checkmark = true;
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
      checkmark: {
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
    this.items = this.querySelectorAll('auro-menuoption');

    this.menu = this.querySelector('auro-menu');

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

      this.removeAttribute('error');

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

      // Capitilizes the first letter of each word in this.value string
      triggerContentEl.innerHTML = this.value.replace(/(^\w{1})|(\s+\w{1})/gu, (letter) => letter.toUpperCase());

      this.setAttribute('error', '');
    });

    this.menu.addEventListener('auroMenu-selectValueReset', () => {
      const dropdown = this.shadowRoot.querySelector('auro-dropdown');
      const triggerContentEl = dropdown.querySelector('#triggerFocus');

      triggerContentEl.innerHTML = this.placeholder;

      this.optionSelected = undefined;
      this.removeAttribute('error');
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

    this.menus = [...this.querySelectorAll('auro-menu')];

    for (let index = 0; index < this.menus.length; index += 1) {
      if (this.menus[index].hasAttribute('nocheckmark')) {
        this.checkmark = false;
      }
    }


    if (this.required && this.value) {
      this.shadowRoot.querySelector('auro-dropdown').removeAttribute('error');
    }
  }

  // lifecycle runs only after the element's DOM has been updated the first time
  firstUpdated() {
    this.configureDropdown();
    this.configureMenu();
    this.configureSelect();

    this.checkReadiness();

  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      this.menu.value = this.value;
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
          common
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
