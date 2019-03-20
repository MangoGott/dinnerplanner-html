var DinnerOverView = function (container, model, app) {

	var topOverView = container.find(".topOverView");
	var displayMenu = container.find(".displayMenu");

	container.append(`
	<button id="return" class="btn">
		Go back and edit dinner
			</button>
	`);

	container.append(`<button id="print" class="btn">
	Print Full Recipe
	</button>`);
	
	var updates = function () {

		topOverView.empty();
		displayMenu.empty();
	
		var top = `
		<h2 id="guests" class="black"> My Dinner: ${model.getNumberOfGuests()} people </h2>
		`

		topOverView.append(top);


		
		var menu = model.getFullMenu2();

		displayMenu.append(`
		
		<div class="overview">

		</div>`);

		
		displayMenu = displayMenu.find('.overview').last();

		menu.forEach(element => {

			console.log(element.titel);

			new DishItemView(this, displayMenu , element , model, element, app);

		});

		
		displayMenu.append(`
		<div class="totalPrice"> 
		
		<h3> Total: ${model.getTotalMenuPrice()} SEK </h3> 

		</div>`);





		menu = model.getFullMenu2();
		console.log("menuPrint = " + menu);
		//container.append();
	}

	updates();

	this.update = function (model, changeDetails) {
		updates();
		
	  } 

	  model.addObserver(this.update);

	
	this.printBtn = container.find("#print");
	this.returnBtn = container.find("#return");

	this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }	
		
}
 
