var closeButton = document.querySelector('.close') // close button
var articlePopup = document.querySelector('article.popUp');

closeButton.addEventListener('click', showPopup);

function showPopup() {
    // console.log('toggle popup')
    articlePopup.classList.toggle('active')
}



// CHAT GPT gevraagd waarom ik de melding Uncaught TypeError: articleItem.addEventListener is not a function kreeg > had een single item gedaan maar ik wilde met meerdere
let articleItems = document.querySelectorAll('.newsArticles .item');

// Loop through each element in the NodeList and add a click event listener
articleItems.forEach(function(articleItem) {
    articleItem.addEventListener('click', showArticle);
});

function showArticle() {
    console.log('Clicked article item');

    this.classList.toggle('active');
    showPopup(); // laat popup zien van article
}



// chatgpt 10 jan
    const infoArticles = document.querySelectorAll(".item.info");
    const popUpArticle = document.querySelector(".popUp");
    const popUpH4 = popUpArticle.querySelector("h4");
    const popUpParagraph = popUpArticle.querySelector("p");
    const popUpImage = popUpArticle.querySelector("img");

    // Add click event listeners to all info articles
    infoArticles.forEach(function (infoArticle) {
        infoArticle.addEventListener("click", function (event) {
            // Check if the clicked element is the .popUp div
            if (event.target.closest('.popUp')) {
                return;
            }

            // Get the src attribute from the clicked info article
            const infoImageSrc = infoArticle.querySelector("img").src;

            // Get the content of the clicked info article's h4 and p
            const infoH4Content = infoArticle.querySelector("h4").textContent;
            const infoPcontent = infoArticle.querySelector("p").textContent

            // Set the src attribute of the image in the popUp article
            popUpImage.src = infoImageSrc;

            // Set the content of the h4 in the popUp article
            popUpH4.textContent = infoH4Content;
            popUpParagraph.textContent = infoPcontent;

            // // Display the popUp article
            // popUpArticle.style.display = "block";
        });
    });

    // Add click event listener to close button in the popUp article
    // const closeButton = popUpArticle.querySelector(".close");

    // closeButton.addEventListener("click", function () {
    //     // Hide the popUp article when the close button is clicked
    //     popUpArticle.style.display = "none";
    // });

// einde chatgpt 10 jan

























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
            // showAllItems(); // kan ik aan zetten dan wanneer je naast de buttons klikt laat ie alle items weer zien
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




    // MOBILE MENU
    // eerst de hamburger menu identificeren
    var hamburgerMenu = document.querySelector(".hamburgerMenu")

    // als je op hamburgerMenu klikt dan gaat er een functie gebeuren
    hamburgerMenu.addEventListener('click', showMenu);
    const hamburgerIcon = hamburgerMenu.querySelector("i");

    function showMenu() {
        var bodySelect = document.querySelector("body");

        bodySelect.classList.toggle('showMenu')

        hamburgerIcon.classList.remove("fa-bars"); // Remove mystyle class from DIV
        hamburgerIcon.classList.add("fa-times");
    }
    
    // EINDE MOBILE MENU