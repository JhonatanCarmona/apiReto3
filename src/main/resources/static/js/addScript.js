function addCategory() {
    // Capture the values from the html document
    var data = {
        
        name: $("#catName").val(),
        description: $("#catDescription").val()
    }

    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Category/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateCategory("selectOn");
            $("#catName").val("");
            $("#catDescription").val("");

        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}

function addAudience() {
    // Capture the values from the html document
    var data = {

        name: $("#aName").val(),
        owner: $("#aOwner").val(),
        capacity: $("#aCapacity").val(),
        description: $("#aDescription").val(),
        category: {"id": $("#aCategory").val()}

    }
    console.log(data);
    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Audience/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateCategory();
            console.log("Categorias otra vez");
            $("#aName").val("");
            $("#aOwner").val("");
            $("#aCapacity").val("");
            $("#aDescription").val("");

        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}