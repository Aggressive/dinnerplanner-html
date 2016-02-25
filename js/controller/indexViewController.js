var IndexViewController = function(view, model ) {

	indexToSelect = function (){
		$('#indexView').toggleClass('dontDisplay');
		$('#selectDishView').toggleClass('dontDisplay');
	}
	
	view.createButton.on('click', function(event) {
		indexToSelect();
	});

}