var DishSearchView = function (container, model) {
	
	const searchBar = `
	<h2>Find a Dish</h2>
	
	<form class="form-group">
	
		<input type="text" value="Enter search words">
		
		<select class="form-control">
			<option>Main Course</option>
			<option>Side Dish</option>
			<option>Dessert</option>
			<option>Appetizer</option>
		</select>
		
		<input class="btn" type="submit" value="Search">
	</form>
		
		
	<div class="search"></div>`;

	container.append(searchBar);


	container = container.find(".search");
	var menu = model.getFullMenu();

	menu.forEach( element => { 
		new DishItemView($(container), model, element);
		
	});
		
}
 
