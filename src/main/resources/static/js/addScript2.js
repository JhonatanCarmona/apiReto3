function addAlpha() {
    // Capture the values from the html document
    var data = {

        name: $("#alphaName").val(),
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
            $("#alphaName").val("");
        },

        error: function (xhr, status) {
            console.log(status);
        }

    });

    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',  // dataType is for receive

        success:
            function (answer) {

                console.log(answer);
                let $select = $("#aAlpha");
                $select.empty();
                $.each(answer, function (index, value) {
                    optText = value.name;
                    optValue = value.id;
                    $select.append($('<option>').val(optValue).text(optText));
                })
            }
        ,

        error: function (xhr, status) {
            console.log(status);
        }
    });


}