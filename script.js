
document.getElementById("scrollBtn").addEventListener("click", function() {
  document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.querySelector(".calc-section").classList.add("visible");
  }, 600); 
});

// Age calculation
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
