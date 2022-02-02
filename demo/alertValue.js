setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('optionSelected', (e) => {
    console.warn(e.detail);
    alert(JSON.stringify(e.detail));
  });
}, 500);
