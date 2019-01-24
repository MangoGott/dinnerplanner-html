var DishItemView = function (container, model, id) {
	
	var x = id;

	var image = model.getDish(x).image;
	var name = model.getDish(x).name;

	let item = '<div class="dishes"></div>'
	container.append(item);
	item = container.find('.dishes');
	item.append('<img src="images/' + image + '">');
	item.append(name);
	
}
 
