import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-select.js';
import '@aurodesignsystem/auro-dropdown';
import '@aurodesignsystem/auro-menu';

describe('auro-select', () => {
  it('auro-select custom element is defined', async () => {
    const el = await !!customElements.get("auro-select");

    await expect(el).to.be.true;
  });

  it('toggles the bib on click', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
    const trigger = dropdown.querySelector('[slot="trigger"]');

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.true;

    trigger.click();
    await expect(dropdown.isPopoverVisible).to.be.false;
  });

  it('tabbing away from the element closes the bib', async () => {
    const el = await defaultFixture();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
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

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');
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

  it('handles error when telling auro-menu to make a faulty selection', async () => {
    const el = await presetValueFixture();
    const menu = el.querySelector('auro-menu');

    await expect(el.value).to.be.equal('Oranges');

    menu.selectByValue('Grapes');

    await expect(el.hasAttribute('value')).to.be.false;
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
  <auro-select value="Oranges">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}

async function noCheckmarkFixture() {
  return await fixture(html`
  <auro-select>
    <span slot="label">Name</span>
    <auro-menu nocheckmark>
      <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
      <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    </auro-menu>
  </auro-select>
  `);
}
