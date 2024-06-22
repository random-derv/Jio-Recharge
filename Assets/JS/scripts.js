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
document.getElementById('rechargeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var mobileNumber = document.getElementById('mobileNumber').value;

    // Validate the mobile number
    if (/^\d{10}$/.test(mobileNumber)) {
        // Save the mobile number to local storage
        localStorage.setItem('mobileNumber', mobileNumber);
        // Redirect to another page (for example: recharge.html)
        window.location.href = 'recharge.html';
    } else {
        alert('Please enter a valid mobile number.');
    }
});
