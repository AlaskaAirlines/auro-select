setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('selectedOption', (evt) => {
    console.warn('Value selected:', evt.target.optionSelected.value);
    alert(`Value selected: ${evt.target.optionSelected.value}`);
  });
}, 500);
