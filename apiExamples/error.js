export function setError(elem) {
  document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
    elem.setAttribute('error', 'custom error');
  })
  
  document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
    elem.removeAttribute('error');
  })
}
