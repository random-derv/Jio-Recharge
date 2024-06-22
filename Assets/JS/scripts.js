function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', toggleMenu);
});

// Get the input field and button elements
const mobileNumberInput = document.getElementById('mobileNumber');
const rechargeButton = document.querySelector('button[type="submit"]');

// Add an event listener to the button
rechargeButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the value of the input field
  const mobileNumber = mobileNumberInput.value;

  // Check if the length of the mobile number is not equal to 10
  if (mobileNumber.length !== 10) {
    // Show an error message or alert
    alert('Please enter a valid 10-digit mobile number');
  } else {
    localStorage.setItem('mobileNumber', mobileNumber);
    // Redirect to recharge.html
    window.location.href = 'recharge.html';
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const mobileNumberInput = document.getElementById('mobileNumber');
    mobileNumberInput.focus();
  });