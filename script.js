// script.js
document.addEventListener("DOMContentLoaded", () => {
    const clubName = document.querySelector('title').innerText.split(' ')[0].toLowerCase();
    loadMessages(clubName);
});

function sendMessage(club) {
    const input = document.getElementById("chat-input");
    if (input.value.trim() !== "") {
        const message = input.value.trim();
        addMessageToChat(club, message);
        saveMessage(club, message);
        input.value = "";
    }
}

function addMessageToChat(club, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveMessage(club, message) {
    const messages = JSON.parse(localStorage.getItem(club + "-messages")) || [];
    messages.push(message);
    localStorage.setItem(club + "-messages", JSON.stringify(messages));
}

function loadMessages(club) {
    const messages = JSON.parse(localStorage.getItem(club + "-messages")) || [];
    messages.forEach(message => {
        addMessageToChat(club, message);
    });
}
