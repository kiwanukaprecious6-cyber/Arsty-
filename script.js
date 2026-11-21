''async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        const video = document.getElementById("video");
        video.srcObject = stream;
    } catch (err) {
        alert("Could not access camera.");
        console.error(err);
    }
}

function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    if (input.value.trim() !== "") {
        const msg = document.createElement("p");
        msg.textContent = input.value;

        chat.appendChild(msg);
        input.value = "";

        chat.scrollTop = chat.scrollHeight;
    }
}
