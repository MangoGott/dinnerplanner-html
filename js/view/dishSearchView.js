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
			<option>Main Course</option>
			<option>Side Dish</option>
			<option>Dessert</option>
			<option>Appetizer</option>
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

		container = container.find(".search"); //råkade flippa namnen, förvirrande. search/result

		printList = model.getFullMenu(); //här får du det som ska printas ut
/*
		printList.forEach( element => { 
			new DishItemView($(container), model, element);
		});

*/		
	};

	updates();

	this.searchButton = results.find("#searchButton");
	this.list = container.find(".search");

	//bara trycka på submit reloadar sidan; bara trycka enter, remove the form, we dont submit anything.  
	
	var loading = container.find(".loading");
	


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

//	model.addObserver(this.update);
	this.showView = function () {
        container1.show();
    }
    this.hideView = function () {
        container1.hide();
    }	
		
}
 
