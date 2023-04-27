const input = document.querySelector('input[type="text"]');

document.addEventListener('keydown', (event) => {
    if (event.keyCode >= 96 && event.keyCode <= 111) {
        input.value += event.key
    }
    if (event.keyCode == 13 || event.keyCode == 187){
        event.preventDefault(); // Prevent form submission on enter key
        input.value = eval(input.value)
    }
    if (event.keyCode == 8){
        input.value = input.value.slice(0, input.value.length-1)
    }
});

const buttons = document.querySelectorAll('button');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button's text content
    const buttonText = button.textContent;

    // Handle special cases
    if (buttonText === 'C') {
      // Clear the input field
      input.value = '';
    } else if (buttonText === '=') {
      // Evaluate the expression in the input field
      input.value = eval(input.value);
    } else {
      // Append the button's text to the input field
      input.value += buttonText;
    }
  });
});
