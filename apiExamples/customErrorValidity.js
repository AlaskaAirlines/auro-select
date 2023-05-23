export function customErrorValidityExample(elem) {
  const customErrorValidityExample = document.querySelector('#primaryError');

  customErrorValidityExample.addEventListener('auroSelect-valueSet', () => {
    if (+customErrorValidityExample.value > 2) {
      customErrorValidityExample.setAttribute('error', 'Quantity Exceeded');
    } else if (customErrorValidityExample.hasAttribute('error')) {
      customErrorValidityExample.removeAttribute('error');
    }
  })
};
