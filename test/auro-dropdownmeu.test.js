import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-dropdownmeu.js';

describe('auro-dropdownmeu', () => {
  it('sets the CSS class on auro-dropdownmeu > div element', async () => {
    const el = await fixture(html`
      <auro-dropdownmeu cssclass="testClass"></auro-dropdownmeu>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-dropdownmeu is accessible', async () => {
    const el = await fixture(html`
      <auro-dropdownmeu cssclass="testClass"></auro-dropdownmeu>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dropdownmeu custom element is defined', async () => {
    const el = await !!customElements.get("auro-dropdownmeu");

    await expect(el).to.be.true;
  });
});
