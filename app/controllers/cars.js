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


$.mainWindow.top = theTop;