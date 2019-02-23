var DinnerPrintoutController = function(view, model, app) {

  
    view.returnFromPrint.on('click', function () {
    
        app.stateController(view,app.dishSearchView);
        app.stateController(view,app.sidebarView);

    });

  

};