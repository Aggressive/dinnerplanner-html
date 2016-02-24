//ExampleView Object constructor
<<<<<<< HEAD
var ExampleView = function (container) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var model = new DinnerModel();

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.selectedDishes;

	model.setNumberOfGuests(6);
	this.numberOfGuests.html(model.getNumberOfGuests());
	/* Testdata
	console.log(model.getSelectedDish('starter'));
	model.addDishToMenu(2);
	model.addDishToMenu(3);
	console.log(model.getFullMenu());
	console.log(model.getAllIngredients());
	console.log(model.getTotalMenuPrice());
	*/

	model.addObserver(this)

	 /*The update method has an object as the parameters. 
	 The object is the argument you optionally passed in your notifyObservers method (see step 1). 
	 Based on this your view now knows it needs to update, so in the update method you need to 
	 get the new values from the model and update the components that show the model data.
	 */
	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			this.numberOfGuests = model.getNumberOfGuests();
		}
		else if(obj === "addDishToMenu" || obj = "removeDishFromMenu"){
			this.selectedDishes = getFullMenu();
		}
=======
var ExampleView = function (container,model) {

	this.ingredientsTable = function(id) {
		container.find("#numberOfGuests2").html(model.getNumberOfGuests());
		var numRows = model.getDish(id).ingredients.length;
		var oTable = document.getElementById("ingredients_table");
		var ingredients = model.getDish(id).ingredients;
		var noOfGuests = model.getNumberOfGuests();
		
		for(var i=0; i < numRows; i++) {
			$(oTable).append(
				"<tr>"+
				"<td>"+noOfGuests*ingredients[i].quantity+" "+ingredients[i].unit+"</td>"+
				"<td>"+ingredients[i].name+"</td>"+
				"<td>SEK</td>"+
				"<td>"+noOfGuests*ingredients[i].price+"</td>"+
				"</tr>");
		}
		$(oTable).append(
			"<tr class=\"ingredients_sum\">"+
				"<td colspan=2><button class=\"btn submit_btn\">Confirm Dish</button></td>"+
				"<td>SEK</td>"+
				"<td>"+model.getDishPrice(id)+"</td>"+
			"</tr>");
	}

	this.availableRecipes = function(type) {
		var dishes = model.getAllDishes(type);
		var numRecipes = dishes.length;
		var output = document.getElementById("available_recipes");
		for(var i=0; i<numRecipes; i++) {
			$(output).append(
				"<a href=\"#\" class=\"dish_small\">"+
				"<img src=\"images/"+dishes[i].image+"\" class=\"img-thumbnail center-block\">"+
				"<h1>"+dishes[i].name+"</h1>"+
				"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem molestie, egestas enim vel, aliquam nunc.</p>"+
				"</a>");
		}
	}

	this.chosenRecipes = function() {
		var dishes = model.getSelectedDish();
		var numRecipes = dishes.length;

		var output = document.getElementById("chosen_recipes");
		for(var i=0; i<numRecipes; i++) {
			$(output).append(
				"<div class=\"dish_small\">"+
					"<img src=\"images/"+dishes[i].image+"\" class=\"img-thumbnail center-block\">"+
					"<h1>"+dishes[i].name+"</h1>"+
					"<h4 class=\"text-right\">"+model.getDishPrice(dishes[i].id)+" SEK</h4>"+
				"</div>");
		}
		$(output).append(
			"<div class=\"total_price\">"+
				"Total:<br />"+
				"<h4>"+model.getTotalMenuPrice()+" SEK</h4>"+
			"</div>");
	}

	this.prepRecipes = function() {
		var dishes = model.getSelectedDish();

		var numRecipes = dishes.length;

		var output = document.getElementById("chosen_recipes");
		for(var i=0; i<numRecipes; i++) {
			$(output).append(
				"<div class=\"row preparation\">"+
					"<div class=\"col-md-2\">"+
						"<img src=\"images/"+dishes[i].image+"\" class=\"img-thumbnail center-block\">"+
					"</div>"+
					"<div class=\"col-md-4\">"+
						"<h3>"+dishes[i].name.toUpperCase()+"</h3>"+
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem molestie, egestas enim vel, aliquam nunc. Praesent eu ipsum porta, convallis mauris ac, dictum dolor. Nunc id scelerisque lacus. Vivamus sit amet sem mauris. Fusce convallis pulvinar eleifend. Curabitur venenatis mollis dignissim."+
					"</div>"+
					"<div class=\"col-md-6\">"+
						"<h4>PREPARATION</h4>"+
						dishes[i].description+
						"</div>"+
				"</div>");
		}
	}

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	model.setNumberOfGuests(4);
	this.numberOfGuests.html(model.getNumberOfGuests());


  	if($('body').is('.select_dish')) {
  		container.find("#pending_dish_price").html("0");
		container.find("#total_menu_price").html(model.getTotalMenuPrice());
		this.availableRecipes("starter");
  	}

	if($('body').is('.dish')) {
  		container.find("#pending_dish_price").html(model.getDishPrice(1));
		container.find("#total_menu_price").html(model.getTotalMenuPrice()+model.getDishPrice(1));
		container.find("#dish_name").html(model.getDish(1).name);
		container.find("#dish_type").html(model.getDish(1).type);
		container.find("#dish_picture").html("<img src=\"images/"+model.getDish(1).image+"\">");
		container.find("#dish_prep").html(model.getDish(1).description);
		this.ingredientsTable(1);
	}

	if($('body').is('.selected_dish')) {
		model.addDishToMenu(1);
		container.find("#chosen_dish_name").html(model.getDish(1).name);
		container.find("#chosen_dish_price").html(model.getDishPrice(1));
		container.find("#pending_dish_price").html("0");
		container.find("#total_menu_price").html(model.getTotalMenuPrice());
		this.availableRecipes("starter");
	}

	if($('body').is('.dinner_overview')) {
		model.addDishToMenu(1);
		model.addDishToMenu(100);
		model.addDishToMenu(200);

		this.chosenRecipes();
	}

	if($('body').is('.dinner_preparation')) {
		model.addDishToMenu(1);
		model.addDishToMenu(100);
		model.addDishToMenu(200);

		this.prepRecipes();
>>>>>>> 698316bcdb75cca5d6d451365dfe250d597eca72
	}
	
}
 
