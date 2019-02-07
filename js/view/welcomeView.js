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
var WelcomeView = function (container, model) {
	
	var welcomeText = "<h3 class='welcomeText'> Eat some food, drink some drink, eat some food, drink some drink, kick back yeaaa man ;) </h3>"
	var welcomeButton = '<button id="create" class="btn"><span>Create new dinner</span></button>'

	container.append(welcomeText);
	container.append(welcomeButton);

}
 
