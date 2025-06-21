document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const checkBtn = document.getElementById('call');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  function isValidUSPhoneNumber(input) {
    const normalized = input.replace(/^\+1/, '1');
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return pattern.test(normalized);
  }

  function updateValidation() {
    const number = display.value.trim();
    if (!number) {
      resultsDiv.textContent = '';
      return;
    }
    const normalized = number.replace(/^\+1/, '1');
    const valid = isValidUSPhoneNumber(normalized);
    resultsDiv.textContent = `${valid ? '✅ Valid' : '❌ Invalid'} US number: ${number}`;
    resultsDiv.style.color = valid ? 'green' : 'red';
    resultsDiv.style.fontWeight = 'bold';
  }

  document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.textContent;
      updateValidation();
    });
  });

  checkBtn.addEventListener('click', () => {
    const number = display.value.trim();
    if (!number) {
      alert("Please provide a phone number");
      return;
    }
    const normalized = number.replace(/^\+1/, '1');
    const valid = isValidUSPhoneNumber(normalized);
    resultsDiv.textContent = `${valid ? '✅ Valid' : '❌ Invalid'} US number: ${number}`;
    resultsDiv.style.color = valid ? 'green' : 'red';
    resultsDiv.style.fontWeight = 'bold';
  });

  clearBtn.addEventListener('click', () => {
    display.value = '';
    resultsDiv.textContent = '';
  });

  display.addEventListener('input', updateValidation);
});
