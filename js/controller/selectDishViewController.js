var SelectDishViewController = function(view, model) {

	selectToOverView = function (id){
		$('#selectDishView').toggleClass('dontDisplay');
		$('#dinnerOverView').toggleClass('dontDisplay');
		//model.setCurrentDishID(id);

		$('#chosen_recipes').removeClass('dontDisplay');
		$('#chosen_recipes_bottom').removeClass('dontDisplay');
		$('#chosen_recipes_prep').addClass('dontDisplay');
	}

	$('.dish_small').click(function() {
		view.viewDish(this.id);
		model.setCurrentDishID(this.id);
	});

	view.plusButton.on('click', function(event) {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.on('click', function(event) {
		if(model.getNumberOfGuests() > 1) {
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});

	view.searchForm.on('submit', function(event) {
		event.preventDefault();
		view.availableRecipes(this.elements[2].value, this.elements[0].value);
		$('.dish_small').click(function() {
			view.viewDish(this.id);
			model.setCurrentDishID(this.id);
		});
	});

	view.backButton.on('click', function(event) {
		view.toggleView();
		model.setCurrentDishID(0);
	});

	view.confirmDishButton.on('click', function(event) {
		model.addDishToMenu(model.getCurrentDishID());
		view.toggleView();
		model.setCurrentDishID(0);
		$('.delete_button').click(function() {
			console.log("id: "+this.id);
			model.removeDishFromMenu(this.id);
		});
	});

	//DELETE???
	view.ulOfDishes.on('click', function(event) {
		console.log("asd");
	});

	view.confirmDinnerButton.on('click', function(event) {
		selectToOverView();
	});
}