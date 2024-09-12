// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=fitness';
const apiKey = 'GTzMG41/D943xSg5LqkWzQ==3jKlnE6mBN5LF2TB'; // Replace with your actual API key

async function getQuote() {
    try {
       
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const quoteMessage = data[0].quote;
        const quoteAuthor = data[0].author;

        const quoteHolder = document.getElementById("quoteHolder");
        const authorHolder = document.getElementById("authorHolder");

        quoteHolder.innerHTML = '"'+quoteMessage+'"';
        authorHolder.innerHTML = "-"+quoteAuthor;

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getQuote();
});
