/**
 * @param {string} Selector for auro-select to retrieve the value from.
 */
const getValue = (selector) => {
  const menu = document.querySelector(`${selector} auro-menu`);

  if (menu.optionSelected) {
    console.warn('Value selected:', menu.optionSelected.value);
    alert(`Value selected: ${menu.optionSelected.value}`);
  } else {
    console.warn('Value selected:', null);
    alert(`Value selected: ${null}`);
  }
}
