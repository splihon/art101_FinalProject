//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


const imageTextPairs = [
    {src: 'img-stickers/chococat.webp', text: 'This is the first text'},
    {src: 'img-stickers/Baku_2D.webp', text: 'This is the second text'},
    {src: 'img-stickers/transparentPurin.png', text: 'This is the third text'},
    {src: 'img-stickers/transparent-kuromi.gif', text: 'This is the fourth text'},
    {src: 'img-stickers/Mocha.webp', text: 'This is the fifth text'},
    {src: 'img-stickers/my-melody.png', text: 'This is the sixth text'},
    {src: 'img-stickers/pino.png', text: 'This is the seventh text'},
    {src: 'img-stickers/usahana.webp', text: 'This is the eighth text'},
    //add more img and correct text later
];

function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * imageTextPairs.length);
    const randomPair = imageTextPairs[randomIndex];

    document.getElementById('randomImage').src = randomPair.src;
    document.getElementById('randomText').innerText = randomPair.text;
};
