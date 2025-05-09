// For Arithmetic Form 
document.getElementById("arithmeticForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.querySelector('input[name="operation"]:checked').value;
    
    let result;
    switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                result = "Error: You cannot divide by Zero!";
            } else {
                result = num1 / num2;
            }
            break;
    }
    alert("Result: " + result);
});

// For Factorial Form
document.getElementById("factorialForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let number = parseInt(document.getElementById("factorialNumber").value);
    let factorial = 1;
    for (let z = 1; z <= number; z++) {
        factorial *= z;
    }
    alert("Factorial: " + factorial);
});

// For Fibonacci Form
document.getElementById("fibonacciForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let n = parseInt(document.getElementById("fibonacciNumber").value);
    let fib = [0, 1];
    for (let z = 2; z <= n; z++) {
        fib.push(fib[z - 1] + fib[z - 2]);
    }
    alert("Fibonacci Sequence: " + fib.join(", "));
});

// For Range Form 
document.getElementById("rangeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let range = max - min;

    alert("Max: " + max + "\nMin: " + min + "\nRange: " + range);
});

// AT Last Mailing List Form 
// Using an array to store all mailing list address and entries
let mailingListData = [];  

document.getElementById("mailingListForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zipCode").value;

    // Storing the mailing list entry in the array
    mailingListData.push({firstName, lastName, email, zipCode});
    
    // Displaying the updated mailing list
    displayMailingList();

    // Resetting the form
    document.getElementById("mailingListForm").reset();
});

function displayMailingList() {
    let mailingListDiv = document.getElementById("mailingListResult");
    
    // Clearing the previous list
    mailingListDiv.innerHTML = "<h2>List of Mailing Addresses</h2>";
    
    // Iterating over the mailingListData and display each entry
    mailingListData.forEach((entry, index) => {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("mailing-list-entry");
        
        // Creating entry
        entryDiv.innerHTML = `
            <p><strong><u>Mailing List Number ${index + 1}</u></strong></p>
            <p>Name: ${entry.firstName} ${entry.lastName}</p>
            <p>Email: ${entry.email}</p>
            <p>ZIP Code: ${entry.zipCode}</p>
            <button onclick="deleteMailingList(${index})">Delete</button>
            ${index < mailingListData.length - 1 ? '<hr>' : ''}
        `;
        
        mailingListDiv.appendChild(entryDiv);
    });
}

function deleteMailingList(index) {
    // this removes the entry from the array
    mailingListData.splice(index, 1);
    
    // Re-displays the updated mailing list
    displayMailingList();
}
