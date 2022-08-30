export function getValue(elem) {
  const btn = document.querySelector('#valueExtractionBtn');

  btn.addEventListener('click', () => {
    console.warn('Value selected:', elem.value);
    console.warn('Option selected:', elem.optionSelected);
  })
}
