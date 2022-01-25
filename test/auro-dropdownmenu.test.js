import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-dropdownmenu.js';

describe('auro-dropdownmenu', () => {
  it('auro-dropdownmenu is accessible', async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-dropdownmenu custom element is defined', async () => {
    const el = await !!customElements.get("auro-dropdownmenu");

    await expect(el).to.be.true;
  });

  it('initial value is null', async () => {
    const el = await defaultFixture();

    await expect(el.value).to.be.null;
  });

  it('selecting a menuoption sets the value', async () => {
    // This test needs to be fixed once the work is done to extract value from the dropdownmenu
    const el = await defaultFixture();

    const trigger = el.shadowRoot.querySelector('auro-dropdown');

    // trigger.click();

    const option = el.querySelectorAll('auro-menuoption')[2];

    option.click();

    // await expect(el.value).to.equal('Duration');
  });
});

async function defaultFixture() {
  return await fixture(html`
    <auro-dropdownmenu>
      <auro-menu checkmark>
        <auro-menuoption data-value="Stops">Stops</auro-menuoption>
        <auro-menuoption data-value="Price">Price</auro-menuoption>
        <auro-menuoption data-value="Duration">Duration</auro-menuoption>
        <auro-menuoption data-value="Departure">Departure</auro-menuoption>
        <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
        <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
      </auro-menu>
    </auro-dropdownmenu>
  `);
}
