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
var SidebarView = function (container, model) {

    container.append('<div class="sidebarView"> <h2>My Dinner</h2> <div id="nrPeople"> <p>People</p><input type="number" name="numberPeople" value="amount"><div id="details"><p>Dish Name</p><p>Cost</p></div><div id="price"><p>SEK 0.00</p></div><div><button id="create" class="btn btn-dark"><span>Create new dinner</span></button></div></div></div>');

}
 
