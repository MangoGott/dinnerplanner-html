var DishItemController = function(view, div, app, dishId, model){


  
    div.click(function(){ //klickar på dishDiv tar vi upp info.
        model.setID(dishId);
        console.log("ID set to:" + model.getID());
        app.stateController(view, app.dishDetailView);
    })


}