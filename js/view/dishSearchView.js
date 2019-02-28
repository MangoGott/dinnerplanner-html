var DishSearchView = function (container, model) {
	var container1 = container;
	var results = container.find(".results");
	var printList; 
	var switchVar = 1;

		//lägg till de 11(?) typerna.
	results.append(`

	<h2>Find a Dish</h2>

		<input type="text" id="searchTerm" value="">
		
		<select class="form-control" id="type">
		<option value="all">All</option>
		<option value="side dish">Side dish</option>
		<option value="main course">Main course</option>
		<option value="dessert">Dessert</option>
		<option value="appetizer">Appetizer</option>
		<option value="salad">Salad</option>
		<option value="bread">Bread</option>
		<option value="breakfast">Breakfast</option>
		<option value="soup">Soup</option>
		<option value="beverage">Beverage</option>
		<option value="sauce">Sauce</option>
		<option value="drink">Drink</option>
		</select>
		
		<input id="searchButton" class="btn" type="submit" value="Search">
	`
	);
	
	var updates = function () {
		var searchBar = `

		<div class="search">
		<div class="loading"></div>
		</div>`;

		container.append(searchBar);

		container1 = container1.find(".search"); //råkade flippa namnen, förvirrande. search/result
		
		//printList = model.getFullMenu(); //här får du det som ska printas ut


		/*
		printList.forEach( element => { 
			new DishItemView($(container), model, element);
		});

*/		
	};

	updates();

	this.searchButton = results.find("#searchButton");
	this.list = container1.find(".search");
	this.window = container1;
	//bara trycka på submit reloadar sidan; bara trycka enter, remove the form, we dont submit anything.  
	
	var loading = container1.find(".loading");

	this.loadingShow = function () {
		if (switchVar == 1){

			loading.append(`<h2 class="black"> LOADING ;) </h2>`);
			switchVar = 0;
		}
	}

	this.loadingHide = function () {
		loading.empty();
		switchVar = 1;
	}

	this.update = function (model, changeDetails) {
		updates();	
		this.printList = printList;

	}   

	//model.addObserver(this.update);

	this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }	
		
}
 
