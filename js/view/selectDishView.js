var SelectDishView = function (container,model) {

	this.update = function (obj) {
		if(obj === "setNumberOfGuests"){
			this.numberOfGuests.html(model.getNumberOfGuests());
			if(model.getCurrentDishID() != 0) {
				this.ingredientsTable(model.getCurrentDishID());
				this.dishPrice.html(model.getDishPrice(model.getCurrentDishID()));
				this.totalMenuPrice.html(model.getTotalMenuPrice()+model.getDishPrice(model.getCurrentDishID()));
			} else {
				this.totalMenuPrice.html(model.getTotalMenuPrice());
			}
			this.chosenDishes();
		}
		else if(obj === "addDishToMenu" || obj === "removeDishFromMenu"){
			this.chosenDishes();
		}
	}

	this.chosenDishes = function() {
		this.ulDishes.html("");
		var selectedDishes = model.getSelectedDish();
		for(var i = 0; i < selectedDishes.length; i++) {
			this.ulDishes.append("<li>"+selectedDishes[i].name+"<span class='pull-right'>"+model.getDishPrice(selectedDishes[i].id)+"</span></li>");
		}
		if(selectedDishes.length > 0) {
			this.confirmDinnerButton.removeAttr("disabled");
			//this.confirmDinnerButton.setAttribute("disabled","");
		}
		//this.ulDishes.append("<li>Pending<span class='pull-right' id='pending_dish_price'></span></li>");
	}

	this.availableRecipes = function(type,filter) {
		if(type == "all") {
			var dishes = model.getAllDishes("",filter);
		} else {
			var dishes = model.getAllDishes(type,filter);
		}
		var numRecipes = dishes.length;
		var output = document.getElementById("available_recipes");
		$(output).html("");
		for(var i=0; i<numRecipes; i++) {
			$(output).append(
				"<a id='"+dishes[i].id+"' title='' href='#' class='dish_small'>"+
				"<img src='images/"+dishes[i].image+"' class='img-thumbnail center-block'>"+
				"<h1>"+dishes[i].name+"</h1>"+
				"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem molestie, egestas enim vel, aliquam nunc.</p>"+
				"</a>");
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
		$('#table_dish_price').html(model.getDishPrice(id));
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

	this.viewDish = function(id) {
		this.toggleView();
		this.getDish(id);
	}

	this.toggleView = function() {
		this.options.toggleClass('dontDisplay');
		this.available_recipes.toggleClass('dontDisplay');

		this.recipe_view.toggleClass('dontDisplay');
		this.recipe_preparations.toggleClass('dontDisplay');

		this.dishPrice.html("0");
		this.totalMenuPrice.html(model.getTotalMenuPrice());
	}

	this.mainframe = $('#mainframe');
	this.options = $('#options');
	this.available_recipes = $('#available_recipes');
	this.recipe_view = $('#recipe_view');
	this.recipe_preparations = $('#recipe_preparations');

	this.numberOfGuests = $("#numberOfGuests");
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");

	this.ulDishes = $('#ul_of_dishes');

	this.confirmDinnerButton = $('#confirm_dinner_btn');

	this.dishtype = $("#dishtype");
	this.searchField = $("#search");
	this.searchButton = $("#searchButton");
	this.searchForm = $("#searchForm");
	//this.dishButton = $('#dishButton');

	this.dishPrice = $('#pending_dish_price');
	this.totalMenuPrice = $('#total_menu_price');

	this.dishName = $('#dish_name');
	this.dishType = $('#dish_type');
	this.dishPic = $('#dish_picture');
	this.dishPrep = $('#dish_prep');
	this.backButton = $('#back_to_select_btn');

	this.confirmDishButton = $('#add_dish_btn');

	model.addObserver(this);
	this.numberOfGuests.html(model.getNumberOfGuests());
  	this.dishPrice.html("0");
	this.totalMenuPrice.html(model.getTotalMenuPrice());
	//this.confirmDinnerButton.removeAttr("disabled");
	this.availableRecipes("all");
}