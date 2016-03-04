// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
    // TODO in Lab 5: you need to get the dish according to the routing parameter
    // $routingParams.paramName
    // Check the app.js to figure out what is the paramName in this case

    //$scope.test = $routeParams.dishId

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.fixedNumber = function(num) {
        return Dinner.fixedNumber(num);
    }

    $scope.ingredientAmount = function(ing) {
        return Dinner.getNumberOfGuests()*ing.MetricQuantity/$scope.recipeGuests;
    }

    $scope.totalCost = function() {
        var totalCost = 0;
        if($scope.data) {
            for(ing in $scope.data.Ingredients) {
                totalCost += $scope.ingredientAmount($scope.data.Ingredients[ing]);
            }
            return Dinner.fixedNumber(totalCost);
        }
    }

    $scope.addDishToMenu = function() {
        Dinner.addDishToMenu($scope.data)
    }

    Dinner.Dish.get({id:$routeParams.dishId},function(data){
        $scope.data=data;
        $scope.name=data.Title;
        $scope.type=data.Category;
        $scope.image=data.ImageURL;
        $scope.description=data.Description;
        $scope.preparations=data.Instructions;

        $scope.ingredients=data.Ingredients;
        $scope.recipeGuests=data.YieldNumber;

        Dinner.setCurrentDish(data);

    },function(data){
        $scope.status = "There was an error";
    });
});