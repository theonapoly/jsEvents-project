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


// Fonctionnalité n°5 =====================================

let navbar = document.getElementsByClassName("navbar")[0];

navbar.addEventListener("dblclick", function() {
    let linkTag = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

    if (linkTag.disabled) {
        linkTag.disabled = false; // Réactiver le lien CSS
    } else {
        linkTag.disabled = true; // Désactiver le lien CSS
    }
});


// Fonctionnalité n°6 =====================================

let allCards = document.getElementsByClassName("col-md-4");

for (let i = 0; i < allCards.length; i++) {
  let btnEditCard = allCards[i].getElementsByTagName("button")[0];
  let textCard = allCards[i].querySelector(".card-text");
  let imgCard = allCards[i].querySelector(".card-img-top")

  btnEditCard.addEventListener('mouseover', reduceCard);

  function reduceCard() {
    textCard.classList.toggle("collapse");
      if(imgCard.style.width == false) {
      imgCard.style.width = '20%';
    } else if(imgCard.style.width == '20%') {
      imgCard.style.width = '';
    }
  }
}


// Fonctionnalité n°7 =====================================

let rotateBtn = document.querySelector("a.btn-secondary");

rotateBtn.addEventListener("click", rotateCards);

function rotateCards() {
    let parent = document.querySelector(".album .row");
    let lastCard = parent.lastElementChild;
    parent.insertBefore(lastCard, parent.firstElementChild);
    
}
