var DishSearchView = function (container, model) {
	
	const searchBar = '<h2>Find a Dish</h2><form><input type="text" name="FirstName" value="Enter key words"><input type="submit" value="Search"></form><select><option value="volvo">Main Course</option><option value="saab">Side Dish</option><option value="opel">Dessert</option><option value="audi">Appetizer</option></select><div class="search"></div>'

	container.append(searchBar);
	
	var allDishes = model.getAllDishes("starter");

	allDishes.forEach( element => { 
			let itemElement = '<div class="dishItemView"></div>'
			container.append(itemElement);
			itemElement = container.children().last(); 
			new DishItemView(itemElement, model, element.id);
		  });

		  //var menu = model.getFullMenu();
		 // var ingredients = model.getAllIngredients();

		  model.removeDishFromMenu(102);
}
 
