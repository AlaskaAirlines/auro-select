export function valueExtractionExample() {
  const valueExtractionExample = document.querySelector('#valueExtraction');
  const valueExtractionBtn = document.querySelector('#valueExtractionBtn');

  valueExtractionBtn.addEventListener('click', () => {
    console.warn('Value selected:', valueExtractionExample.value);
    console.warn('Option selected:', valueExtractionExample.optionSelected);

    alert(`Value selected: ${valueExtractionExample.value}`);
  })
}
