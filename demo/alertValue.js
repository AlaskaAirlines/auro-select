export function valueAlert(elem) {
  elem.addEventListener('selectedOption', () => {
    console.warn('Select value changed to:', elem.value);
    console.warn('Select optionSelected changed to:', elem.optionSelected);
  })
}
