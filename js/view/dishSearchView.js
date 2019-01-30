var DishSearchView = function (container, model) {
	
	const searchBar = '<h2>Find a Dish</h2><form><input type="text" name="FirstName" value="Enter key words"><input type="submit" value="Search"></form><select><option value="volvo">Main Course</option><option value="saab">Side Dish</option><option value="opel">Dessert</option><option value="audi">Appetizer</option></select><div class="search"></div>'

	container.append(searchBar);
	
	var menu = model.getFullMenu();


	var i = 0;
	menu.forEach( element => { 
			var itemElement =`
			<div class=dishItemView${i}></div>
			`;
		container.append(itemElement);
		
		contain = container.find(`.dishItemView${i}`);
		
		new DishItemView($(`.dishItemView${i}`), model, element);
		i++;	
	});
		
}
 
