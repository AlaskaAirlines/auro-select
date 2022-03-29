setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('selectedOption', () => {
    const menu = document.querySelector('#valueAlert auro-menu');
    console.warn('Value selected:', menu.optionSelected.value);
    alert(`Value selected: ${menu.optionSelected.value}`);
  });
}, 500);
