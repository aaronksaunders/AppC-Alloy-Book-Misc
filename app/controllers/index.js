// Defining the Collection in the controller and not the view
Alloy.Collections.instance("cars");

// create new controller
var carsController = Alloy.createController("cars");

// add the data
Alloy.Collections.cars.reset([{
    "make" : "Honda",
    "model" : "Civic"
}, {
    "make" : "Honda",
    "model" : "Accord"
}, {
    "make" : "Ford",
    "model" : "Escape"
}, {
    "make" : "Ford",
    "model" : "Mustange"

}, {
    "make" : "Nissan",
    "model" : "Altima"
}]);

// open the view
carsController.mainWindow.open();

if (false) {
    // Encase the title attribute in square brackets
    function transformFunction(model) {
        // Need to convert the model to a JSON object
        var carObject = model.toJSON();
        return {
            "title" : carObject.model + " by " + carObject.make
        };
    }

    // Show only cars made by Honda
    function filterFunction(collection) {
        return collection.where({
            make : 'Honda'
        });
    }

    // Free model-view data binding resources when this view-controller closes
    $.mainWindow.addEventListener('close', function() {
        $.destroy();
    });

    // add the data to the collection AFTER the window is opened. The
    // generated data-binding code is listening for specific events
    // to forces a redraw... reset is one of them
    $.mainWindow.addEventListener("open", function() {
        Alloy.Collections.cars.reset([{
            "make" : "Honda",
            "model" : "Civic"
        }, {
            "make" : "Honda",
            "model" : "Accord"
        }, {
            "make" : "Ford",
            "model" : "Escape"
        }, {
            "make" : "Ford",
            "model" : "Mustange"

        }, {
            "make" : "Nissan",
            "model" : "Altima"
        }]);
    });

    $.mainWindow.open();
}
