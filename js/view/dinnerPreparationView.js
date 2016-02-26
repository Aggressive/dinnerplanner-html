var DinnerPreparationView = function (container,model) {
	this.update = function (obj) {
		if(obj === "addDishToMenu" || obj === "removeDishFromMenu" || obj === "setNumberOfGuests") {
			this.prepRecipes();
		}
	}

	this.prepRecipes = function() {
		var dishes = model.getSelectedDish();

		var numRecipes = dishes.length;

		var output = $('#chosen_recipes_prep');
		output.html("");
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

	//this.prepRecipes();
}