dinnerPlannerApp.controller('PrepCtrl', function ($scope,Dinner) {

    $scope.dishes = Dinner.getSelectedDish();

    $scope.ingredientsPrint = function(ing,dish) {
        //var ingArray = data.Ingredients;
        //var output = "";
        //for(ing in ingArray) {
        return Dinner.fixedNumber(Dinner.getNumberOfGuests()*ing.MetricQuantity/dish.YieldNumber)+" "+ing.MetricUnit+" "+ing.Name;
        //}
        return output;
    }
});