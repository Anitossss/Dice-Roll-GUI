const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "⚀";
        case 2:
            return "⚁";
        case 3:
            return "⚂";
        case 4:
            return "⚃";
        case 5:
            return "⚄";
        case 6:
            return "⚅";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});