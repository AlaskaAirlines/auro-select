import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-select.js';

describe('auro-select', () => {
  it('auro-select custom element is defined', async () => {
    const el = await !!customElements.get("auro-select");

    await expect(el).to.be.true;
  });
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
