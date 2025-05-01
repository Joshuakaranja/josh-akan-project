document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    
    // Debug: Log all gender radios
    const genderRadios = document.querySelectorAll('.gender-radio');
    console.log('Found gender radios:', genderRadios.length);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Get birthdate (with validation)
        const birthdate = document.getElementById('birthdate').value;
        if (!birthdate) {
            alert("Please select your birth date!");
            return;
        }
        
        // 2. BULLETPROOF gender selection
        let selectedGender = null;
        genderRadios.forEach(radio => {
            if (radio.checked) {
                selectedGender = radio.value;
                console.log('Selected gender:', selectedGender);
            }
        });
        
        if (!selectedGender) {
            alert("Please select your gender!");
            return;
        }
        
        // 3. Calculate day of week
        const date = new Date(birthdate);
        const dayOfWeek = date.getDay();
        
        // 4. Get Akan name
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        
        const akanName = selectedGender === 'male' 
            ? maleNames[dayOfWeek] 
            : femaleNames[dayOfWeek];
        
        // 5. Display results
        document.getElementById('akanName').textContent = `Your Akan name: ${akanName}`;
        document.getElementById('birthDate').textContent = `Born on ${new Date(birthdate).toDateString()}`;
        document.querySelector('.result-container').style.display = 'block';
    });
});