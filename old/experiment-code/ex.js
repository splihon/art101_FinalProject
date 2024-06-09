//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


const imageTextPairs = [
    {src: 'img/img-character/chococat.gif', text: 'This is the first text'},
    // {src: 'img-stickers/Baku_2D.webp', text: 'This is the second text'},
    {src: 'img/img-character/pompompurin.gif', text: 'This is the third text'},
    {src: 'img/img-character/kuromigif.gif', text: 'This is the fourth text'},
    {src: 'img/img-character/mochaSparklingEyes.gif', text: 'This is the fifth text'},
    {src: 'img/img-character/my-melody.gif', text: 'This is the sixth text'},
    // {src: 'img-stickers/pino.png', text: 'This is the seventh text'},
    {src: 'img/img-character/usahana resized.png', text: 'This is the eighth text'},
    //add more img and correct text later
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
          document.getElementById('randomText').innerText = advice;
        }
      });

    document.getElementById('randomImage').src = randomPair.src;
    


};



// // Wait until the document is fully loaded
// $(document).ready(function() {
//     // When the menu button is clicked
//     $('.menu-button').click(function() {
//         // Toggle the visibility of the menu
//         $('.menu').toggle();
//     });
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
