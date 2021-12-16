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

import '@aurolabs/auro-dropdown';
import '@aurolabs/auro-menu';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-dropdownmenu element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 *
 * @prop {String} placeholder - Define placeholder text to display before a value is manually selected.
 */

// build the component class
class AuroDropdownmenu extends LitElement {
  constructor() {
    super();

    this.placeholder = 'Select an option';
    this.expanded = false;

    this.addEventListener('dropdownToggled', (event) => {
      this.expanded = event.detail.expanded;
    });
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
      expanded: { Boolean },
      /**
       * @private
       */
      value: {
        type: String,
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

  firstUpdated() {
    if (!this.value) {
      this.value = this.placeholder;
    }

    this.addEventListener('optionSelected', (evt) => {
      this.shadowRoot.querySelector('auro-dropdown').hide();

      this.value = evt.detail.value;
      // this.displayText = evt.detail.displayText;
      // this.indexSelectedOption = parseInt(evt.detail.index, 10);

      this.querySelector('auro-menu').setAttribute('indexSelectedOption', evt.detail.index);
    });
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <auro-dropdown for="dropdownMenu" toggle inset bordered rounded chevron>
          <button slot="trigger" tabindex="0">
            ${this.value}
          </button>
          <slot name="menu"></slot>
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
