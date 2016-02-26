var DinnerOverView = function (container,model) {
	this.update = function (obj) {
		if(obj === "addDishToMenu" || obj === "removeDishFromMenu" || obj === "setNumberOfGuests"){
			this.chosenRecipes();
			this.prepRecipes();
		}
	}

	this.chosenRecipes = function() {
		var dishes = model.getSelectedDish();
		var numRecipes = dishes.length;
		$('#numberOfGuests3').html(model.getNumberOfGuests());

		//var output = $("#chosen_recipes");
		this.chosenRecipesTop.html("");
		for(var i=0; i<numRecipes; i++) {
			this.chosenRecipesTop.append(
				"<div class='dish_small'>"+
					"<img src='images/"+dishes[i].image+"' class='img-thumbnail center-block'>"+
					"<h1>"+dishes[i].name+"</h1>"+
					"<h4 class='text-right'>"+model.getDishPrice(dishes[i].id)+" SEK</h4>"+
				"</div>");
		}
		this.chosenRecipesTop.append(
			"<div class='total_price'>"+
				"Total:<br />"+
				"<h4>"+model.getTotalMenuPrice()+" SEK</h4>"+
			"</div>");
	}

	this.prepRecipes = function() {
		var dishes = model.getSelectedDish();
		var noOfGuests = model.getNumberOfGuests();
		var numRecipes = dishes.length;

		//var output = $('#chosen_recipes_prep');
		this.chosenRecipesPrep.html("");
		for(var i=0; i<numRecipes; i++) {
			var ingredients = model.getDishIngredients(dishes[i].id);
			var ingredientsPrint = "";
			for(var j = 0; j < ingredients.length; j++) {
				ingredientsPrint = ingredientsPrint+noOfGuests*ingredients[j].quantity+" "+ingredients[j].unit+" "+ingredients[j].name+"<br />";
			}
			this.chosenRecipesPrep.append(
				"<div class='row preparation'>"+
					"<div class='col-md-2'>"+
						"<img src='images/"+dishes[i].image+"' class='img-thumbnail center-block'>"+
					"</div>"+
					"<div class='col-md-4'>"+
						"<h3>"+dishes[i].name.toUpperCase()+"</h3>"+
						ingredientsPrint+
						//"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem molestie, egestas enim vel, aliquam nunc. Praesent eu ipsum porta, convallis mauris ac, dictum dolor. Nunc id scelerisque lacus. Vivamus sit amet sem mauris. Fusce convallis pulvinar eleifend. Curabitur venenatis mollis dignissim."+
					"</div>"+
					"<div class='col-md-6'>"+
						"<h4>PREPARATION</h4>"+
						dishes[i].description+
						"</div>"+
				"</div>");
		}
	}

	this.toggleView = function() {
		this.chosenRecipesTop.toggleClass('dontDisplay');
		this.chosenRecipesBottom.toggleClass('dontDisplay');
		this.chosenRecipesPrep.toggleClass('dontDisplay');
	}

	model.addObserver(this);

	this.chosenRecipesTop = $('#chosen_recipes');
	this.chosenRecipesBottom = $('#chosen_recipes_bottom');
	this.chosenRecipesPrep = $('#chosen_recipes_prep');


	this.backButton = $('#overview_back_btn');
	this.printButton = $('#overview_print_btn');
	//this.chosenRecipes();
}