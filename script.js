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
