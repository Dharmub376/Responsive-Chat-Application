document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        var chatMessages = document.getElementById('chatMessages');
        var newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);

        // Clear the input field after sending the message
        messageInput.value = '';

        // Scroll to the bottom to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate an automatic reply after 1 second
        setTimeout(function() {
            var replyMessage = "Yes Babe.";
            receiveMessage(replyMessage);
        }, 1000);
    }
}

function receiveMessage(message) {
    var chatMessages = document.getElementById('chatMessages');
    var newMessage = document.createElement('div');
    newMessage.className = 'message received';
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);

    // Scroll to the bottom to show the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
