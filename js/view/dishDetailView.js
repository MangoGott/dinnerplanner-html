var DishDetailView = function (container, model) {



		//knapparna funkar inte längre, och går inte att hämta Dishes med model.getDish(). !!!
		
	var updates = function () {

		container.empty();

		//vad händer när det inte finns internet. du är offline, något gick fel osv. 
		

		console.log(model.getID());

		this.id = model.getID();
	
		model.getDish2(this.id).then(x => {	
		console.log(x);	
		container.append('<h2>' + x.title + '</h2>');
		//container.append('<img src="https://spoonacular.com/recipeImages/' + x.image +'"' + '/>');
		container.append('<img src="' + x.image + '"' + '/>');
		container.append('<p>' + x.instructions + '</p>');

		x.extendedIngredients.forEach(element => {
			console.log(element.originalString);
			
		});		

	});
		
			

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
		//Töm allt först, speciellt om du använder append
		//container.empty();
	
		


				//lägg till infoDiv och lägg info i den
		//var dishInfo = container.find('.dishDetailView'); 
		

		//infoDiv.empty();

	

		//lopa och lägg in table rows eller vadfan det heter. 
		

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

		

	}


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