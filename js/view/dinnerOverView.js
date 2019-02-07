var DinnerOverView = function (container, model) {

	var topOverView = container.find(".topOverView");
	
	var top = `
	<h2 class="black"> My Dinner: ${model.getNumberOfGuests()} people </h2>

	<button id="create" class="btn">
	Go back and edit dinner
	</button>
	`

	topOverView.append(top);


	var displayMenu = container.find(".displayMenu");
	var menu = model.getFullMenu();

	console.log(menu);
	displayMenu.append(`
	
	<div class="row">

	

	</div>`);

	displayMenu = displayMenu.find('.row').last();

	menu.forEach(element => {

		new DishItemView($(displayMenu), model, element);

	});

	
	displayMenu.append(`
	<div class="totalPrice"> 
	
	<h3> Total: ${model.getTotalMenuPrice()} SEK </h3> 

	</div>`);
	
	container = container.find(".printRec");
	container.append(`<button id="create" class="btn">
	Print Full Recipe
	</button>`);

		
}
 
