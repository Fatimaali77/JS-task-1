
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
// Find next number
function findNextNumber(value, array) {
    if (Array.isArray(array)) {
        const num = Number(value);
        if (isNaN(num)) return "Please enter a valid number";
        
        const index = array.indexOf(num);
        
        if (index !== -1 && index < array.length - 1) {
            return array[index + 1];
        } else if (index === array.length - 1) {
            return "This is the last number in the array";
        } else {
            return "Number not found in the array";
        }
    }
    else {
        const num = Number(value);
        if (isNaN(num)) return "Please enter a valid number";
        
        if (Number.isInteger(num)) {
            return num + 1;
        } else {
            return Math.round((num + 0.01) * 100) / 100;
        }
    }
}
function handleNextNumber() {
    let userInput = document.getElementById("userNumber").value;
    
   
    let arr = [10, 20, 30, 40, 50];
    
    const num = Number(userInput);
    if (userInput !== "" && arr.includes(num)) {
        let nextFromArray = findNextNumber(num, arr);
        document.getElementById("nextResult").innerText = "Next number in array: " + nextFromArray;
    } else if (userInput !== "") {
        let nextFromInput = findNextNumber(userInput);
        document.getElementById("nextResult").innerText = "Next number from input: " + nextFromInput;
    } else {
        document.getElementById("nextResult").innerText = "Please enter a number";
    }
}


// Name Capitalizer
function capitalizeName() {
    let name = document.getElementById("userName").value;
    
    if (name === "") {
        document.getElementById("nameResult").innerText = "Please enter a name";
        return;
    }
    
    if (name !== name.toLowerCase()) {
        document.getElementById("nameResult").innerText = "Please enter the name in lowercase only";
        return;
    }
    
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("nameResult").innerText = "Capitalized name: " + capitalizedName;
}


// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    
    if (weight === "" || height === "") {
        document.getElementById("bmiResult").innerText = "Please enter both weight and height";
        return;
    }
     let heightInMeters = height / 100;
    
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
    
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi} (${category})`;
}

// Array Element Picker
function pickFirstAndLast() {
    const userInput = document.getElementById("userArray").value;
    
    if (userInput.trim() === "") {
        document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Please enter an array of numbers.</p>`;
        return;
    }
    
    const arrayStrings = userInput.split(",");
    const userArray = [];
    
    for (let i = 0; i < arrayStrings.length; i++) {
        const num = Number(arrayStrings[i].trim());
        if (isNaN(num)) {
            document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Invalid input: "${arrayStrings[i].trim()}" is not a number.</p>`;
            return;
        }
        userArray.push(num);
    }
    
    if (userArray.length === 0) {
        document.getElementById("arrayResult").innerHTML = `<p class="text-danger">Please enter at least one number.</p>`;
        return;
    }
    
    const firstElement = userArray[0];
    const lastElement = userArray[userArray.length - 1];
    
    document.getElementById("arrayResult").innerHTML = `
        <p><strong>Your Array:</strong> [${userArray.join(", ")}]</p>
        <p><strong>First Element:</strong> ${firstElement}</p>
        <p><strong>Last Element:</strong> ${lastElement}</p>
    `;
}
