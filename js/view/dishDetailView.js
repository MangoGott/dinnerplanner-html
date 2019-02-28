var DishDetailView = function (container, model) {


	var updateDiv = '<div class="update"> </div>'
	container.append(updateDiv);
	updateDiv = container.find(".update");

	var updates = function () {

		
		updateDiv.empty();
		this.id = model.getID();
	
		model.getDish2(this.id).then(x => {	
		
		updateDiv.empty();

		const dishName = x.name;
		const dishImg = x.image;
		const dishDes = x.description;

		console.log(x);	
		updateDiv.append('<h2>' + x.title + '</h2>');
		//updateDiv .append('<img src="https://spoonacular.com/recipeImages/' + x.image +'"' + '/>');
		updateDiv.append('<img src="' + x.image + '"' + '/>');
		updateDiv.append('<p>' + x.instructions + '</p>');


		updateDiv.append('<div class="ingredients col-auto"> </div>')
		var ingredientsContainer = updateDiv.find('.ingredients');
		var guests = model.getNumberOfGuests();	
		ingredientsContainer.append('<table class="bord"></table>');
		ingredientsContainer.empty();
		ingredientsContainer.append("<h2>Ingredients for " + guests + " people</h2>");

		x.extendedIngredients.forEach(element => {
			console.log(element.originalString);

				var x = `
							
							<tr>
								<td> <p>${element.amount * guests + " " + element.measures.metric.unitShort}  </p> </td>
								<td> <p class="ingList">    ${element.name}  </p> </td> 
								<td> <p>    ${1 * guests} SEK  </p> </td>
							</tr>
				`;

				ingredientsContainer.append(x);
		});		

		
		
	});
		
		/*	

		var dish = model.getDish(1);

		const dishName = dish.name;
		const dishImg = dish.image;
		const dishDes = dish.description;
		var IngDiv = '<div class="ingredients"></div>'
		container.append(IngDiv);
		var totalPrice = 0; 
		var ingredients = model.getDish(1).ingredients;

		var returnButton = '<button id="backToSearch" class="btn">Back to search</button>';

		var infoDiv = '<div class="info"></div>'
		container.append(infoDiv);
		infoDiv = container.find('.info');
		infoDiv.append('<h2>' + dishName + '</h2>');
		infoDiv.append('<img src="images/' + dishImg+ '">');
		
		infoDiv.append(`<p>${dishDes}</p>`);
		infoDiv.append(returnButton);

	


		var ingredientsContainer = container.find('.ingredients');

		ingredientsContainer.append('<table class="bord"></table>');
		infoDiv.append(`<button id="addMenu" class="btn">Add to menu</button>`);
		infoDiv.append(`<button id="removeMenu" class="btn">Remove from menu</button>`);

		var guests = model.getNumberOfGuests();	

		ingredientsContainer.empty();
		
		ingredientsContainer.append("<h2>Ingredients for " + guests + " people</h2>");
	
			ingredients.forEach(element => {

				var x = `
							
							<tr>
								<td> <p>${element.quantity * guests + " " + element.unit}  </p> </td>
								<td> <p class="ingList">    ${element.name}  </p> </td> 
								<td> <p>    ${element.price * guests} SEK  </p> </td>
							</tr>
				`;

				ingredientsContainer.append(x);
				
				
		});		

		*/
		

		

	}

	var infoDiv = '<div class="info"></div>';
	container.append(infoDiv);
	infoDiv = container.find('.info');
	infoDiv.append(`<button id="addMenu" class="btn">Add to menu</button>`);
	infoDiv.append(`<button id="removeMenu" class="btn">Remove from menu</button>`);
	infoDiv.append('<button id="backToSearch" class="btn">Back to search</button>');
		

	this.backBtn = container.find("#backToSearch");
	this.addBtn = container.find("#addMenu");
	this.removeBtn = container.find("#removeMenu");

	
	

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