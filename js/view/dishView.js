var DishView = function (container,model) {

	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			ingredientsTable();
		}
		else if(obj === "addDishToMenu" || obj === "removeDishFromMenu"){
			this.chosenRecipes();
		}
	}

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

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	model.addObserver(this);
	this.numberOfGuests.html(model.getNumberOfGuests());

	container.find("#pending_dish_price").html(model.getDishPrice(1));
	container.find("#total_menu_price").html(model.getTotalMenuPrice()+model.getDishPrice(1));
	container.find("#dish_name").html(model.getDish(1).name);
	console.log(model.getDish(1).name);
	container.find("#dish_type").html(model.getDish(1).type);
	container.find("#dish_picture").html("<img src=\"images/"+model.getDish(1).image+"\">");
	container.find("#dish_prep").html(model.getDish(1).description);
	this.ingredientsTable(1);
}