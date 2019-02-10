var DinnerPrintoutView = function (container, model) {

	var topOverView = container.find(".topOverView");
	
	var top = `
	<h2 class="black"> My Dinner: ${model.getNumberOfGuests()} people </h2>

	<button id="create" class="btn">
	Go back and edit dinner
	</button>
	`

	topOverView.append(top);


	var displayMenu = container.find(".menuPrint");
	var menu = model.getFullMenu();	

	menu.forEach(element => {

		var name = model.getDish(element).name;
		var image = model.getDish(element).image;
		var description = model.getDish(element).description;


		displayMenu.append(`
	
			<div class="dishDescription">
			<img src="images/${image}">
			
			<h2 class="black"> ${name} </h2>

			<p class="black"> ${description} </p>
			<div>
	
	
		`);
		
	});
		
}
 
