$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);
	var sidebarView = new SidebarView($(".sidebarView"), model);
	var dishItemView = new DishItemView($(".dishItemView"), model, 2);
	var welcomeView = new WelcomeView($(".welcomeView"), model);
	var dishSearchView = new DishSearchView($(".dishSearchView"), model);
	var dishDetailView = new DishDetailView($(".dishDetailView"), model);
	var dinnerOverView = new DinnerOverView($(".dinnerOverView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($(".dinnerPrintoutView"), model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});