/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// scripts.js

// Array of TV shows with title and poster URL
let tvShows = [
    {
        title: "Fresh Prince of Bel Air",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",
        bullets: ["Comedy", "Drama", "Sitcom"]
    },
    {
        title: "Curb Your Enthusiasm",
        posterURL: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
        bullets: ["Comedy", "Mockumentary", "Satire"]
    },
    {
        title: "East Los High",
        posterURL: "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg",
        bullets: ["Drama", "Teen", "Romance"]
    }
    // Add more TV shows here
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    const template = document.getElementById("card-template");

    // Clear existing cards
    cardContainer.innerHTML = "";

    // Loop through TV shows and create a card for each
    tvShows.forEach(show => {
        const cardClone = template.content.cloneNode(true);
        const card = cardClone.querySelector(".card");

        card.querySelector("h2").textContent = show.title;
        card.querySelector("img").src = show.posterURL;
        card.querySelector("img").alt = show.title + " Poster";

        const bulletsList = card.querySelector("ul");
        show.bullets.forEach(bullet => {
            const listItem = document.createElement("li");
            listItem.textContent = bullet;
            bulletsList.appendChild(listItem);
        });

        cardContainer.appendChild(card);
    });
}

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    tvShows.pop(); // Remove last TV show
    showCards(); // Re-render cards
}

// Call showCards() when the page is loaded
document.addEventListener("DOMContentLoaded", showCards);

