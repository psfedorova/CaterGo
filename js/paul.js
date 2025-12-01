document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // If these don't exist on the page, do nothing
    if (!nameInput || !emailInput || !messageInput) {
        return;
    }

    // Try to find the button in the same area as the message input
    let container = messageInput.parentElement;
    if (container && container.parentElement) {
        container = container.parentElement;
    }

    const submitButton = container
        ? container.querySelector("button")
        : document.querySelector("button");

    if (!submitButton) {
        return; // no button found, nothing to do
    }

    // Create a message box under the message field
    const messageBox = document.createElement("div");
    messageBox.id = "form-message";
    messageInput.parentElement.insertAdjacentElement("afterend", messageBox);

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = "";          // reset classes
        messageBox.classList.add(type);     // "success" or "error"
        messageBox.style.display = "block";
    }

    function clearMessage() {
        messageBox.textContent = "";
        messageBox.style.display = "none";
    }

    function validateEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    // Clear message while typing
    [nameInput, emailInput, messageInput].forEach((input) => {
        input.addEventListener("input", clearMessage);
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // just in case there is a form later

        let valid = true;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "") {
            showMessage("Please enter your name.", "error");
            valid = false;
        } else if (email === "" || !validateEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            valid = false;
        } else if (message.length < 10) {
            showMessage("Your message must be at least 10 characters long.", "error");
            valid = false;
        }

        if (valid) {
            showMessage("Thank you! Your message has been sent.", "success");
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";

            setTimeout(clearMessage, 4000);
        }
    });
});
