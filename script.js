let chatBox = document.getElementById("chat-box");

let habits = {
    water: 0,
    study: 0,
    exercise: 0,
    sleep: 0
};

addBotMessage("Hello! I track your daily habits.");
addBotMessage("Type: water, study, exercise, sleep, report, bye");

function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.toLowerCase();
    input.value = "";

    if (message === "") return;

    addUserMessage(message);

    if (message === "water") {
        askHabit("water", "How many glasses of water did you drink?");
    }
    else if (message === "study") {
        askHabit("study", "How many hours did you study?");
    }
    else if (message === "exercise") {
        askHabit("exercise", "How many minutes did you exercise?");
    }
    else if (message === "sleep") {
        askHabit("sleep", "How many hours did you sleep?");
    }
    else if (message === "report") {
        addBotMessage(
            `📊 Report:<br>
            💧 Water: ${habits.water}<br>
            📚 Study: ${habits.study}<br>
            🏃 Exercise: ${habits.exercise}<br>
            😴 Sleep: ${habits.sleep}`
        );
    }
    else if (message === "bye") {
        addBotMessage("Goodbye! Build healthy habits 🌱");
    }
    else {
        addBotMessage("Sorry, I didn't understand.");
    }
}

function askHabit(habit, question) {
    let value = prompt(question);
    if (value !== null && !isNaN(value)) {
        habits[habit] = value;
        addBotMessage("Habit updated successfully ✅");
    } else {
        addBotMessage("Please enter a valid number.");
    }
}

function addBotMessage(msg) {
    let div = document.createElement("div");
    div.className = "bot";
    div.innerHTML = "🤖 " + msg;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(msg) {
    let div = document.createElement("div");
    div.className = "user";
    div.innerText = msg;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
