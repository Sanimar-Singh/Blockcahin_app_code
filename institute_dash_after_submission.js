function fetchSubmissions() {
    const submissionsSection = document.getElementById('submissions-section');
    
    // Check if the submissions are currently visible
    if (submissionsSection.style.display === 'block') {
        // Hide the submissions if they are already visible
        submissionsSection.style.display = 'none';
        return;
    }

    // Dummy submissions data
    const submissions = [
        { student: 'Jay Nadkarni', score: '8/10' },
        { student: 'Bot1', score: '7/10' },
        { student: 'A', score: '9/10' },
    ];

    // Get the submissions list element
    const submissionsList = document.getElementById('submissions-list');
    submissionsList.innerHTML = '';  // Clear previous submissions

    // Populate the submissions list with new data
    submissions.forEach(submission => {
        const li = document.createElement('li');
        li.classList.add('submission-card-container');  // Add container class for styling

        // Create student card
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');
        studentCard.textContent = submission.student;

        // Create score card
        const scoreCard = document.createElement('div');
        scoreCard.classList.add('score-card');
        scoreCard.textContent = `Score: ${submission.score}`;

        // Append student and score cards to the list item
        li.appendChild(studentCard);
        li.appendChild(scoreCard);

        // Append the list item to the submissions list
        submissionsList.appendChild(li);
    });

    // Show the submissions section
    submissionsSection.style.display = 'block';
}
