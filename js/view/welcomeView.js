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
	
	var welcomeText = "<p class='welcomeText'> Obama är utbildad jurist och avlade 1991 juristexamen vid Harvard Law School. Under studietiden var han även ordförande för Harvard Law Review. Han har även en kandidatexamen (B.A.) i statsvetenskap från Columbia University 1983. Före presidentskapet arbetade han som universitetslärare i statsrätt vid University of Chicago Law School åren 1992–2004. Han praktiserade även som medborgarrättsadvokat samt satt tre mandatperioder i delstatssenaten i Illinois åren 1997–2004. I november 2004 blev han invald i USA:s senat och var federal senator för Illinois åren 2005–2008. </p>"
	var welcomeButton = '<button id="create" class="btn"><span>Create new dinner</span></button>'

	container.append(welcomeText);
	container.append(welcomeButton);
}
 
