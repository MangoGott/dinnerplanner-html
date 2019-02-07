var DishItemView = function (container, model, id) {
	
	var x = id;

	var name = model.getDish(x).name;
	var image = model.getDish(x).image;
	var totalPrice = model.getTotalDishPrice(x);
	

	let item = '<div class="dish col"></div>'
	container.append(item);
	item = container.find('.dish').last();  //dummaste lösningen? 
	item.append('<img src="images/' + image + '">');
	item.append(name);
	item.append(`<p class="black">${totalPrice} SEK </p>`);


	
}
 
