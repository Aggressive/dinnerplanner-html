var DinnerOverViewController = function(view, model) {

	overViewToSelect = function (id){
		$('#selectDishView').toggleClass('dontDisplay');
		$('#dinnerOverView').toggleClass('dontDisplay');
	}

	view.backButton.on('click', function() {
		overViewToSelect();
	});

	view.printButton.on('click', function() {
		//overViewToPreparation();
		view.toggleView();
	})
}