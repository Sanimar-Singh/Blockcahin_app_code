// Get all option cards
const optionCards = document.querySelectorAll('.option-card');

// Add click event listeners to each option
optionCards.forEach(option => {
    option.addEventListener('click', function() {
        const question = this.getAttribute('data-question');

        // Get all options for the same question
        const optionsForThisQuestion = document.querySelectorAll(`.option-card[data-question="${question}"]`);

        // Toggle selection for the clicked option and deselect others
        if (this.classList.contains('selected')) {
            // Deselect the option if it's already selected
            this.classList.remove('selected');
            this.style.backgroundColor = ''; // Reset the background color
        } else {
            // Deselect all other options for the same question
            optionsForThisQuestion.forEach(opt => {
                opt.classList.remove('selected');
                opt.style.backgroundColor = ''; // Reset the background color
            });

            // Select the clicked option
            this.classList.add('selected');
            this.style.backgroundColor = 'green'; // Set the green background color for selected
        }
    });
});

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function() {
    // Redirect to the submitted.html page
    window.location.href = 'submitted.html';
});