export function nestedSelectExample() {
  // JavaScript for the overflow: visible dialog
  let visOverflowDialog = document.getElementById('visibleOverflowDialog');
  let visibleOverflowButton = document.getElementById('overflowVisibleButton');
  let closeVisButtonElem = document.getElementById('closeVisButton');

  const elem = document.querySelector('#nestedSelect');

  visibleOverflowButton.addEventListener('click', () => {
    visOverflowDialog.setAttribute('open', 'true');
  });

  closeVisButtonElem.addEventListener('click', () => {
    visOverflowDialog.removeAttribute('open');
  });

  // JavaScript for the overflow: hidden dialog
  let hidOverflowDialog = document.getElementById('hiddenOverflowDialog');
  let hiddenOverflowButton = document.getElementById('overflowHiddenButton');
  let closeHidButtonElem = document.getElementById('closeHidButton');

  hiddenOverflowButton.addEventListener('click', () => {
    hidOverflowDialog.setAttribute('open', 'true');
  });

  closeHidButtonElem.addEventListener('click', () => {
    hidOverflowDialog.removeAttribute('open');
  });
}
