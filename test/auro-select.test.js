import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-select.js';

describe('auro-select', () => {
  // it('auro-select is accessible', async () => {
  //   const el = await defaultFixture();

  //   await expect(el).to.be.accessible();
  // });

  it('auro-select custom element is defined', async () => {
    const el = await !!customElements.get("auro-select");

    await expect(el).to.be.true;
  });

  // it('initial value is null', async () => {
  //   const el = await defaultFixture();

  //   await expect(el.value).to.be.null;
  // });

  // it('selecting a menuoption sets the value', async () => {
  //   // This test needs to be fixed once the work is done to extract value from the select
  //   const el = await defaultFixture();

  //   const trigger = el.shadowRoot.querySelector('auro-dropdown');

  //   // trigger.click();

  //   const option = el.querySelectorAll('auro-menuoption')[2];

  //   option.click();

  //   // await expect(el.value).to.equal('Duration');
  // });
});

async function defaultFixture() {
  return await fixture(html`
  <auro-select>
    <auro-menu>
      <auro-menuoption value="Please select an option" selected>Please select an option</auro-menuoption>
      <hr>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}
