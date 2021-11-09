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

//--------------Audience------------------------------------------------------

function addAudience() {
    // Capture the values from the html document
    var data = {

        name: $("#aName").val(),
        owner: $("#aOwner").val(),
        capacity: $("#aCapacity").val(),
        description: $("#aDescription").val(),
        category: { "id": $("#aCategory").val() }

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
            enumerateAudience("selectOn");
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

//------------------------------Client---------------------------------------//

function addClient() {
    // Capture the values from the html document
    var data = {

        email: $("#cEmail").val(),
        password: $("#cPassword").val(),
        name: $("#cName").val(),
        age: $("#cAge").val(),
    }
    console.log(data);
    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateClient("selectOn");
            //enumerateReservation();
            console.log("Categorias otra vez");
            $("#cEmail").val("");
            $("#cPassword").val("");
            $("#cName").val("");
            $("#cAge").val("");

        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}

//------------------------------Message---------------------------------------//

function addMessage() {
    // Capture the values from the html document
    var data = {

        messageText: $("#mMessageText").val(),
        client: { "idClient": $("#mClient").val() },
        audience: { "id": $("#mAudience").val() }
    }
    console.log(data);
    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateMessage();
            enumerateAudience();
            enumerateClient();
            $("#mMessageText").val("");
        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}

//------------------------------Reservations---------------------------------//

function addReservation() {

    // Current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    // Capture the values from the html document
    var data = {
        startDate: today,
        devolutionDate: $("#rDevolutionDate").val(),
        status: "created",
        client: { "idClient": $("#rClient").val() },
        audience: { "id": $("#rAudience").val() }
    }
    console.log(data);
    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Reservation/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateReservation("selectOn");
            enumerateAudience();
            enumerateClient();
        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}

//------------------------------Score----------------------------------------//

function addScore() {

    var score = $("#sScore").val();
    score = parseInt(score);
    scoreF = parseFloat(score);
    console.log(score);
    console.log(scoreF);
    if (score == NaN) {
        alert("Not valid value")
    } else {
        if (Math.abs(score - scoreF) == 0) {
            if ($("#sScore").val() >= 0 & $("#sScore").val() <= 5) {
                // Capture the values from the html document
                var data = {

                    calification: $("#sScore").val(),
                    message: $("#sMessageText").val(),
                    reservation: { "idReservation": $("#sReservation").val() }
                }
                console.log(data);
                // Convert data to JSON
                let dataRequest = JSON.stringify(data);

                // Do the Ajax request

                $.ajax({
                    url: "http://localhost:8080/api/Score/save",
                    data: dataRequest,
                    type: 'POST',
                    contentType: "application/JSON", // contentType is for send

                    success: function (answer) {
                        console.log("Added");
                        enumerateScore();
                        enumerateReservation();
                        $("#sScore").val("");
                        $("#sMessageText").val("");
                    },

                    error: function (xhr, status) {
                        console.log(status);
                        alert("Not valid value")
                    }

                });
            } else {
                alert("Not valid value")
            }
        } else {
            alert("Not valid value")
        }
    }

}

//------------------------------Admin----------------------------------------//

function addAdmin() {
    // Capture the values from the html document
    var data = {

        name: $("#adName").val(),
        email: $("#adEmail").val(),
        password: $("#adPassword").val()
    }

    // Convert data to JSON
    let dataRequest = JSON.stringify(data);

    // Do the Ajax request

    $.ajax({
        url: "http://localhost:8080/api/Admin/save",
        data: dataRequest,
        type: 'POST',
        contentType: "application/JSON", // contentType is for send

        success: function (answer) {
            console.log("Added");
            enumerateAdmin("selectOn");
            $("#adName").val("");
            $("#adEmail").val("");
            $("#adPassword").val("");

        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}