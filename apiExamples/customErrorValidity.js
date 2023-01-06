export function setErrorOnValueChange(elem) {
  elem.addEventListener('auroSelect-valueSet', () => {
    if (+elem.value > 2) {
      elem.setAttribute('error', 'Quantity Exceeded');
    } else if (elem.hasAttribute('error')) {
      elem.removeAttribute('error');
    }
  })
};
