// Assets/JS/recharge.js

document.addEventListener('DOMContentLoaded', function() {
    var mobileNumber = localStorage.getItem('mobileNumber');
    if (mobileNumber) {
        document.querySelector('.numder').textContent = mobileNumber;
    } else {
        document.querySelector('.numder').textContent = 'No mobile number found';
    }

    // Countdown timer for 15 minutes (900 seconds)
    var countdownElement = document.querySelector('.count-down');
    var endTime = Date.now() + 900 * 1000; // 900 seconds from now

    function updateCountdown() {
        var remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = '0:0';
            return;
        }

        var minutes = Math.floor(remainingTime / 60000);
        var seconds = Math.floor((remainingTime % 60000) / 1000);
        countdownElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    // Initial call to update countdown immediately
    updateCountdown();

    // Update countdown every second
    var timerInterval = setInterval(updateCountdown, 1000);
});

function redirectToIndex() {
    window.location.href = 'index.html';
}
const couponCodeInput = document.getElementById('couponCode');
const applyCouponButton = document.getElementById('applyCoupon');
const couponErrorDiv = document.getElementById('couponError');

applyCouponButton.addEventListener('click', (e) => {
    e.preventDefault();
    const couponCode = couponCodeInput.value.trim();
    if (couponCode === 'JIOLOOT') {
        window.location.href = 'recharge.html';
    } else {
        couponErrorDiv.innerText = 'Invalid coupon code';
    }
});