var IndexViewController = function(view, model ) {

	indexToSelect = function (){
		console.log("button works");
		$('#index').toggleClass('dontDisplay');
		$('#selectDish').toggleClass('dontDisplay');
	}
	
	view.createButton.on('click', function(event) {
		console.log("click works");
		indexToSelect();
	});


	/*jQuery(document).ready(function(){
        jQuery('#createButton').on('click', function(event) {        
             jQuery('#index').toggleClass('dontDisplay');
        });
    });*/


}