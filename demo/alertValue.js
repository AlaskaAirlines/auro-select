setTimeout(() => {
  document.querySelector('#valueExtraction').addEventListener('selectedOption', () => {
    const menu = document.querySelector('#valueExtraction auro-menu');
    console.warn('Value selected:', menu.optionSelected.value);
    alert(`Value selected: ${menu.optionSelected.value}`);
  });
}, 500);
