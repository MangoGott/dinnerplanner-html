var DinnerOverViewController = function(view, model, app) {

  
    view.returnBtn.on('click', function () {
    
        app.stateController(view,app.dishSearchView);
        app.stateController(view,app.sidebarView);

    });

    view.printBtn.on('click', function () {
    
        app.stateController(view,app.dinnerPrintoutView );

    });

};