// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {

    var currentDish;
    this.selectedDishes = [];
    this.selectedDishesID = [];

    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'3GDiJ1zp717cMrCWfX667vt6VX10Hkp8'});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'3GDiJ1zp717cMrCWfX667vt6VX10Hkp8'});

    // Get cookie-info about # of guests
    if($cookieStore.get('numberOfGuests')) {
        var numberOfGuests = $cookieStore.get('numberOfGuests');
    } else {
        var numberOfGuests = 4;
    }

    // Get cookie-info about dishes
    if($cookieStore.get('selectedDishes')) {
        var dishes = $cookieStore.get('selectedDishes')
        for(id in dishes) {
            this.Dish.get({id:dishes[id]}, (data) => {
                this.addDishToMenu(data);
            });
        }
    }

    this.fixedNumber = function(number) {
        var heltal = parseInt(number);
        if((number-heltal) == 0) {
            return heltal
        } else {
            var decimal = number.toFixed(1);
            if((number-decimal) == 0) {
                return number.toFixed(1);
            } else {
                return number.toFixed(2);
            }
        }
    }

    this.setNumberOfGuests = function(num) {
        numberOfGuests = num;
        $cookieStore.put('numberOfGuests',num);
    }

    this.getNumberOfGuests = function() {
        return numberOfGuests;
    }

    this.setCurrentDishID = function(id) {
        this.currentDishID = id;
    }

    this.getCurrentDishID = function() {
        return this.currentDishID;
    }

    this.setCurrentDish = function(data) {
        currentDish = data;
    }

    this.getCurrentDish = function() {
        return currentDish;
    }

    //Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function(type) {
        return this.selectedDishes;
    }


    //Returns all the dishes on the menu.
    this.getFullMenu = function() {
        return this.selectedDishes;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        var ingList = [];
        for(key in this.selectedDishes){
            ingList.push(this.selectedDishes[key].Ingredients);
        }
        return ingList;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        var totalPrice = 0;

        for(var i = 0; i < this.selectedDishes.length; i++) {
            var dish = this.selectedDishes[i];
            var ingList = dish.Ingredients;
            for(var j = 0; j < ingList.length; j++) {
                var ingredient = ingList[j];
                totalPrice += ingredient.MetricQuantity/dish.YieldNumber;
            }
        }
        return totalPrice*numberOfGuests;
    }

    //Return total price for one dish.
    this.getDishPrice = function(data) {
        var totalPrice = 0;
        var ingArray = data.Ingredients;

        for(object in ingArray){
            totalPrice += ingArray[object].MetricQuantity/data.YieldNumber;
        }
        return totalPrice*numberOfGuests;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(data) {
        this.selectedDishes.push(data);
        this.selectedDishesID.push(data.RecipeID);
        $cookieStore.put('selectedDishes',this.selectedDishesID);
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        var i = 0;
        for(key in this.selectedDishes){
            if(this.selectedDishes[key].RecipeID == id) {
                this.selectedDishes.splice(i,1);
                break;
            }
            i++;
        }
        var index = this.selectedDishesID.indexOf(id);
        if(index > -1) {
            this.selectedDishesID.splice(index,1);
        }
        $cookieStore.put('selectedDishes',this.selectedDishesID);
    }

    // TODO in Lab 5: Add your model code from previous labs
    // feel free to remove above example code
    // you will need to modify the model (getDish and getAllDishes) 
    // a bit to take the advantage of Angular resource service
    // check lab 5 instructions for details

    // Angular service needs to return an object that has all the
    // methods created in it. You can consider that this is instead
    // of calling var model = new DinnerModel() we did in the previous labs
    // This is because Angular takes care of creating it when needed.
    return this;

});