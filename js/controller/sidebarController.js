 var SideBarController = function(view, model, app) {

    view.plusButton.on('click', function () {
       model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });
  
    view.minusButton.on('click', function () { 
       model.setNumberOfGuests(model.getNumberOfGuests() - 1);
   });

   view.confirmBtn.on('click', function () {

      //app.stateController(view, app.dinnerOverView);
      //app.stateController(view, app.dinnerOverView);
      app.stateController(app.dishSearchView, app.dinnerOverView);
      app.stateController(app.dishDetailView, app.dinnerOverView);

   });

  };