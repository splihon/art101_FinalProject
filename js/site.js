
//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


const imageTextPairs = [
    {src: 'img/chocoCat.png', text: 'This is the first text'},
    {src: 'img/kuromi.png', text: 'This is the second text'},
    {src: '../img/transparentPurin.png', text: 'This is the third text'},
    //add more img and correct text later
];

function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * imageTextPairs.length);
    const randomPair = imageTextPairs[randomIndex];

    document.getElementById('randomImage').src = randomPair.src;
    document.getElementById('randomText').innerText = randomPair.text;
}
