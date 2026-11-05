// 1. Select the form element
const form = document.getElementById('select-sheet');

// 2. Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents page reload

  // Get the selected document key from the dropdown
  const selectElement = document.getElementById('select');
  const destinationVariable = selectElement.value;
  const resultText = document.getElementById('resultText');

  // Check if the selected option is one of the "Coming Soon" placeholders
  if (destinationVariable === 'bonus2' || destinationVariable === 'bonus3') {
    if (resultText) {
      resultText.textContent = "This document is coming soon! Please check back later.";
      resultText.style.color = "#ba6cb5";
    }
    return;
  }

  // Clear any previous message
  if (resultText) {
    resultText.textContent = "";
  }

  // Build the relative path to the PDF
  const fileName = `PDFs/${destinationVariable}.pdf`;

  console.log("Opening file:", fileName);

  // Open the PDF in a new browser tab
  window.open(fileName, '_blank');
});
