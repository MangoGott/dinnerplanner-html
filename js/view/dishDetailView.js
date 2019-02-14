var DishDetailView = function (container, model) {

		const id = 1;
		const dish = model.getDish(id);
		var guests = model.getNumberOfGuests();

		const dishName = dish.name;
		const dishImg = dish.image;
		const dishDes = dish.description;

		const returnButton = '<button id="create" class="btn">Back to search</button>';

		let infoDiv = '<div class="info col"></div>'

		//lägg till infoDiv och lägg info i den
		//var dishInfo = container.find('.dishDetailView'); 
		container.append(infoDiv);
		infoDiv = container.find('.info');

		infoDiv.append('<h2>' + dishName + '</h2>');
		infoDiv.append('<img src="images/' + dishImg+ '">');
		
		infoDiv.append(`<p>${dishDes}</p>`);
		infoDiv.append(returnButton);

		//lopa och lägg in table rows eller vadfan det heter. 
		var IngDiv = '<div class="ingredients col"></div>'
		container.append(IngDiv);
		var totalPrice = 0; 
		var ingredients = model.getDish(id).ingredients;


		var ingredientsContainer = container.find('.ingredients');

		//var ingTable = '';
		//ingredientsContainer.append();
		
		ingredientsContainer.append("<h2>Ingredients for " + model.getNumberOfGuests() + " people</h2>");

			

			ingredientsContainer.append('<table class="bord"></table>');
			ingredientsContainer = ingredientsContainer.find('.bord');
			
			ingredients.forEach(element => {

				//ingredientsContainer.append(`<span id="${i}"></span>`);
				//ingredientsContainer = ingredientsContainer.find(`#${i}`);

				var x = `
							
							<tr>
								<td> <p>${element.quantity * guests + " " + element.unit}  </p> </td>
								<td> <p class="ingList">    ${element.name}  </p> </td> 
								<td> <p>    ${element.price * guests} SEK  </p> </td>
							</tr>
				`;

				ingredientsContainer.append(x);
				
				
		});		

		ingredientsContainer.append(`<button id="backToSearch" class="btn">Add to menu</button>`);


	this.showView = function () {
			container.show();
	}
	this.hideView = function () {
			container.hide();
	}	

}