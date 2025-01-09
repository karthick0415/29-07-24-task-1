const maxChars = 50;
        const textInput = document.getElementById('message');
        const charCount = document.getElementById('cha');
        const charRemaining = document.getElementById('rem');
        textInput.addEventListener('input',function() {
            const currentLength = this.value.length;
            charCount.innerHTML = currentLength;
            charRemaining.textContent = maxChars - currentLength;
        });
