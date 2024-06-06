//A button that generates a photo of a random sanrio character
document.getElementById('generateButton').addEventListener('click', generateRandomContent);


const imageTextPairs = [
    {src: '../img/chocoCat.png', text: 'This is the first text'},
    {src: '../img/kuromi.png', text: 'This is the second text'},
    {src: '../img/transparentPurin.png', text: 'This is the third text'},
    //add more img and correct text later
];

function generateRandomContent() {
    const randomIndex = Math.floor(Math.random() * imageTextPairs.length);
    const randomPair = imageTextPairs[randomIndex];

    document.getElementById('randomImage').src = randomPair.src;
    document.getElementById('randomText').innerText = randomPair.text;
}

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
