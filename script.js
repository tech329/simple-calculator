let displayScreen = document.getElementById("screen");

function displayAppend(input) {
    displayScreen.value += input;
}

function clearAll() {
    displayScreen.value = "";
}

function clearLast() {
    displayScreen.value = displayScreen.value.slice(0, -1);
}

function calculate() {
    try {
        displayScreen.value = eval(displayScreen.value);
    } catch {
        displayScreen.value = "Error";
    }
}
