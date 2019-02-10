 var SideBarController = function(view, model) {
   
    view.plusButton.on('click', function () {
       model.setNumberOfGuests(model.getNumberOfGuests() + 1);

      
    });
  
    view.minusButton.on('click', function () { 
       model.setNumberOfGuests(model.getNumberOfGuests() - 1);
   });
  };