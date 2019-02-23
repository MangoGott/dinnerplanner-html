var DishDetailController = function(view, model, app){


    view.addBtn.on('click', function (){
        console.log("ADD DISH");


    });

    view.removeBtn.on('click', function (){
        console.log("REMOVE DISH");
    });

    view.backBtn.on('click', function () {
    
        app.stateController(view,app.dishSearchView);

    });
   

}