// Interactive Romantic Anniversary Game featuring Daniel

// Set up game variables
const anniversaryMessages = [
    "Happy Anniversary, Daniel! 💖",
    "Another year of love and joy with you! 🌹",
    "You make every day special! 🎉",
];

const animations = [
    "🎈",  // Balloon
    "💐",  // Flowers
    "💞",  // Heart
];

// Function to display a random anniversary message
function displayMessage() {
    const messageIndex = Math.floor(Math.random() * anniversaryMessages.length);
    console.log(anniversaryMessages[messageIndex]);
}

// Function to trigger a random animation
function displayAnimation() {
    const animationIndex = Math.floor(Math.random() * animations.length);
    console.log(animations[animationIndex]);
}

// Game start
function startGame() {
    console.log("Welcome to your Anniversary Game!");
    displayMessage();
    displayAnimation();
}

// Start the game
startGame();