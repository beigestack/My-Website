let isGamePaused = false;
let events = [];
let audio = new Audio("MoN_HHC.mp3");
audio.loop = true; // Enable looping

function setupEventListeners() {
    document.addEventListener('keydown', (event) => {
        events.push({ type: 'keydown', key: event.key });
    });

    document.addEventListener('keyup', (event) => {
        events.push({ type: 'keyup', key: event.key });
    });

    document.addEventListener("touchstart", function(event) {
        event.preventDefault();

        if (event.touches.length === 2) {
            // Two-finger tap toggles pause
            togglePause();
        } else if (event.touches.length === 1 && !isGamePaused) {
            // Single tap makes the player jump
            events.push({ type: 'touchstart' });
        }
    });
}

function togglePause() {
    isGamePaused = !isGamePaused;

    if (isGamePaused) {
        audio.pause(); // Pause music
    } else {
        audio.play(); // Resume music
    }
}

function getEvents() {
    let currentEvents = [...events];
    events = [];
    return currentEvents;
}

async function play() {
    document.body.innerHTML = ''; // Clear previous elements

    let score = 0;
    let speed = 6;

    const gameWindow = document.createElement('canvas');
    document.body.appendChild(gameWindow);
    const context = gameWindow.getContext('2d');
    gameWindow.width = 480;
    gameWindow.height = 640;

    const player = { x: 75, y: 320, width: 45, height: 60 };
    const pipe = { x: 480, y: Math.floor(Math.random() * 570), width: 45, height: 70 };

    let playerVelocity = 0;
    const gravity = 0.75;
    const jumpStrength = -12;

    audio.play(); // Start playing audio when the game starts

    function gameLoop() {
        context.clearRect(0, 0, gameWindow.width, gameWindow.height);
        context.fillStyle = "rgba(50, 50, 50, 1)";
        context.fillRect(0, 0, gameWindow.width, gameWindow.height);

        if (!isGamePaused) {
            playerVelocity += gravity;
            player.y += playerVelocity;

            if (player.y + player.height >= gameWindow.height) {
                player.y = gameWindow.height - player.height;
                playerVelocity = 0;
            }
            if (player.y < 0) {
                player.y = 0;
                playerVelocity = 0;
            }

            pipe.x -= speed;
            if (pipe.x < -70) {
                pipe.x = 480;
                pipe.y = Math.floor(Math.random() * 570);
                score++;
            }

            if (collides(player, pipe)) {
                score = 0;
                pipe.x = 480;
                pipe.y = Math.floor(Math.random() * 570);
            }
        }

        context.fillStyle = "red";
        context.fillRect(player.x, player.y, player.width, player.height);
        context.fillStyle = "rgb(0, 255, 0)";
        context.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);

        context.font = "20px Consolas";
        context.fillStyle = "white";
        context.fillText(`Score: ${score}`, 10, 20);

        if (isGamePaused) {
            renderPauseScreen();
        }

        requestAnimationFrame(gameLoop);
    }

    gameLoop();


async function main() {
    document.body.innerHTML = ''; // Clear previous elements

    const gameWindow = document.createElement('canvas');
    document.body.appendChild(gameWindow);
    const context = gameWindow.getContext('2d');
    gameWindow.width = 480;
    gameWindow.height = 640;

    setupEventListeners();

    // Determine font size based on screen width
    let titleFontSize = window.innerWidth <= 600 ? "40px" : "75px"; // Smaller font on mobile

    context.fillStyle = "rgba(50, 50, 50, 1)";
    context.fillRect(0, 0, gameWindow.width, gameWindow.height);
    context.font = titleFontSize + " Consolas"; // Dynamic font size for title
    context.fillStyle = "white";
    context.fillText("ThePOCGame", 35, 200);

    context.font = "20px Consolas";
    context.fillText("Press Enter or Tap to Play", 75, 600);

    while (true) {
        await new Promise(resolve => setTimeout(resolve, 100));
        for (const event of getEvents()) {
            if (event.type === 'keydown' && event.key === 'Enter') {
                play();
                return;
            }
            if (event.type === 'touchstart') {
                play();
                return;
            }
        }
    }
}


function collides(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

main();
