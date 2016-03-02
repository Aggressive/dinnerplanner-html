var DishViewController = function(view, model) {
	view.plusButton.on('click', function(event) {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.on('click', function(event) {
		if(model.getNumberOfGuests() > 1) {
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});
	
}