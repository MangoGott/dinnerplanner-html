/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var ExampleView = function (container, model) {
	
	var numberOfGuests = container.find("#numberOfGuests");
	var guests = model.getNumberOfGuests();
	
	var dish = model.getDish(1);
	var image = dish.image;

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

	//numberOfGuests.html(dish.description);
	numberOfGuests.html('<img src="images/' + image + '">');
}
 
