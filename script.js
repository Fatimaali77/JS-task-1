
document.getElementById("scrollBtn").addEventListener("click", function() {
  document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("toHoursBtn").addEventListener("click", function() {
  document.getElementById("hoursConverter").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toSecondsBtn").addEventListener("click", function() {
  document.getElementById("next-number").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toFindNextBtn").addEventListener("click", function() {
  document.getElementById("name-capitalizer").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toNameCapitalizerBtn").addEventListener("click", function() {
  document.getElementById("bmi-calculator").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toBMICalculatorBtn").addEventListener("click", function() {
  document.getElementById("array-generator").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toArrayGeneratorBtn").addEventListener("click", function() {
  document.getElementById("addition-calculator").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("backToHomeBtn").addEventListener("click", function() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toAdditionCalculatorBtn").addEventListener("click", function() {
  document.body.scrollIntoView({ behavior: "smooth" });
});

// Age Calculator
function calculateAge() {
  let dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("result").innerHTML =
      `<p class="text-danger">Please select a valid date of birth.</p>`;
    return;
  }

  let dobDate = new Date(dob);
  let today = new Date();

  let ageYears = today.getFullYear() - dobDate.getFullYear();
  let ageMonths = today.getMonth() - dobDate.getMonth();
  let ageDays = today.getDate() - dobDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let totalDays = Math.floor((today - dobDate) / (1000 * 60 * 60 * 24));
  let totalWeeks = Math.floor(totalDays / 7);

  document.getElementById("result").innerHTML = `
    <p><strong>Age:</strong> ${ageYears} Years, ${ageMonths} Months, ${ageDays} Days</p>
    <p><strong>Total Days:</strong> ${totalDays}</p>
    <p><strong>Total Weeks:</strong> ${totalWeeks}</p>
  `;
}

// Hours to Seconds converter
function convertHoursToSeconds() {
  let hours = document.getElementById("hours").value;
  if (hours === "" || hours < 0) {
    document.getElementById("hoursResult").innerHTML =
      `<p class="text-danger">Please enter valid hours.</p>`;
  } else {
    let seconds = hours * 3600;
    document.getElementById("hoursResult").innerHTML =
      `<p><strong>${hours} hour(s)</strong> = ${seconds} seconds</p>`;
  }
}
// Scenario 1: Find next number within the provided array
function handleArrayNextNumber() {
    let arrayInput = document.getElementById("userArray").value;
    let numberInput = document.getElementById("arrayNumber").value;
    
    if (arrayInput.trim() === "") {
        document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Please enter an array of numbers</p>`;
        return;
    }
    
    if (numberInput.trim() === "") {
        document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Please enter a number from the array</p>`;
        return;
    }
    
    const arrayStrings = arrayInput.split(",");
    const userArray = [];
    
    for (let i = 0; i < arrayStrings.length; i++) {
        const arrayNum = Number(arrayStrings[i].trim());
        if (isNaN(arrayNum)) {
            document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Invalid array input: "${arrayStrings[i].trim()}" is not a number</p>`;
            return;
        }
        userArray.push(arrayNum);
    }
    
    const inputNumber = Number(numberInput);
    if (isNaN(inputNumber)) {
        document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Please enter a valid number</p>`;
        return;
    }
    
    const index = userArray.indexOf(inputNumber);
    
    if (index === -1) {
        document.getElementById("arrayResult").innerHTML = `
            <p><strong>Array:</strong> [${userArray.join(", ")}]</p>
            <p><strong>Input Number:</strong> ${inputNumber}</p>
            <p class="text-danger"><strong>Result:</strong> Number ${inputNumber} not found in the array</p>
        `;
    } else if (index === userArray.length - 1) {
        document.getElementById("arrayResult").innerHTML = `
            <p><strong>Array:</strong> [${userArray.join(", ")}]</p>
            <p><strong>Input Number:</strong> ${inputNumber}</p>
            <p class="text-warning"><strong>Result:</strong> This is the last number in the array</p>
        `;
    } else {
        const nextNumber = userArray[index + 1];
        document.getElementById("arrayResult").innerHTML = `
            <p><strong>Array:</strong> [${userArray.join(", ")}]</p>
            <p><strong>Input Number:</strong> ${inputNumber}</p>
            <p class="text-success"><strong>Next Number:</strong> ${nextNumber}</p>
        `;
    }
}

// Scenario 2: Find next number from single input (unchanged)
function handleSingleNextNumber() {
    let userInput = document.getElementById("userNumber").value;
    
    if (userInput === "") {
        document.getElementById("singleResult").innerHTML = `<p class="text-danger">Please enter a number</p>`;
        return;
    }
    
    const num = Number(userInput);
    if (isNaN(num)) {
        document.getElementById("singleResult").innerHTML = `<p class="text-danger">Please enter a valid number</p>`;
        return;
    }
    
    let nextFromInput = findNextFromSingleInput(num);
    document.getElementById("singleResult").innerHTML = `<p><strong>Input:</strong> ${userInput}</p><p class="text-success"><strong>Next Number:</strong> ${nextFromInput}</p>`;
}

function findNextFromSingleInput(num) {
    if (Number.isInteger(num)) {
        return num + 1;
    } else {
        return Math.round((num + 0.1) * 100) / 100;
    }
}


// Name Capitalizer
function capitalizeName() {
    let name = document.getElementById("userName").value.trim();
    
    if (name === "") {
        document.getElementById("nameResult").innerText = "Please enter a name";
        return;
    }
    
    if (name !== name.toLowerCase()) {
        document.getElementById("nameResult").innerText = "Please enter the name in lowercase only";
        return;
    }
    
    // Split the name into words (first name, last name, etc.)
    let nameWords = name.split(" ");
    let capitalizedWords = [];
    
    // Capitalize the first letter of each word
    for (let i = 0; i < nameWords.length; i++) {
        if (nameWords[i].length > 0) {
            let capitalizedWord = nameWords[i].charAt(0).toUpperCase() + nameWords[i].slice(1);
            capitalizedWords.push(capitalizedWord);
        }
    }
    
    let capitalizedName = capitalizedWords.join(" ");
    document.getElementById("nameResult").innerText = "Capitalized name: " + capitalizedName;
}


// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let heightInput = document.getElementById("height").value.trim();
    
    if (weight === "" || heightInput === "") {
        document.getElementById("bmiResult").innerText = "Please enter both weight and height";
        return;
    }
    
    let feet, inches;
    
    // Check if input contains a decimal point (feet.inches format)
    if (heightInput.includes(".")) {
        // Parse height in feet.inches format (e.g., 5.08 = 5 feet 8 inches)
        let heightParts = heightInput.split(".");
        if (heightParts.length !== 2) {
            document.getElementById("bmiResult").innerText = "Please enter height in feet or feet.inches format (e.g., 5 or 5.08)";
            return;
        }
        
        feet = parseInt(heightParts[0]);
        inches = parseInt(heightParts[1]);
        
        if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0 || inches > 11) {
            document.getElementById("bmiResult").innerText = "Please enter valid height (inches should be 0-11)";
            return;
        }
    } else {
        // Parse height in feet only format (e.g., 5 = 5 feet 0 inches)
        feet = parseInt(heightInput);
        inches = 0;
        
        if (isNaN(feet) || feet < 0) {
            document.getElementById("bmiResult").innerText = "Please enter valid height in feet";
            return;
        }
    }
    
    // Convert feet and inches to total inches, then to meters
    let totalInches = (feet * 12) + inches;
    let heightInMeters = totalInches * 0.0254;
    
    let bmi = weight / (heightInMeters * heightInMeters);

    bmi = Math.round(bmi * 100) / 100;
    
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    // Display height appropriately based on input format
    let heightDisplay = inches > 0 ? `${feet}' ${inches}"` : `${feet}' 0"`;
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi} (${category}) - Height: ${heightDisplay}`;
}

// Array Element Picker
function pickFirstAndLast() {
    const userInput = document.getElementById("pickerArray").value;
    
    if (userInput.trim() === "") {
        document.getElementById("pickerResult").innerHTML = `<p class="text-danger">Please enter an array of numbers.</p>`;
        return;
    }
    
    const arrayStrings = userInput.split(",");
    const userArray = [];
    
    for (let i = 0; i < arrayStrings.length; i++) {
        const num = Number(arrayStrings[i].trim());
        if (isNaN(num)) {
            document.getElementById("pickerResult").innerHTML = `<p class="text-danger">Invalid input: "${arrayStrings[i].trim()}" is not a number.</p>`;
            return;
        }
        userArray.push(num);
    }
    
    if (userArray.length === 0) {
        document.getElementById("pickerResult").innerHTML = `<p class="text-danger">Please enter at least one number.</p>`;
        return;
    }
    
    const firstElement = userArray[0];
    const lastElement = userArray[userArray.length - 1];
    
    document.getElementById("pickerResult").innerHTML = `
        <p><strong>Your Array:</strong> [${userArray.join(", ")}]</p>
        <p><strong>First Element:</strong> ${firstElement}</p>
        <p><strong>Last Element:</strong> ${lastElement}</p>
    `;
}

// Real-Time Addition Calculator with Event Handling
function calculateAddition() {
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const resultField = document.getElementById("resultNumber");
    
    // Convert to numbers
    const num1 = parseInt(firstNum);
    const num2 = parseInt(secondNum);
    
    // If first number is entered but second is empty, show NaN
    if (firstNum !== "" && secondNum === "") {
        resultField.value = "NaN";
    }
    // If both numbers are entered, calculate and show result
    else if (firstNum !== "" && secondNum !== "") {
        if (!isNaN(num1) && !isNaN(num2)) {
            resultField.value = num1 + num2;
        } else {
            resultField.value = "Invalid input";
        }
    }
    // If both fields are empty, clear result
    else {
        resultField.value = "";
    }
}

// Add event listeners for real-time calculation
document.addEventListener("DOMContentLoaded", function() {
    const firstNumberInput = document.getElementById("firstNumber");
    const secondNumberInput = document.getElementById("secondNumber");
    
    // Add event listeners for input events (real-time)
    firstNumberInput.addEventListener("input", calculateAddition);
    secondNumberInput.addEventListener("input", calculateAddition);
    
    // Also add keyup events for better responsiveness
    firstNumberInput.addEventListener("keyup", calculateAddition);
    secondNumberInput.addEventListener("keyup", calculateAddition);
});
