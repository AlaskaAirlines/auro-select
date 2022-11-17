export function openDialog() {
  let openButtonElem = document.getElementById('dialogButton');
  let closeButtonElem = document.getElementById('closeButton');
  let dialogElem = document.getElementById('outerDialog');

  openButtonElem.addEventListener('click', () => {
    dialogElem.setAttribute('open', 'true');
  });

  closeButtonElem.addEventListener('click', () => {
    dialogElem.removeAttribute('open');
  });
}

