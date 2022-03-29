setTimeout(() => {
  let selectValueAlertEl = document.querySelector('auro-select#valueAlert');

  if (selectValueAlertEl) {
    selectValueAlertEl.addEventListener('selectedOption', () => {
      console.warn('Value selected:', selectValueAlertEl.optionSelected.value);
      alert(`Value selected: ${selectValueAlertEl.optionSelected.value}`);
    });
  }
}, 500);
