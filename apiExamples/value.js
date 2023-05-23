export function valueExample() {
  const valueExample = document.querySelector('#valueExample');

  document.querySelector('#validValueExampleBtn').addEventListener('click', () => {
    valueExample.value = 'arrival';
  })

  document.querySelector('#invalidValueExampleBtn').addEventListener('click', () => {
    valueExample.value = 'flight course';
  })

  document.querySelector('#undefinedValueExampleBtn').addEventListener('click', () => {
    valueExample.value = undefined;
  })
}
