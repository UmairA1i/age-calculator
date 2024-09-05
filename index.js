const ageForm = document.getElementById('ageForm');
        ageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const dob = new Date(document.getElementById('dob').value);
            const currentDate = new Date();
           
            let age = currentDate.getFullYear() - dob.getFullYear();
            const monthDiff = currentDate.getMonth() - dob.getMonth();
            const dayDiff = currentDate.getDate() - dob.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }

            document.getElementById('result').textContent = `Your age is ${age} years`;
        });