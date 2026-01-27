
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const captureButton = document.getElementById('captureButton');

async function startCamera() {
    const video = document.getElementById('video');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment'
            }
        });
        video.srcObject = stream;
        await video.play();
    } catch (err) {
        console.error("Error accessing the camera, err");
        alert("Error accessing the camera: " + err.message);
    }
}

async function captureAndSend() {
    const video = document.getElementById('video');
    const context = canvas.getContext('2d');
    if (video.readyState < 2 || video.videoWidth === 0) {
        alert("Camera not ready yet. Please wait a moment and try again.");
        return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    photo.src = canvas.toDataURL("image/png");

    canvas.toBlob(async (blob) => {
        if (!blob) {
            alert("Failed to capture image.");
            return;
        }

        const result = window.aipQuizResult || {};
        const formData = new FormData();
        formData.append("photo", blob, "webcam.png");
        formData.append("character", result.character || "groc");
        if (result.prompt) {
            formData.append("prompt", result.prompt);
        }

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Request failed");
            }

            const result = await response.json();
            photo.src = result.image_url;
        } catch (err) {
            console.error("Error generating image", err);
            alert("Error generating image: " + err.message);
        }
    }, "image/png");
}

if (captureButton) {
    captureButton.addEventListener('click', captureAndSend);
}

startCamera();
