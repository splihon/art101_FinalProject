//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


// window.addEventListener("load", (event) => {document.getElementById("backgroundMusic").play();});
function PlayMusic() {

  var play=document.getElementById("backgroundMusic");
  play.play();
}

$(document).ready(function(){
  setTimeout(PlayMusic,3000);
})
// $(document).ready(function() {
//   $("#backgroundMusic").get(0).play();
// });

const imageTextPairs = [
    {src: 'img/img-character/chococat.gif', 
      text: '<h1> CHOCOCAT ! </h1>' + '<br>' +
      'Debuting in 1996, Chococat is a very spunky black cat who loves to play around and his birthday is May 10th. He is known to be logical, intuitive, and thoughtful, loves reading up on the latest news, and has whiskers that can pick up information like antennae!'},
    // {src: 'img-stickers/Baku_2D.webp', text: 'This is the second text'},
    {src: 'img/img-character/pompompurin.gif',
       text: '<h1> POMPOMPURIN ! </h1>' + '<br>' +
       'Debuting in 1996, PomPomPurin is a dog who loves hiding and collecting shoes, hanging out with friends, and doing "Purin Aerobics". His birthday is April 16th! His dream is to get even bigger, and he loves soft foosd like pudding. PomPomPurin secretly likes when his beret flies away because it means he can go retrieve it.'},
    {src: 'img/img-character/kuromigif.gif', 
      text: '<h1> KUROMI ! </h1>' + '<br>' +
      'Debuting in 2005, Kuromi is a mischievous rabbit and an escaped prisoner from Mari Land. Her birthday is on Halloween (October 31st)! She is also the leader of a biker gang called Kuromis 5 and loves to write in her diary, cook, and read romance novels! Kuromi considers My Melody to be her rival, but My Melody considers Kuromi to be a good friend!'},
    {src: 'img/img-character/mochaSparklingEyes.gif',
       text: '<h1> MOCHA ! </h1>' + '<br>' +
       'Debuting in 2007, Mocha is a brown dog and the significant other of Cinnamoroll! She loves chocolate gateau and fruit tarts, and is a fashion designer. She is known to be the big sister/crybaby of her friend group. Her birthday is March 15th!'},
    {src: 'img/img-character/my-melody.gif', 
      text: '<h1> MY MELODY ! </h1>' + '<br>' +
       'Debuting in 1975, My Melody is a little rabbit girl who was born in a forest in Mariland on Janurary 18th. She treasures her bright red hood(that is also often depicted as pink) that her grandmother made for her! She is sweet, charming, and girly, though sometimes she is a bit careless and oblivious to her surroundings!'},
    // {src: 'img-stickers/pino.png', text: 'This is the seventh text'},
    {src: 'img/img-character/usahana resized.png', 
      text: '<h1> USAHANA ! </h1>' + '<br>' +
      'Debuting in 2000, Usahana is an adorable colorful bunner here to bring warmth into your heart! Her birthday is August 7th and she loves to make sweets, collect earrings, and one day dreams of becoming a ballerina!'},
];



function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * imageTextPairs.length);
    const randomPair = imageTextPairs[randomIndex];

//API Stuff here, it is a advice generator
// then, we linked it up so that the characters "give" the user advice when you press generate
    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        type: 'GET',
        success: function(response) {
          const advice = JSON.parse(response).slip.advice;
          document.getElementById('randomText').innerHTML = `<h2 id="adviceTitle" >🔮 Words of Wisdom: </h2><h3>${advice}</h3>`;

          // interprets HTML tags in the text strings
          const outputDiv = document.getElementById('randomDescription');
          outputDiv.innerHTML = `
              <p class="character-text">${randomPair.text}</p>
          `;
        }
      });
    
    document.getElementById('randomImage').src = randomPair.src;
    document.getElementById('randomDescription').innerText = randomPair.text;
        };

        