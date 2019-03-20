var DishDetailController = function(view, model, app){


    view.addBtn.on('click', function (){

        model.getDish2(model.getID()).then(x =>{

            model.addToMenu2(x);

        });

    });

    view.removeBtn.on('click', function (){

       // var dishID = view.thisDish;

        model.removeDish2(model.getID());

    });

    view.backBtn.on('click', function () {
    
        app.stateController(view,app.dishSearchView);

    });
   

}