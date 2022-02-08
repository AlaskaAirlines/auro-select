setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('selectOption', (e) => {
    console.warn(e.detail);
    alert(JSON.stringify(e.detail));
  });
}, 500);
