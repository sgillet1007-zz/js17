$(document).on('ready', function() {
// GLOBAL VARIABLES
var editOrder = false; //only true when order is being edited. PLACE ORDER button resets value to false.
var orderTotal = 0; //incremented by each ordered menu item. PLACE ORDER button resets value to 0.

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
	        var lettuce = new FoodItem('Lettuce', 30, true, false, false);
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

Drink.prototype.create = function(){
	
}

			//Instance of Margarita 
			var margarita = new Drink ('Margarita', 'Awesome', 5.00, [tequila, margarita_mix, salt]);

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
var order1 = new Order([]);
console.log(order1);

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

// ***************VVVV*** JQUERY EVENT LISTENERS and HANDLERS ***VVVV***********

// When a menu item button is clicked:
// 	-instantiate a new Order object with selected plate as argument
// 	-set editOrder to true
// 	-increment orderTotal by this.price

$('.menu-button').on('click', function(){
	if(!editOrder){
		editOrder = true;
	}

	// include three conditionals for each menu button.  update orderTotal
	orderTotal += burritoPLate.price;
	console.log(orderTotal);
	console.log(editOrder);

});

});