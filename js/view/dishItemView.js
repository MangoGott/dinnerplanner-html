var DishItemView = function (container, model, id) {
	
	var x = id;

	var image = model.getDish(x).image;
	var name = model.getDish(x).name;

	let item = '<div class="dish"></div>'
	container.append(item);
	item = container.find('.dish');
	item.append('<img src="images/' + image + '">');
	item.append(name);
	
}
 
