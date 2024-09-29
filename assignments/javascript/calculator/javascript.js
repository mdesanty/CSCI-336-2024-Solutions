document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-button');
  const subtractButton = document.getElementById('subtract-button');
  const resetButton = document.getElementById('reset-button');

  addButton.onclick = function() {
    if(formIsValid()) {
      const sum = getNumberA() + getNumberB();
      setResultText(sum);
      setResultError(false);
    }
    else {
      setResultText('Please provide two numbers.');
      setResultError(true);
    }
  }

  subtractButton.onclick = function() {
    if (formIsValid()) {
      const difference = getNumberA() - getNumberB();
      setResultText(difference);
      setResultError(false);
    }
    else {
      setResultText('Please provide two numbers.');
      setResultError(true);
    }
  }

  resetButton.onclick = function() {
    document.getElementById('number-a').value = undefined;
    document.getElementById('number-b').value = undefined;
    setResultText('n/a');
    setResultError(false);
  }

  function getNumberA() {
    return Number(document.getElementById('number-a').value);
  }

  function getNumberB() {
    return Number(document.getElementById('number-b').value);
  }

  function formIsValid() {
    const numberAValue = document.getElementById('number-a').value;
    const numberBValue = document.getElementById('number-b').value;

    const numberA = Number(numberAValue);
    const numberB = Number(numberBValue);

    let valid = true;

    if(numberAValue === undefined || numberAValue === '' || numberBValue === undefined || numberBValue === '')
      valid = false;

    if(isNaN(numberA) || isNaN(numberB))
      valid = false;

    return valid;
  }

  function setResultText(value) {
    const resultValueSpan = document.getElementById('result-value');
    resultValueSpan.textContent = value;
  }

  function setResultError(isError) {
    const resultValueSpan = document.getElementById('result-value');

    if (isError)
      resultValueSpan.classList.add('error-message');
    else
      resultValueSpan.classList.remove('error-message');
  }
});