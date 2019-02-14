var WelcomeController = function(view, model, app) {

    view.welcomeBtn.on('click', function () {
        app.stateController(view,app.dishSearchView);
        app.stateController(view,app.sidebarView);
    });
  
};