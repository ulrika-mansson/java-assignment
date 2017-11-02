/* GLOBAL VARIABLES */
var listOfProducts;
var numberOfAddedProducts = 0;


/*Kod för att hämta produkterna från json-filen */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/* Kod för att läsa in produkter till html-sidan */
function createUIFromLoadedProducts() {
   

    /* hämta det som finns i main. inte helt säker på om detta verkligen behövs, men if it aint broken ...  */
    var main = document.getElementById("main");
     

    //rita ut productList (produktlistan), sätt en klass på den
    var productList = document.createElement("div");
    productList.className = 'productListClass';

    //loopa genom listan
    for(var index = 0; index < listOfProducts.length; index++) {

        //anropa en ny funktion
        var productListItem = createProductListItem(listOfProducts[index]);

        //lägg till productListItem till productList
        productList.appendChild(productListItem); 
    }

        //skriv ut productList till main
        main.appendChild(productList);
}

//nu skapar vi funktionen, utanför / efter vår tidigare funktion

function createProductListItem(productItem) {
    var productListItem = document.createElement("div");
    productListItem.className = 'productListItemClass';

    //titel
    var getTitle = document.createElement("h1");
    getTitle.innerText = " " + productItem.title;
    productListItem.appendChild(getTitle);
    
    //description
    var getDescription = document.createElement("h5");
    getDescription.innerText = " " + productItem.description;
    productListItem.appendChild(getDescription);

    //image
    var getImage = document.createElement("img");
    getImage.src = "assets/" + productItem.image;
    productListItem.appendChild(getImage);

    //price
    var getPrice = document.createElement("p");
    getPrice.innerText = "Pris: " + productItem.price + " SEK";
    productListItem.appendChild(getPrice); 
    
    
    //lägg till knapp för pris

    var buttonElement = document.createElement("button");
    //lägg till element för ikon i knapp 
    var basketIcon = document.createElement("i");
    //lägg till klass för fontawesome
    basketIcon.className = 'fa fa-cart-arrow-down fa-2x';
    buttonElement.appendChild(basketIcon);
    //what would janne do, fast en span för den är inline
    var basketText = document.createElement("span");
    basketText.innerText = " Lägg till i varukorgen";
    buttonElement.appendChild(basketText);
    buttonElement.onclick = function() {
        numberOfAddedProducts += 1;
        console.log(numberOfAddedProducts);
      

        var counter = document.getElementById("counter");
        counter.innerText = numberOfAddedProducts;
    }
    productListItem.appendChild(buttonElement);


    //med return skriver vi ut funktionen vi har skapat
    return productListItem;
    
}
    
    