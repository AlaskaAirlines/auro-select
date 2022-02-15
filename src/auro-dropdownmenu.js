// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// import '@aurodesignsystem/auro-menu';

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
 * The auro-dropdownmenu element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 *
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 * @prop {String} value - Value selected for the dropdown menu.
 * @prop {Boolean} error - When attribute is present element shows error state.
 * @prop {Boolean} disabled - When attribute is present element shows disabled state.
 * @prop {Boolean} autoselect - Use attribute select first option with first interaction.
 * @slot - Default slot for the menu content.
 * @slot label - Defines the content of the label.
 * @slot helperText - Defines the content of the helperText.
 */

// build the component class
class AuroDropdownmenu extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Please select option';
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
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
      autoselect: { type: Boolean },
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

    this.addEventListener('keydown', (evt) => {
      this.index = this.items.findIndex((item) => item.hasAttribute('selected'));

      if (evt.key === 'Escape' || evt.key === 'Enter') {
        this.shadowRoot.querySelector('auro-dropdown').hide();
      }

      if (evt.key === 'Enter') {
        if (this.index >= 0) {
          this.displayValue = this.items[this.index].innerText;
        }

        this.value = this.querySelector('auro-menu').value;
      }
    });


    // event listener fires with both pointerType 'mouse' and keypress events
    this.addEventListener('click', (evt) => {
      let focusIndex = 0;

      // Run .hide() if selection by mouse click
      if (evt.pointerType === 'mouse' && evt.target.selected) {
        this.shadowRoot.querySelector('auro-dropdown').hide();
      }

      // set tab focus on selected menuoption element
      for (let optionsIndex = 0; optionsIndex < this.items.length; optionsIndex += 1) {
        if (this.items[optionsIndex].hasAttribute('selected')) {
          focusIndex = optionsIndex;
        }
      }

      const currentFocus = this.items[focusIndex];

      currentFocus.focus();

      // Being consistent with a HTML select menu,
      // wth the first interaction, the fist option
      // is auto selected
      if (this.autoselect) {
        currentFocus.setAttribute('selected', '');
        this.value = currentFocus.value;
        this.displayValue = currentFocus.innerText;
      }
    });

    // custom event listener from auro-menu fires with both 'click' and keypress events
    this.addEventListener('selectedOption', (evt) => {

      // eval index of option to set display value, placeholder has negative index and no display value
      this.items = Array.from(this.querySelectorAll('auro-menuoption'));
      this.index = this.items.findIndex((item) => item.hasAttribute('selected'));

      if (this.index >= 0) {
        this.displayValue = this.items[this.index].innerText;
      }

      // set this.value to detail.value from custom event from auro-menu
      this.value = evt.detail.value;
    });
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <auro-dropdown
          for="dropdownMenu"
          toggle
          inset
          bordered
          rounded
          chevron>
          <button slot="trigger" aria-haspopup="true">
            ${this.value ? this.displayValue : html`<span class="placeholder">${this.placeholder}</span>`}
          </button>
          <div class="menuWrapper">
            <slot></slot>
          </div>
          <slot name="label" slot="label"></slot>
          <slot name="helperText" slot="helperText"></slot>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-dropdownmenu")) {
  customElements.define("auro-dropdownmenu", AuroDropdownmenu);
}
