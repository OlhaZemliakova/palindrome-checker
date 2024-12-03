const checkButton = document.getElementById('check-btn');
const resultMsg = document.getElementById('result');
const errorMsg = document.getElementById('error');

function cleanUserInput(str) {
    return str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function palindromeChecker() {
    const userInputElement = document.getElementById('user-input');
    const userInput = userInputElement.value.trim();

    resultMsg.innerText = "";
    errorMsg.innerText = "";

    if (userInput === '') {
        errorMsg.innerText = "Please, enter value.";
        return
    }

    const pureString = cleanUserInput(userInput);
    const reversedString = reverseString(pureString);

    if (pureString === reversedString) {
        resultMsg.innerText = `"${userInput}" is a palindrome!`;
    } else {
        resultMsg.innerText = `"${userInput}" is not a palindrome.`;
    }


}

checkButton.addEventListener('click', palindromeChecker);