/**
 * @param {string} Selector for auro-select to retrieve the value from.
 */
const getValue = (selector) => {
  const select = document.querySelector(`${selector}`);

  if (select.optionSelected) {
    console.warn('Value selected:', select.optionSelected.value);
    alert(`Value selected: ${select.optionSelected.value}`);
  } else {
    console.warn('Value selected:', null);
    alert(`Value selected: ${null}`);
  }
}
