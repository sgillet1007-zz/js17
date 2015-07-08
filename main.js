$(document).on('ready', function() {
// PART ONE
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
        var lettuce = new FoodItem('Lettuce', 30, true, false, false);
    // Three FoodItems that go into the Guac Plate
        var tacoShell = new FoodItem('Taco Shell', 150, true, false, true);
        var groundBeef = new FoodItem('Ground Beef', 250, false, true, true);
        var guacamole = new FoodItem('Guacamole', 150, true, true, true);
    // Three FoodItems that go into the Margarita
        var tequila = new FoodItem('Tequila', 100, true, true, true);
        var margarita_mix = new FoodItem('Margarita Mix', 200, true, true, false);
        var salt = new FoodItem('Salt', 0, true, true, true);

// ***************************DRINK**************************************************************************************************************
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

Drink.prototype.create = function(){
	
}

	//Instance of Margarita 
		var margarita = new Drink ('Margarita', 'Awesome', 5.00, [tequila, margarita_mix, salt]);

// *****************************PLATE*************************************************************************************************************
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
    // Plate.prototype.isVegan = function () {
    //     return this.foodItem.vegan;
    // }
    // Plate.prototype.isGlutenFree = function () {
    //     return and(pluck(this.ingredients, 'glutenFree'));
    // }

    // Plate.prototype.isCitrusFree = function () {
    //     console.log("CITRUS? : " + this.foodItem.citrusFree);
    //     return this.foodItem.citrusFree;
    // }
Plate.prototype.create = function(){
	
}

// Instance of Burrito Plate
var burritoPlate = new Plate('Burrito Plate', 'Huge', 6.00, [tortilla, chicken, lettuce]);
// Instance of Guac Plate
var guacPlate = new Plate('Guac Plate', 'Delicious', 6.00, [tacoShell, groundBeef, guacamole]);

// *******************************ORDER**********************************************************************************************************

var Order = function (plates) {
    this.order = plates;
}
Order.prototype.toStrings = function () {
    return '\nPlates : ' + this.plates +
            '\n***********************';
}

// *******************************MENU**********************************************************************************************************
var Menu = function (plates) {
    this.plates = plates; 
}
Menu.prototype.toStrings = function () {
    
    var menuStringArray = [];
    for (var i = 0; i < this.plates.length; i++) {
            menuStringArray.push(this.plates[i].toStrings());
    };
    var menuString = menuStringArray.join( ' ');
    return menuString;
}

// Instanace of Menu class
var menuMex = new Menu([margarita, burritoPlate, guacPlate]);

// *******************************RESTAURANT**********************************************************************************************************
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

var output = RioGrande.toStrings();
console.log(output);

// / *******************************CUSTOMER*********************************************************************************************************
// var Customer = function (dietaryPreference) {
//     this.dietaryPreference = dietaryPreference;
// }
// Customer.prototype.toStrings = function () {
//     return '\nDietary Preference : ' + this.dietaryPreference +
//             '\n***********************';
// }
// *****************************************************************************************************************************************

// RioGrande.toStrings()

// ******************* JQUERY VARIABLES for DOM ELEMENTS ******************
 var outerBorder = $('<div class="outer-border"></div>');
 



});