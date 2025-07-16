const reviews = [
    "\"This platform changed my life!\" - Neko-sama",
    "\"There's so much to do in this app!\" - Stardenburdenhardenbart",
    "\"Meow!\" - Cat"
];

let index = 0; 

const review_label = document.querySelector("#quote");
const reviewee_label = document.querySelector("#reviewee");
const container = document.querySelector("#review_container");

if(container == null) {
    console.log("NULL");
}

function showNextReview() {
     container.style.opacity = 0;

    setTimeout(() => {
      review_label.textContent = reviews[index];
      container.style.opacity = 1;
      index = (index + 1) % reviews.length;
    }, 500); // matches the CSS fade transition
}
    // Initial display
    showNextReview();

    // Change review every 5 seconds
    setInterval(showNextReview, 5000);


