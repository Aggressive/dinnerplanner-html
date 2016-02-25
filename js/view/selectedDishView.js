var SelectedDishView = function (container,model) {

	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			ingredientsTable();
		}
		else if(obj === "addDishToMenu" || obj === "removeDishFromMenu"){
			this.chosenRecipes();
		}
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

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	model.addObserver(this);
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addDishToMenu(1);
	container.find("#chosen_dish_name").html(model.getDish(1).name);
	container.find("#chosen_dish_price").html(model.getDishPrice(1));
	container.find("#pending_dish_price").html("0");
	container.find("#total_menu_price").html(model.getTotalMenuPrice());
	this.availableRecipes("starter");
}