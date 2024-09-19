
    function printTable() {
        // Get user inputs
        let tableNum = document.getElementById('numToPrint').value;
        let minLength = parseInt(document.getElementById('minLength').value);
        let maxLength = parseInt(document.getElementById('maxLength').value);
    
        // Check if inputs are valid numbers
        if (isNaN(tableNum) || isNaN(minLength) || isNaN(maxLength)) {
            document.getElementById('displayTable').innerHTML = 'Please enter valid numbers.';
            return;
        }
    
        // Convert tableNum to a number
        tableNum = parseInt(tableNum);
    
        // Generate the multiplication table
        let resultHtml = '';
        for (let i = minLength; i <= maxLength; i++) {
            resultHtml += `${tableNum} x ${i} = ${tableNum * i}<br>`;
        }
    
        // Display the result
        document.getElementById('displayTable').innerHTML = resultHtml;
    }
  
    function refreshPage() {
        location.reload(); // This reloads the page
    }