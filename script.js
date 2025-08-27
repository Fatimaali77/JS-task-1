
document.getElementById("scrollBtn").addEventListener("click", function() {
  document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("toHoursBtn").addEventListener("click", function() {
  document.getElementById("hoursConverter").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toSecondsBtn").addEventListener("click", function() {
  document.getElementById("nextNumberFinder").scrollIntoView({ behavior: "smooth" });
});

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
// Next Number Finder
function handleNextNumber() {
    let userInput = document.getElementById("userNumber").value;

   
    let arr = [10, 20, 30, 40, 50];


    let nextFromArray = findNextNumber(Number(userInput), arr);

  
    let nextFromInput = findNextNumber(userInput);

    let resultText = "";
    if (typeof nextFromArray === "number") {
        resultText = "Next number in array: " + nextFromArray;
    } else {
        resultText = "Next number from input: " + nextFromInput;
    }

    document.getElementById("nextResult").innerText = resultText;
}
