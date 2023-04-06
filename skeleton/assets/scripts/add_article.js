var articleCards = document.getElementsByClassName('article_card');
var searchArticle = document.getElementById('searchArticle');
searchArticle.addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();
    for (var i = 0; i < articleCards.length; i++) {
        var articleName = articleCards[i].getElementsByTagName('p')[0].innerHTML.toLowerCase();
        if (articleName.indexOf(searchValue) > -1) {
            articleCards[i].style.display = 'block';
        } else {
            articleCards[i].style.display = 'none';
        }
    }
});

// When the user click on an article, update the article select
var articleSelect = document.getElementById('article_select');
var articleCards = document.getElementsByClassName('article_card');
for (var i = 0; i < articleCards.length; i++) {
    articleCards[i].addEventListener('click', function() {
        // Get the article id
        var articleId = this.id.split('_')[1];
        // Update the article select
        articleSelect.value = articleId;
        console.log('articleSelect.value: ' + articleSelect.value);
        // Trigger the change event
        var event = new Event('change');
        articleSelect.dispatchEvent(event);
        // Add class selected to the article card
        for (var i = 0; i < articleCards.length; i++) {
            articleCards[i].classList.remove('selected');
        }
        this.classList.add('selected');
        console.log('selected' + articleId);
    });
}

// Get the magasin input and fill it when the user select an article
var articleInput = document.getElementById('article_select');
var magasinInput = document.getElementById('magasin_select');
var priceValue = document.getElementById('priceValue');



articleInput.addEventListener('change', function() {
    fillMagasins(this.value);
    updatePrice();
});

magasinInput.addEventListener('change', function() {
    updatePrice();
});

function fillMagasins(value) {
    // Get the article id
    var articleId = value;
    console.log('fillMagasins ' + articleId);
    // Get the list of magasin
    var magasinList = getMagasinList(articleId);
    // Fill the magasin input
    fillMagasinInput(magasinList);
}

function getMagasinList(articleId) {
    // Get the list of magasin
    var magasinList = [];
    // For each propose
    for (var i = 0; i < proposeList.length; i++) {
        // If the article id is the same
        console.log('proposeList[i].article.id: ' + articleId);
        intArticleId = parseInt(articleId);
        console.log('list: ' + proposeList[i].article.id)
        console.log('article: ' + intArticleId)
        if (proposeList[i].article.id == intArticleId) {
            // Add the magasin to the list
            magasinList.push(proposeList[i].magasin);
        }
    }
    return magasinList;
}

function fillMagasinInput(magasinList) {
    // Clear the magasin input
    magasinInput.innerHTML = '';
    // Add the default option
    magasinInput.innerHTML += '<option value="">Choisissez un magasin</option>';
    // For each magasin
    for (var i = 0; i < magasinList.length; i++) {
        // Add the option
        magasinInput.innerHTML += '<option value="' + magasinList[i].id + '">' + getMagasinName(magasinList[i].id) + '</option>';
    }
}

function getMagasinName(magasinId) {
    // For each magasin
    for (var i = 0; i < magasinList.length; i++) {
        // If the id is the same
        if (magasinList[i].id == magasinId) {
            // Return the name
            return magasinList[i].nom;
        }
    }
}

function updatePrice() {
    // Get the article id
    var articleId = articleInput.value;
    // Get the magasin id
    var magasinId = magasinInput.value;
    // Get the price
    var propose = getPropose(articleId, magasinId);
    let price = 0;
    if (propose != undefined) {
        price = propose.prix.toString();
        updateProposeInput(propose);
    }
    // Get the quantity
    var quantity = document.getElementById('choose_propose_quantite').value;
    // Update the price
    priceValue.innerHTML = (price * quantity).toString()+ '€';
}

function getPropose(articleId, magasinId) {
    let intArticleId = parseInt(articleId);
    // For each propose
    for (var i = 0; i < proposeList.length; i++) {
        // If the article id and the magasin id are the same
        if (proposeList[i].article.id == intArticleId && proposeList[i].magasin.id == magasinId) {
            // Return the price
            return proposeList[i];
        }
    }
}

function updateProposeInput(propose) {
    // Get the propose input
    var proposeInput = document.getElementById('choose_propose_propose');
    // Set the selected value of the propose input
    let intProposeId = parseInt(propose.id);
    proposeInput.value = intProposeId;
    console.log(propose.id);
}

document.getElementById('choose_propose_quantite').addEventListener('change', function() {
    updatePrice();
});