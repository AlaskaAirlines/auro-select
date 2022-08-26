export function setValue(elem) {
  document.querySelector('#validValueExampleBtn').addEventListener('click', () => {
    elem.value = 'arrival';
  })

  document.querySelector('#invalidValueExampleBtn').addEventListener('click', () => {
    elem.value = 'flight course';
  })

  document.querySelector('#undefinedValueExampleBtn').addEventListener('click', () => {
    elem.value = undefined;
  })
}
