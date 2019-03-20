var DishDetailView = function (container, model) {


	var updateDiv = '<div class="update"> </div>'
	container.append(updateDiv);
	updateDiv = container.find(".update");
	this.thisDish = model.getID();
	var currentID = 0;
	this.currentObject = null; 


	var updates = function () {

		currentID = model.getID();
		updateDiv.empty();
		//this.id = model.getID();
	
		model.getDish2(model.getID()).then(x => {	

		this.currentObject = x; 
		console.log(this.currentObject);
		
		updateDiv.empty();

		this.theDish = x;
		const dishName = x.name;
		const dishImg = x.image;
		const dishDes = x.description;

		updateDiv.append('<h2>' + x.title + '</h2>');
		//updateDiv .append('<img src="https://spoonacular.com/recipeImages/' + x.image +'"' + '/>');
		updateDiv.append('<img src="' + x.image + '"' + '/>');
		updateDiv.append('<p>' + x.instructions + '</p>');
		updateDiv.append('<div class="ingredients col-auto"> </div>')

		updateIng();

		
	}).catch(error => {
            
            console.log(error);
            
        });

	}

	var updateIng = function () {


		var ingredientsContainer = updateDiv.find('.ingredients');
		var guests = model.getNumberOfGuests();	
		
		
		
		ingredientsContainer.empty();
		ingredientsContainer.append("<h2>Ingredients for " + guests + " people</h2>");
	
		ingredientsContainer.append('<table class="bord"></table>');
		ingredientsContainer = updateDiv.find('.bord');

		if(this.currentObject != null){

			this.currentObject.extendedIngredients.forEach(element => {

				var x = `
							
							<tr>
								<td> <p>${element.amount * guests + " " + element.measures.metric.unitShort}  </p> </td>
								<td> <p class="ingList">    ${element.name}  </p> </td> 
								<td> <p>    ${1 * guests} SEK  </p> </td>
							</tr>
				`;

				ingredientsContainer.append(x);
		});	
		}


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
	
	//flytta över allt som påverkas av sidebaren,dvs ingrediensrutan till en annan update ruta. 
	//Du ska inte behöva fetcha igen, utan spara ner det eller nått. 

	this.update = function (model, changeDetails) {

		
		if(model.getID() !== currentID){
			updates();
		}
		if(changeDetails == 'nrGuest'){
				updateIng();
			
		}
			
		
	  }   
	  
	  model.addObserver(this.update);

	this.showView = function () {
			container.show();
	}
	this.hideView = function () {
			container.hide();
	}	

}