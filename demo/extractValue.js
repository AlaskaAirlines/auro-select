
/**
 * @param {string} Selector for auro-select to retrieve the value from.
 */
const getValue = (selector) => {
  const el = document.querySelector(selector);

  console.warn(el.value);
  alert(el.value);
}
