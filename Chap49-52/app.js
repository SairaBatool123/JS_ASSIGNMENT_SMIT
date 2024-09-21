 //Q#1

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    //Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display form data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPassword').textContent = password;

    // Show the display data section
    document.getElementById('displayData').classList.remove('hidden');

    document.getElementById("signupForm").reset();

});


//Q#2

document.getElementById('readMoreButton').addEventListener('click', function() {
    var fullDescription = document.getElementById('fullDescription');
    
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        fullDescription.style.display = 'none';
        this.textContent = 'Read More';
    }
});


//Q#3 (In Other REpository)
