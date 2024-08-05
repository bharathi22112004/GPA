function addInputField() {
    const inputFields = document.getElementById('input-fields');
    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group';
    newInputGroup.innerHTML = `
        <input type="number" placeholder="Credit Points" class="credit">
        <select class="grade">
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="5">C</option>
        </select>
    `;
    inputFields.appendChild(newInputGroup);
}

function calculateGPA() {
    const creditInputs = document.querySelectorAll('.credit');
    const gradeInputs = document.querySelectorAll('.grade');
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < creditInputs.length; i++) {
        const credits = parseFloat(creditInputs[i].value);
        const grade = parseFloat(gradeInputs[i].value);

        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalGradePoints += credits * grade;
        }
    }

    const gpa = totalGradePoints / totalCredits;
    const result = document.getElementById('result');
    result.textContent = isNaN(gpa) ? 'Please enter valid inputs' : `Your GPA is: ${gpa.toFixed(2)}`;
}
