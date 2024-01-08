var closeButton = document.querySelector('.close') // close button
var articlePopup = document.querySelector('article.popUp');

console.log(closeButton)

closeButton.addEventListener('click', showPopup);

function showPopup() {
    console.log('klikt button')
    articlePopup.classList.toggle('active')
}



// CHAT GPT gevraagd waarom ik de melding Uncaught TypeError: articleItem.addEventListener is not a function kreeg > had een single item gedaan maar ik wilde met meerdere
let articleItems = document.querySelectorAll('.newsArticles .item');

// met behulp van chat gpt
let infoArticle = document.querySelector(".item.info");
let popUpArticle = document.querySelector(".popUp");
let popUpImage = popUpArticle.querySelector("img");

// Loop through each element in the NodeList and add a click event listener
articleItems.forEach(function(articleItem) {
    articleItem.addEventListener('click', showArticle);
});

function showArticle() {
    console.log('Clicked article item');

    // IMG URL
        let infoImageSrc = infoArticle.querySelector("img").src;
        // Set the src attribute of the image in the popUp article
        popUpImage.src = infoImageSrc;
    // END IMG URL


    this.classList.toggle('active');
    showPopup();
}



















// FILTEREN
    const filterPopularButton = document.getElementById("filterPopulair");
    const filterRecentButton = document.getElementById("filterRecent");
    const showAllButton = document.getElementById("showAllButton");
 

   // Add click event listeners to the filter buttons
   filterPopularButton.addEventListener("click", function () {
        setActiveButton(filterPopularButton);
        filterItems("popularity", "high");
    });

    filterRecentButton.addEventListener("click", function () {
        setActiveButton(filterRecentButton);
        filterItems("recency", "recent");
    });

    showAllButton.addEventListener("click", function () {
        setActiveButton(showAllButton);
        showAllItems();
    });

    // Add click event listener to document to remove "active" class when clicking outside buttons
    document.addEventListener("click", function (event) {
        const target = event.target;

        if (target !== filterPopularButton && target !== filterRecentButton && target !== showAllButton) {
            removeActiveClass(filterPopularButton);
            removeActiveClass(filterRecentButton);
            removeActiveClass(showAllButton);
            showAllItems();
        }
    });

    // Function to set the "active" class on the clicked button
    function setActiveButton(button) {
        removeActiveClass(filterPopularButton);
        removeActiveClass(filterRecentButton);
        removeActiveClass(showAllButton);
        button.classList.add("active");
    }

    // Function to remove "active" class
    function removeActiveClass(element) {
        element.classList.remove("active");
    }




    // Function to filter items based on criteria
    function filterItems(criteria, value) {
        // Get all items with class 'item'
        const items = document.querySelectorAll(".item");

        // Filter items based on the specified criteria and value
        const filteredItems = Array.from(items).filter(item => {
            return item.dataset[criteria] === value;
        });

        // Hide all items
        items.forEach(item => {
            item.style.display = "none";
        });

        // Display only filtered items
        filteredItems.forEach(item => {
            item.style.display = "block";
        });
        
    }

    // Function to show all items
    function showAllItems() {
        // Get all items with class 'item'
        const items = document.querySelectorAll(".item");

        // Display all items
        items.forEach(item => {
            item.style.display = "block";
        });
    }
