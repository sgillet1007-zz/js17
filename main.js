$(document).on('ready', function() {
// GLOBAL VARIABLES
var editOrder = false; //only true when order is being edited. PLACE ORDER button resets value to false.
var orderTotal = 0; //incremented by each ordered menu item. PLACE ORDER button resets value to 0.
var currentOrder = {};

// ***************************FOOD ITEM OBJECT**********************************
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
FoodItem.prototype.toStrings = function () {
    return '\nName : ' + this.name + 
            '\nCalories : ' + this.calories + 
            '\nVegan : ' + this.vegan + 
            '\nGluten Free : ' + this.glutenFree + 
            '\nCitrus Free : ' + this.citrusFree; +
            '\n***********************';
}

FoodItem.prototype.create = function(){

}

// Three FoodItems that go into the Burrito Plate
	var tortilla = new FoodItem('Tortilla', 150, true, false, true);
	var chicken = new FoodItem('Chicken', 200, false, true, true);
	var lettuce = new FoodItem('Lettuce', 30, true, true, true);
// Three FoodItems that go into the Guac Plate
	var tacoShell = new FoodItem('Taco Shell', 150, true, false, true);
	var groundBeef = new FoodItem('Ground Beef', 250, false, true, true);
	var guacamole = new FoodItem('Guacamole', 150, true, true, true);
// Three FoodItems that go into the Margarita
	var tequila = new FoodItem('Tequila', 100, true, true, true);
	var margarita_mix = new FoodItem('Margarita Mix', 200, true, true, false);
	var salt = new FoodItem('Salt', 0, true, true, true);

// ***************************DRINK OBJECT**********************************
// PART TWO
var Drink = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.toStrings = function () {
    var drinkStringArray = [];
    for (var i = 0; i < this.ingredients.length; i++) {
        drinkStringArray.push(this.ingredients[i].toStrings());
    };
    var drinkString = drinkStringArray.join(' ');
    return '\nName : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + drinkString + '\n' +
            '\n^^ ********** ^^';
}

// Drink.prototype.create = function(){
// }
//boolean helper function for dietary reqs
function boolCheck(array) {
    var output = true;
    for (i=0;i<array.length;i++){
        if (array[i]===false){
            output = false;
        }
    }
    return output;
}

// Three dietary functions that return boolean when a plate is passed as aargument
Drink.prototype.isVegan = function () {
    var veganArray = [];
    for (i=0;i<this.ingredients.length;i++){
        veganArray.push(this.ingredients[i].vegan);
    }
    return boolCheck(veganArray);   
}
    
Drink.prototype.isGlutenFree = function () {
    var gFreeArray = [];
    for (i=0;i<this.ingredients.length;i++){
        gFreeArray.push(this.ingredients[i].glutenFree);
    }
    return boolCheck(gFreeArray);
}

Drink.prototype.isCitrusFree = function () {
    var cFreeArray =[];
    for (i=0;i<this.ingredients.length;i++){
        cFreeArray.push(this.ingredients[i].citrusFree);
    }
    return boolCheck(cFreeArray);
}

//Instance of Margarita 
var margarita = new Drink ('Margarita', 'Awesome', 5.50, [tequila, margarita_mix, salt]);

// *****************************PLATE OBJECT*************************************************************************************************************
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.toStrings = function () {
    var plateStringArray = [];
    for (var i = 0; i < this.ingredients.length; i++) {
        plateStringArray.push(this.ingredients[i].toStrings());
    };
    var plateString = plateStringArray.join(' ');

    return '\nName : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + plateString + '\n'+
            '\n^^ ********** ^^';
}

//boolean helper function for dietary reqs
function boolCheck(array) {
    var output = true;
    for (i=0;i<array.length;i++){
        if (array[i]===false){
            output = false;
        }
    }
    return output;
}

// Three dietary functions that return boolean when a plate is passed as aargument
Plate.prototype.isVegan = function () {
    var veganArray = [];
    for (i=0;i<this.ingredients.length;i++){
        veganArray.push(this.ingredients[i].vegan);
    }
    return boolCheck(veganArray);   
}
    
Plate.prototype.isGlutenFree = function () {
    var gFreeArray = [];
    for (i=0;i<this.ingredients.length;i++){
        gFreeArray.push(this.ingredients[i].glutenFree);
    }
    return boolCheck(gFreeArray);
}

Plate.prototype.isCitrusFree = function () {
    var cFreeArray =[];
    for (i=0;i<this.ingredients.length;i++){
        cFreeArray.push(this.ingredients[i].citrusFree);
    }
    return boolCheck(cFreeArray);
}

// Plate.prototype.create = function(){
// }
// Instance of Burrito Plate
var burritoPlate = new Plate('Burrito Plate', 'Huge', 6.00, [tortilla, chicken, lettuce]);
// Instance of Guac Plate
var guacPlate = new Plate('Guac Plate', 'Delicious', 6.00, [tacoShell, groundBeef, guacamole]);

// console.log(burritoPlate.isCitrusFree());

// *******************************ORDER OBJECT**********************************************************************************************************

var Order = function (plates) {
    this.plates = plates;
}
Order.prototype.toStrings = function () {
    var orderStringArray = [];
    for (var i = 0; i < this.plates.length;i++) {
    	orderStringArray.push(this.plates[i].name.toStrings());
    }
    var orderString = orderStringArray.join(' ');
    return orderString;
}

// instantiate an order as starting condition.... refactor later to initiate with button click
// var order1 = new Order([]);
// console.log(order1);

// *******************************MENU OBJECT**********************************************************************************************************
var Menu = function (plates) {
    this.plates = plates; 
}
Menu.prototype.toStrings = function () {
    
    var menuStringArray = [];
    for (var i = 0; i < this.plates.length; i++) {
            menuStringArray.push(this.plates[i].toStrings());
    }
    var menuString = menuStringArray.join( ' ');
    return menuString;
}

// Instanace of Menu class
var menuMex = new Menu([margarita, burritoPlate, guacPlate]);

// *******************************RESTAURANT OBJECT**********************************************************************************************************
var Restaurant = function (name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
Restaurant.prototype.toStrings = function () {
    return'Restaurant: ' + this.name + 
        '\nDescription : ' + this.description + 
        '\n This MENU includes' + this.menu.toStrings() +
        '\n********************************';
}

Restaurant.prototype.create = function(){
	
}
// Instance of Resturant class
var RioGrande = new Restaurant('Rio Grande', 'Great Mexican Food!', menuMex);

// var output = RioGrande.toStrings();
// console.log(output);

// / *******************************CUSTOMER*********************************************************************************************************
// var Customer = function (dietaryPreference) {
//     this.dietaryPreference = dietaryPreference;
// }
// Customer.prototype.toStrings = function () {
//     return '\nDietary Preference : ' + this.dietaryPreference +
//             '\n***********************';
// }
// *****************************************************************************************************************************************

//total number to display on page
var totalDisplay = $('<p class="order-total-text"></p>');
$('.order-total-border').append(totalDisplay);

//three menu item price/purchase buttons... only price is OO
var m1Button = $('<button class="menu-button"></button>');
$('#m1').append(m1Button);
m1Button.text('$' + burritoPlate.price);

var m2Button = $('<button class="menu-button"></button>');
$('#m2').append(m2Button);
m2Button.text('$' + guacPlate.price);

var m3Button = $('<button class="menu-button"></button>');
$('#m3').append(m3Button);
m3Button.text('$' + margarita.price);


// ***************VVVV*** JQUERY EVENT LISTENERS and HANDLERS ***VVVV***********

// When a menu item button is clicked:
// 	-instantiate a new Order object with selected plate as argument
// 	-set editOrder to true
// 	-increment orderTotal by this.price

$('.menu-button').on('click', function(){
	if(!editOrder){
		editOrder = true;
        currentOrder = new Order();
	}    
})

$('.place-order-button').on('click',function(){
    editOrder = false;
    orderTotal = 0;
    totalDisplay.text(orderTotal);
})

// three click handlers for each menu button.  update orderTotal and totalDisplay.
$('#m1').children('button').on('click',function(){
    orderTotal += burritoPlate.price;
    totalDisplay.text(orderTotal);
})

$('#m2').children('button').on('click',function(){
    orderTotal += guacPlate.price;
    totalDisplay.text(orderTotal);
})

$('#m3').children('button').on('click',function(){
    orderTotal += margarita.price;
    totalDisplay.text(orderTotal);
})

$('.vegan-button').on('click', function(){
    if (burritoPlate.isVegan() === true){
        $('#m1').css('background-color','yellow');
    }

    else if (guacPlate.isVegan() === true){
        $('#m2').css('background-color','yellow');
    }

    else if (margarita.isVegan() === true){
        $('#m3').css('background-color','yellow');
    }
});

$('.gluten-button').on('click', function(){
    if (burritoPlate.isGlutenFree() === true){
        $('#m1').css('background-color','yellow');
    }

    else if (guacPlate.isGlutenFree() === true){
        $('#m2').css('background-color','yellow');
    }

    else if (margarita.isGlutenFree() === true){
        $('#m3').css('background-color','yellow');
    }
});

$('.citrus-button').on('click', function(){
    if (burritoPlate.isCitrusFree() === true){
        $('#m1').css('background-color','yellow');
    }

    else if (guacPlate.isCitrusFree() === true){
        $('#m2').css('background-color','yellow');
    }

    else if (margarita.isCitrusFree() === true){
        $('#m3').css('background-color','yellow');
    }
});

$('.dietary-border').on('mouseout', function(){
    $('#m1').css('background-color','green');
    $('#m2').css('background-color','green');
    $('#m3').css('background-color','green');
});


$('gluten.-button').on('click', function(){
    if (burritoPlate.isGlutenFree() === true){
        $('#m1').css('background-color','yellow');
    }

    else if (guacPlate.isGlutenFree() === true){
        $('#m2').css('background-color','yellow');
    }

    else if (margarita.isGlutenFree() === true){
        $('#m3').css('background-color','yellow');
    }
    console.log("vegan button clicked");
});

});