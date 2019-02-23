/*
var DishItemView = function (view, container, dish, model, app) {
	


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

*/

var DishItemView = function (view, container, dish, model, app) {

	var dishDiv = `
		<div class="dishItem"></div>
	`;
	container.append(dishDiv);

	dishDiv = container.find(".dishItem").last();
	dishDiv.append('<img src="https://spoonacular.com/recipeImages/' + dish.image +'"' + '/>');
    dishDiv.append('<a class="dishName">' + dish.title + '</a>');
	
	//dishDiv.append('<p class="itemPrice">' + model.getTotalDishPrice(dish.id) + ' SEK</p>');

    new DishItemController(view, dishDiv, app, dish.id, model);


	this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }	

}
 
