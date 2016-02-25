var DinnerOverView = function (container,model) {
	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			ingredientsTable();
		}
		else if(obj === "addDishToMenu" || obj === "removeDishFromMenu"){
			this.chosenRecipes();
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


	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);

	this.chosenRecipes();
}