var DishSearchController = function(view, model, app) {

    view.searchButton.on('click', function () {
        view.loadingShow();

        view.list.empty();
        var type = document.getElementById('type').value;
        var searchTerm = document.getElementById('searchTerm').value;

        var dishes = model.getAllDishes2(type, searchTerm.toLowerCase());
        
        model.getAllDishes2(type, searchTerm).then(dishes => {
            
            dishes.forEach(function (dish) {
                new DishItemView(view, $(".search"), dish, model, app);
            
            })
            view.loadingHide();
        }).catch(error => {
           console.log('ERROR');
        });

    });
};