// // Fonctionnalité n°1 ===================================

// let footer = document.querySelector("footer");

// let onFooterClick = function(){
//     console.log("clique");
//     }

// footer.addEventListener("click", onFooterClick);



// Fonctionnalité n°1 bis ==================================
let footer = document.querySelector("footer");

let clickCount = 0;

footer.addEventListener("click", function() {
    clickCount++;
    console.log("clic numéro " + clickCount);
    });


// Fonctionnalité n°2 =====================================

let navbarToggle = document.querySelector(".navbar-toggler");
let navbarHeader = document.querySelector("#navbarHeader");

let onNavFunction = function(){
    navbarHeader.classList.toggle("collapse");
}

navbarToggle.addEventListener("click", onNavFunction);


// Fonctionnalité n°3 =====================================

let firstCard = document.querySelector(".card");

let editButton = firstCard.querySelector(".btn.btn-sm.btn-outline-secondary");

editButton.addEventListener("click", function() {
    firstCard.style.color = "red";
    });


// Fonctionnalité n°4 =====================================

let secondCard = document.getElementsByClassName("col-md-4")[1];
let editButtonSec = secondCard.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

editButtonSec.addEventListener("click", function() {
    if (secondCard.style.color === 'green'){
    secondCard.style.color = "";
    } else {
    secondCard.style.color = "green";
    }
});
