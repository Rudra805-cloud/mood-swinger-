// script.js
const categories = {
    jokes: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ],
    emotional: [
        "Tears are words that need to be written.",
        "The emotion that can break your heart is sometimes the very one that heals it.",
        "Sometimes, the smallest things take up the most room in your heart."
    ],
    love: [
        "Love is composed of a single soul inhabiting two bodies.",
        "The best thing to hold onto in life is each other.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    ]
};

let currentCategory = [];
let intervalId;

function showCategory(category) {
    currentCategory = categories[category];
    document.getElementById('display').style.display = 'block';
    document.body.className = category; // Change the body class to match the category
    changeFact();
    clearInterval(intervalId);
    intervalId = setInterval(changeFact, 3000);
}

function changeFact() {
    const randomIndex = Math.floor(Math.random() * currentCategory.length);
    const factElement = document.getElementById('fact');
    factElement.textContent = currentCategory[randomIndex];
}
// script.js
function swingMood() {
    const moodColors = {
        love: '#ffb6c1', // Light pink for love
        emotional: '#add8e6', // Light blue for emotional
        jokes: '#ffffe0' // Light yellow for jokes
    };

    const moodEmojis = {
        love: '❤️',
        emotional: '😢',
        jokes: '😂'
    };

    // Randomly select a mood
    const moods = Object.keys(moodColors);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    // Set the background color and emoji based on the selected mood
    document.body.style.backgroundColor = moodColors[randomMood];
    const emojiElement = document.getElementById('emoji');
    emojiElement.textContent = moodEmojis[randomMood];
}
