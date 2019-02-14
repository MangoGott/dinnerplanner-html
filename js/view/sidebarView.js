var SidebarView = function (container, model) {
  var newContainer = container;
  var table; 

  newContainer = container;

  newContainer.append(`
    <div class="sidebar"> 

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
              <h2>My Dinner</h2>
                  <div class="people">
                  <p id="numberGuestsCounter">People: ${model.getNumberOfGuests()} </p>
                    <div>
                    <button id="plusGuest" class="btn">
                                                          <i class="fas fa-angle-up"></i>
                                                          </button>
                    <button id="minusGuest" class="btn">
                                <i class="fas fa-angle-down"></i>
                      </button>                                    
                    </div>
                <div id="details">    
                    <table class="sidebarTable">
                    <th> <p> Dish Name </p></th>
                    <th><p>Cost</p></th>
                    </table>
                    <button id="create" class="btn">
                    <span>Confirm Dinner</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            </nav>
      </div>`);

  var updates = function () {
        
    newContainer.find("#numberGuestsCounter").empty().append(`People: ${model.getNumberOfGuests()}`);

          table  = newContainer.find('.sidebarTable');
          table.empty();
          var menu = model.getFullMenu();
          guests = model.getNumberOfGuests();

          var x = ``;

          menu.forEach(element => {

            x = `	
                      <tr>
                        <td> <p>${model.getDish(element).name}</p> </td>
                        <td> <p>${model.getTotalDishPrice(element)} SEK  </p> </td>
                      </tr>
                `;
                table.append(x);
          });

          table.append(`
                    <td class="last"> <p>Total cost </p> </td>
                    <td class="last"> <p>${model.getTotalMenuPrice()} SEK </p></td>       
                    `);
           
          };

 updates();

 this.confirmBtn = newContainer.find("#create");
 this.plusButton = newContainer.find("#plusGuest");
 this.minusButton = newContainer.find("#minusGuest");
 
 
  this.update = function (model, changeDetails) {
    updates();
  }   
  
  model.addObserver(this.update);
          
  this.showView = function () {
    container.show();
  }
  this.hideView = function () {
    container.hide();
  }

}

