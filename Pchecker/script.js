function checkPalindrome() {
    const userInput = document.getElementById("inputText").value; // Get the user's input

    // Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const normalizedInput = userInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the normalized input
    const reversedInput = normalizedInput.split('').reverse().join('');
    
    // Check if the input is a palindrome
    const resultElement = document.getElementById("result");
    if (normalizedInput === reversedInput) {
        resultElement.innerText = `"${userInput}" is a palindrome!`;
        resultElement.style.color = "green"; // Visual feedback for palindrome
    } else {
        resultElement.innerText = `"${userInput}" is not a palindrome.`;
        resultElement.style.color = "red"; // Visual feedback for non-palindrome
    }
}
