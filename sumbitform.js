// 1. Select the form
const form = document.getElementById('select-sheet');

// 2. Add an event listener for the submit action
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the page from refreshing

  //var formData = new FormData(form);
  
  //var formObject = Object.fromEntries(formData.entries());
  
  const destinationVariable = document.getElementById('select').value;
  
  
  // 1. Access the specific input value by its "name" attribute
  // Change 'pdfName' to match the exact name attribute of your HTML input
  
  //let destinationVariable = formObject.pdfNames;
  
  const fileName = `PDFs/${destinationVariable}.pdf`;
  
  console.log(fileName); // Output
  console.log(document.getElementById('select').value);
  
  window.open(fileName, '_blank');

});

