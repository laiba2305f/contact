function toggleCategory(categoryId) {
    const selectedCategory = document.getElementById(categoryId);

    if (selectedCategory) {
        const isHidden = selectedCategory.style.display === 'none' || selectedCategory.style.display === '';
        const displayValue = isHidden ? 'flex' : 'none';

        const allCategoryImages = document.querySelectorAll('.category-images');

        allCategoryImages.forEach(category => {
            category.style.display = 'none';
        });

        selectedCategory.style.display = displayValue;
    }
};
function signup() {
    let a = document.getElementById('Password').value;
    let b = document.getElementById('ConfirmPassword').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (a == '') {
        document.getElementById('message').innerHTML = "Please type a password";
        return false;
    }
    if (a.length >= 15) {
        document.getElementById('message').innerHTML = "Password must be less than 15 characters";
        return false;
    }
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*/.test(a)) {
        document.getElementById('message').innerHTML = "Password must contain at least one uppercase letter and one special character";
        return false;
    }
    if (a !== b) {
        document.getElementById('message').innerHTML = "Passwords do not match";
        return false;
    }
    if (!gender) {
        document.getElementById('gender').innerHTML = "Please select a gender";
        return false;
    }

    var phoneNumber = document.getElementById("phone").value;
    if (phoneNumber.length !== 13) {
        document.getElementById('phonee').innerHTML = "Please enter a valid phone number with +92 and less than 11 digits.";
        return false;
    }

    // If all validations pass, you can proceed with signup logic
    alert("Signup successful!");
    // Redirect to the login page if needed
    return true;
}