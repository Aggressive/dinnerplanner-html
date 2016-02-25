var SelectDishView = function (container,model) {

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

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	container.find("#pending_dish_price").html("0");
	container.find("#total_menu_price").html(model.getTotalMenuPrice());
	this.availableRecipes("starter");
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);

}