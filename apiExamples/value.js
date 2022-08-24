setTimeout(() => {
    const valueValidExampleBtnElem = document.querySelector('#validValueExampleBtn');
    const valueInvalidExampleBtnElem = document.querySelector('#invalidValueExampleBtn');
    const valueUndefinedExampleBtnElem = document.querySelector('#undefinedValueExampleBtn');
    const valueExampleElem = document.querySelector('#valueExample');

    if (valueExampleElem && valueValidExampleBtnElem) {
      valueValidExampleBtnElem.addEventListener('click', () => {
        valueExampleElem.value = 'arrival';
      })
    }

    if (valueExampleElem && valueInvalidExampleBtnElem) {
      valueInvalidExampleBtnElem.addEventListener('click', () => {
        valueExampleElem.value = 'flight course';
      })
    }

    if (valueExampleElem && valueUndefinedExampleBtnElem) {
      valueUndefinedExampleBtnElem.addEventListener('click', () => {
        valueExampleElem.value = undefined;
      })
    }
}, 200)
