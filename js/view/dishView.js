var DishView = function (container,model) {

	var currentDishID = 0;

	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			this.numberOfGuests.html(model.getNumberOfGuests());
			this.ingredientsTable(model.getCurrentDishID());
			this.dishPrice.html(model.getDishPrice(model.getCurrentDishID()));
			this.totalMenuPrice.html(model.getTotalMenuPrice()+model.getDishPrice(model.getCurrentDishID()));
		}
		else if(obj === "addDishToMenu" || obj === "removeDishFromMenu"){
			this.chosenRecipes();
		} else if(obj === "setCurrentDishID") {
			this.getDish(model.getCurrentDishID());
		}
	}

	this.ingredientsTable = function(id) {
		$('#numberOfGuests2').html(model.getNumberOfGuests());
		//var numRows = model.getDish(id).ingredients.length;
		var oTable = $('#ingredients_table');
		var ingredients = model.getDishIngredients(id);
		var numRows = ingredients.length;
		var noOfGuests = model.getNumberOfGuests();
		oTable.html("");
		
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
			"<tr class='ingredients_sum'>"+
				"<td colspan=2><button class='btn submit_btn'>Confirm Dish</button></td>"+
				"<td>SEK</td>"+
				"<td>"+model.getDishPrice(id)+"</td>"+
			"</tr>");
	}

	this.getDish = function(id) {
		this.dishPrice.html(model.getDishPrice(id));
		this.totalMenuPrice.html(model.getTotalMenuPrice()+model.getDishPrice(id));

		this.dishName.html(model.getDish(id).name);
		this.dishType.html(model.getDish(id).type);
		this.dishPic.html("<img src='images/"+model.getDish(id).image+"'>");
		this.dishPrep.html(model.getDish(id).description);
		this.ingredientsTable(id);
	}

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.dishPrice = $('#pending_dish_price');
	this.totalMenuPrice = $('#total_menu_price');

	this.dishName = $('#dish_name');
	this.dishType = $('#dish_type');
	this.dishPic = $('#dish_picture');
	this.dishPrep = $('#dish_prep');

	model.addObserver(this);
	this.numberOfGuests.html(model.getNumberOfGuests());
}