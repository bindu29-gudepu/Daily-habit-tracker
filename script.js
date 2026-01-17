let chatBox = document.getElementById("chat-box");

let habits = {
    water: 0,
    study: 0,
    exercise: 0,
    sleep: 0
};

addBot("Hello! I track your daily habits.");
addBot("Type: water, study, exercise, sleep, report");

function sendMessage() {
    let input = document.getElementById("user-input");
    let msg = input.value.toLowerCase();
    input.value = "";

    if (msg === "") return;

    addUser(msg);

    if (msg === "water") {
        habits.water = prompt("How many glasses of water?");
        addBot("Water updated 💧");
    }
    else if (msg === "study") {
        habits.study = prompt("How many study hours?");
        addBot("Study updated 📚");
    }
    else if (msg === "exercise") {
        habits.exercise = prompt("Exercise minutes?");
        addBot("Exercise updated 🏃");
    }
    else if (msg === "sleep") {
        habits.sleep = prompt("Sleep hours?");
        addBot("Sleep updated 😴");
    }
    else if (msg === "report") {
        addBot(
            `Report:<br>
            Water: ${habits.water}<br>
            Study: ${habits.study}<br>
            Exercise: ${habits.exercise}<br>
            Sleep: ${habits.sleep}`
        );
    }
    else {
        addBot("I didn't understand.");
    }
}

function addUser(msg) {
    let div = document.createElement("div");
    div.className = "user";
    div.innerText = msg;
    chatBox.appendChild(div);
}

function addBot(msg) {
    let div = document.createElement("div");
    div.className = "bot";
    div.innerHTML = msg;
    chatBox.appendChild(div);
}
            
