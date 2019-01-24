var DishDetailView = function (container, model) {

		const id = 1
		const dish = model.getDish(id);

		const dishName = dish.name;
		const dishImg = dish.image;
		const dishDes = dish.description;

		const returnButton = '<button id="create" class="btn"><span>back to search</span></button>';

		let ppl = model.getNumberOfGuests();

		let infoDiv = '<div class="info"></div>'
		let ingredientsDiv = '<div class="ingredients"></div>'

		//lägg till infoDiv och lägg info i den
		container.append(infoDiv);
		infoDiv = container.find('.info');
		infoDiv.append('<h2>' + dishName + '</h2>');
		infoDiv.append('<img src="images/' + dishImg+ '">');
		infoDiv.append(dishDes);
		infoDiv.append(returnButton);

		//lopa och lägg in table rows eller vadfan det heter. 
		
		
}