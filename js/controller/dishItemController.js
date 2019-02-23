var DishItemController = function(view, div, app, dishId, model){

    //Funkar inte ännu

  
    div.click(function(){ //klickar på dishDiv tar vi upp info.
        model.setID(dishId);
        app.stateController(view, app.dishDetailView);
    })


}