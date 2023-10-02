// JavaScript for the widget

        // Function to open the chatbot
        function openChatbot() {
            var widgetButton = document.getElementById("widget-button");
            widgetButton.style.animation = "slide-down 0.5s ease-out";
            setTimeout(function() {
                widgetButton.style.display = "none";
                document.getElementById("chatbot").style.display = "block";
                document.addEventListener("click", closeChatbotOnClickOutside);
            }, 300);
        }

        // Function to close the chatbot
        function closeChatbot() {
    var widgetButton = document.getElementById("widget-button");
    var chatbot = document.getElementById("chatbot");
    chatbot.style.animation = "slide-down 0.5s ease-out";
    setTimeout(function() {
        chatbot.style.display = "none";
        chatbot.style.animation = ""; // Remove animation property
        document.removeEventListener("click", closeChatbotOnClickOutside);
        setTimeout(function() {
            widgetButton.style.display = "block";
            widgetButton.style.animation = "slide-up 0.5s ease-out";
        }, 100);
    }, 300);
}

        // Function to close the chatbot when clicked outside
        function closeChatbotOnClickOutside(event) {
            var chatbot = document.getElementById("chatbot");
            if (!chatbot.contains(event.target)) {
                closeChatbot();
            }
        }

        // Attach event listeners to the widget button and chatbox close button
        document.getElementById("widget-button").addEventListener("click", openChatbot);
        document.getElementById("chatbox-close").addEventListener("click", closeChatbot);

        // Add event listener to the send button
        document.getElementById("send-button").addEventListener("click", function() {
            // Code to send the user's message and receive the chatbot's response
        });
