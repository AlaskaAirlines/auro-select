import { fixture, html, expect, waitUntil, elementUpdated } from '@open-wc/testing';
import '../index.js';
import '@aurodesignsystem/auro-dropdown';
import '@aurodesignsystem/auro-menu';

describe('auro-select', () => {
  it('auro-select custom element is defined', async () => {
    const el = await !!customElements.get("auro-select");

    await expect(el).to.be.true;
  });

  it('web component is successfully created in the document', async () => {
    // This test fails when attributes are put onto the component before it is attached to the DOM
    const el = document.createElement('auro-select');

    await expect(el.localName).to.equal('auro-select');
  });

  it('toggles the bib on click', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('[auro-dropdown]');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('tabbing away from the element closes the bib', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('[auro-dropdown]');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'Tab'
    }));

    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('Navigates the menu with arrow keys', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('[auro-dropdown]');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    const menu = el.querySelector('auro-menu');
    const menuOptions = menu.querySelectorAll('auro-menuoption');

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    await expect(menuOptions[0].classList.contains('active')).to.be.true;
    await expect(menuOptions[1].classList.contains('active')).to.be.false;

    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowDown'
    }));

    await expect(menuOptions[0].classList.contains('active')).to.be.false;
    await expect(menuOptions[1].classList.contains('active')).to.be.true;


    el.dispatchEvent(new KeyboardEvent('keydown', {
      'key': 'ArrowUp'
    }));

    await expect(menuOptions[0].classList.contains('active')).to.be.true;
    await expect(menuOptions[1].classList.contains('active')).to.be.false;
  });

  it('makes a selection programatically', async () => {
    const el = await defaultFixture();

    const menu = el.querySelector('auro-menu')
    const menuOptions = menu.querySelectorAll('auro-menuoption');
    let selectedOptions = [];

    el.value = 'Apples';

    await waitUntil(() => el.optionSelected);

    for (let oIndex = 0; oIndex < menuOptions.length; oIndex += 1) {
      if (menuOptions[oIndex].hasAttribute('selected')) {
        selectedOptions.push(menuOptions[oIndex]);
      }
    };

    await expect(el.value).to.be.equal('Apples');
    await expect(el.optionSelected).to.be.equal(selectedOptions[0]);
  });

  it('make invalid selection programmatically results in error ui', async () => {
    const el = await presetValueFixture();
    await waitUntil(() => el.ready);

    await expect(el.value).to.be.equal('price');

    el.value = 'flight course';

    await elementUpdated(el);

    const dropdown = el.shadowRoot.querySelector('[auro-dropdown]');
    const triggerContentHTML = dropdown.querySelector('#triggerFocus').innerHTML;

    await expect(el.optionSelected).to.be.equal(undefined);
    await expect(triggerContentHTML).to.contain('Flight Course');
    await expect(el.getAttribute('validity')).to.equal('badInput');
  });

  it('reset selection value programmatically', async () => {
    const el = await presetValueFixture();
    await waitUntil(() => el.ready);

    el.value = undefined;

    await elementUpdated(el);

    await expect(el.optionSelected).to.be.equal(undefined);
  });

  it('default to checkmark on selected option', async () => {
    const el = await defaultFixture();

    const menu = el.querySelector('auro-menu');
    await expect(menu.hasAttribute('nocheckmark')).to.be.false;
  });

  it('selected options have nocheckmark when nocheckmark attribute is present', async () => {
    const el = await noCheckmarkFixture();

    const menu = el.querySelector('auro-menu');
    await expect(menu.hasAttribute('nocheckmark')).to.be.true;
  });

  it('removing error attribute reruns validity even when value is undefined', async () => {
    const el = await errorFixture();

    await waitUntil(() => el.ready);

    await expect(el.getAttribute('validity')).to.be.equal('customError');

    el.removeAttribute('error');

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.equal('valid');
  });
});

async function defaultFixture() {
  return await fixture(html`
  <auro-select>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}

async function presetValueFixture() {
  return await fixture(html`
  <auro-select value="price">
    <span slot="label">Name</span>
    <auro-menu>
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

async function noCheckmarkFixture() {
  return await fixture(html`
  <auro-select nocheckmark>
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}

async function errorFixture() {
  return await fixture(html`
  <auro-select error="custom error message">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}
