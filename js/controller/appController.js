var AppController = function (model) {
//Views
    this.sidebarView = new SidebarView($(".sidebarView"), model);
    this.welcomeView = new WelcomeView($(".welcomeView"), model);

    this.dishSearchView = new DishSearchView($(".dishSearchView"), model,);
	//this.dishItemView = new DishItemView($(".dishItemView"), model, 2); ska inte kallas på
	this.dishDetailView = new DishDetailView($(".dishDetailView"), model);
	this.dinnerOverView = new DinnerOverView($(".dinnerOverView"), model);
    this.dinnerPrintoutView = new DinnerPrintoutView($(".dinnerPrintoutView"), model);
    

//Controller
    var sidebarController = new SideBarController(this.sidebarView, model, this);
    var welcomeController = new WelcomeController(this.welcomeView, model, this);
    var dishSearchController = new DishSearchController(this.dishSearchView, model, this);
    var dishDetailController = new DishDetailController(this.dishDetailView, model, this);
    var dinnerOverViewController = new DinnerOverViewController(this.dinnerOverView, model, this);
    var dinnerPrintoutController = new DinnerPrintoutController(this.dinnerPrintoutView, model, this);

    

    //Kalla bara .hide() på allt förutom Welcomeview i början! 
    this.dinnerPrintoutView.hideView();
    this.sidebarView.hideView();
    this.dishSearchView.hideView();
    this.dishDetailView.hideView();
    this.dinnerOverView.hideView();
    this.dinnerPrintoutView.hideView();

   
    this.stateController = function(current, next){    
        current.hideView();
        next.showView();                     
    }
}