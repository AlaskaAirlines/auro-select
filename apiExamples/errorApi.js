export function setErrorExample() {
  const setErrorExample = document.querySelector('#errorExample');

  document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
    setErrorExample.setAttribute('error', 'custom error');
  })
  
  document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
    setErrorExample.removeAttribute('error');
  })
}
