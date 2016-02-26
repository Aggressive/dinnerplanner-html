var SelectDishViewController = function(view, model ) {

	view.plusButton.on('click', function(event) {
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});

 	view.minusButton.on('click', function(event) {
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 		if(model.getNumberOfGuests() == 1){
 			console.log("in here");
 			view.minusButton.disabled = true;
 		}
 	});

}