//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


const imageTextPairs = [
    {src: '../img/img-character/chococat.gif', text: 'This is the first text'},
    // {src: 'img-stickers/Baku_2D.webp', text: 'This is the second text'},
    {src: '../img/img-character/pompompurin.gif', text: 'This is the third text'},
    {src: '../img/img-character/kuromigif.gif', text: 'This is the fourth text'},
    {src: '../img/img-character/mochaSparklingEyes.gif', text: 'This is the fifth text'},
    {src: '../img/img-character/my-melody.gif', text: 'This is the sixth text'},
    // {src: 'img-stickers/pino.png', text: 'This is the seventh text'},
    {src: '../img/img-character/usahana resized.png', text: 'This is the eighth text'},
    //add more img and correct text later
];

function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * imageTextPairs.length);
    const randomPair = imageTextPairs[randomIndex];

    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        type: 'GET',
        success: function(response) {
          const advice = JSON.parse(response).slip.advice;
          console.log(advice);
        }
      });



    document.getElementById('randomImage').src = randomPair.src;
    document.getElementById('randomText').innerText = randomPair.text;




};
