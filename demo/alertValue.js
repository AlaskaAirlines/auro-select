setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('selectedOption', (e) => {
    console.warn(e.detail);
    alert(JSON.stringify(e.detail));
  });
}, 500);
