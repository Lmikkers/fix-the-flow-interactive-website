var closeButton = document.querySelector('.close') // close button
var articlePopup = document.querySelector('article.popUp');

console.log(closeButton)

closeButton.addEventListener('click', showPopup);

function showPopup() {
    console.log('klikt button')
    articlePopup.classList.toggle('active')
}



// Wanneer er op een nieuws item wordt geklikt
// let articleItem = document.querySelector('.newsArticles .item')

// articleItem.addEventListener('click', showArticle)

// function showArticle() {
//     console.log('klikt article item');
//     this.classList.toggle('active')
// }


// CHAT GPT gevraagd waarom ik de melding Uncaught TypeError: articleItem.addEventListener is not a function kreeg > had een single item gedaan maar ik wilde met meerdere
let articleItems = document.querySelectorAll('.newsArticles .item');

// Loop through each element in the NodeList and add a click event listener
articleItems.forEach(function(articleItem) {
    articleItem.addEventListener('click', showArticle);
});

function showArticle() {
    console.log('Clicked article item');
    this.classList.toggle('active');
    showPopup();
}