function enumerateCategory(key) {

    switch (key) {
        case 'selectOn':
            $.ajax({
                url: "http://localhost:8080/api/Category/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success: [
                    function (answer) {
                        console.log(answer);
                        enumerateAnsCategory(answer)
                    },

                    function (answer) {
                        console.log(answer);
                        let $select = $("#aCategory");
                        $select.empty();
                        $.each(answer, function (index, value) {
                            optText = value.name;
                            optValue = value.id;
                            $select.append($('<option>').val(optValue).text(optText));
                        })
                    }
                ],

                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;

        default:
            $.ajax({
                url: "http://localhost:8080/api/Category/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success:
                    function (answer) {
                        console.log(answer);
                        enumerateAnsCategory(answer)
                    },
                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;
    }
}

function enumerateAnsCategory(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Name</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Description</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Auditory</b>";



    for (let ii = 0; ii < items.length; ii++) {
        if (items[ii].audiences.length == 0) {
            row = table.insertRow(ii + 1);
            row.insertCell(0).innerHTML = items[ii].name;
            row.insertCell(1).innerHTML = items[ii].description;
            row.insertCell(2).innerHTML = items[ii].audiences;



        } else {
            var aTable = document.createElement("TABLE");
            aTable.style.borderStyle = "none";
            for (let jj = 0; jj < items[ii].audiences.length; jj++) {


                row = aTable.insertRow(jj);
                row.insertCell(0).innerHTML = items[ii].audiences[jj].name;

            }


            row = table.insertRow(ii + 1);
            row.insertCell(0).innerHTML = items[ii].name;
            row.insertCell(1).innerHTML = items[ii].description;
            row.insertCell(2).appendChild(aTable);

        }

    }



    $("#catList").html(table)

}
//--------------Audience-----------------------------------------------------//
function enumerateAudience(key) {

    switch (key) {
        case 'selectOn':
            $.ajax({
                url: "http://localhost:8080/api/Audience/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success: [
                    function (answer) {
                        console.log(answer);
                        enumerateAnsAudience(answer)
                    },

                    function (answer) {
                        console.log(answer);
                        let $select = $("#mAudience");
                        let $select2 = $("#rAudience");
                        $select.empty();
                        $select2.empty();
                        $.each(answer, function (index, value) {
                            optText = value.name;
                            optValue = value.id;
                            $select.append($('<option>').val(optValue).text(optText));
                            $select2.append($('<option>').val(optValue).text(optText));
                        })
                    }
                ],

                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;

        default:
            $.ajax({
                url: "http://localhost:8080/api/Audience/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success:
                    function (answer) {
                        console.log(answer);
                        enumerateAnsAudience(answer)
                    },
                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;
    }


}

function enumerateAnsAudience(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Name</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Capacity</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Owner</b>";

    cell = row.insertCell(3);
    cell.innerHTML = "<b>Description</b>";

    cell = row.insertCell(4);
    cell.innerHTML = "<b>Category</b>";

    cell = row.insertCell(5);
    cell.innerHTML = "<b>Messages</b>";


    cell = row.insertCell(6);
    cell.innerHTML = "<b>Reservations</b>";



    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].name;
        row.insertCell(1).innerHTML = items[ii].capacity;
        row.insertCell(2).innerHTML = items[ii].owner;
        row.insertCell(3).innerHTML = items[ii].description;
        row.insertCell(4).innerHTML = items[ii].category.name;

        if (items[ii].messages.length != 0) {
            var aTable = document.createElement("TABLE");
            var aRow;
            aTable.style.borderStyle = "none";
            for (let jj = 0; jj < items[ii].messages.length; jj++) {

                aRow = aTable.insertRow(jj);
                aRow.insertCell(0).innerHTML = items[ii].messages[jj].messageText;
            }
            row.insertCell(5).appendChild(aTable);
        } else {
            row.insertCell(5).innerHTML = items[ii].messages;
        }

        if (items[ii].reservations.length != 0) {
            var aTable = document.createElement("TABLE");
            var aHeader = aTable.createTHead();

            var aRow = aHeader.insertRow(0);
            var aCell = aRow.insertCell(0);
            aCell.innerHTML = "<b>Start Date</b>";

            aCell = aRow.insertCell(1);
            aCell.innerHTML = "<b>Devolution Date</b>";

            aCell = aRow.insertCell(2);
            aCell.innerHTML = "<b>Status</b>";
            aTable.style.borderStyle = "none";
            for (let jj = 0; jj < items[ii].reservations.length; jj++) {

                aRow = aTable.insertRow(jj + 1);
                aRow.insertCell(0).innerHTML = items[ii].reservations[jj].startDate;
                aRow.insertCell(1).innerHTML = items[ii].reservations[jj].devolutionDate;
                aRow.insertCell(2).innerHTML = items[ii].reservations[jj].status;
            }
            row.insertCell(6).appendChild(aTable);
        }
    }



    $("#audiList").html(table)

}

//-------------------------Clients-------------------------------------------//

function enumerateClient(key) {

    switch (key) {
        case 'selectOn':
            $.ajax({
                url: "http://localhost:8080/api/Client/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success: [
                    function (answer) {
                        console.log(answer);
                        enumerateAnsClient(answer)
                    },

                    function (answer) {
                        console.log(answer);
                        let $select = $("#mClient");
                        let $select2 = $("#rClient");
                        $select.empty();
                        $select2.empty();
                        $.each(answer, function (index, value) {
                            optText = value.name;
                            optValue = value.idClient;
                            $select.append($('<option>').val(optValue).text(optText));
                            $select2.append($('<option>').val(optValue).text(optText));
                        })
                    }
                ],

                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;

        default:
            $.ajax({
                url: "http://localhost:8080/api/Client/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success:
                    function (answer) {
                        console.log(answer);
                        enumerateAnsClient(answer)
                    },
                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;
    }


}

function enumerateAnsClient(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Email</b>";

    // cell = row.insertCell(1);
    // cell.innerHTML = "<b>Password</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Name</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Age</b>";

    cell = row.insertCell(3);
    cell.innerHTML = "<b>Messages</b>";


    cell = row.insertCell(4);
    cell.innerHTML = "<b>Reservations</b>";



    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].email;
        // row.insertCell(1).innerHTML = items[ii].password;
        row.insertCell(1).innerHTML = items[ii].name;
        row.insertCell(2).innerHTML = items[ii].age;

        if (items[ii].messages.length != 0) {
            var aTable = document.createElement("TABLE");
            var aRow;
            aTable.style.borderStyle = "none";
            for (let jj = 0; jj < items[ii].messages.length; jj++) {

                aRow = aTable.insertRow(jj);
                aRow.insertCell(0).innerHTML = items[ii].messages[jj].messageText;
            }
            row.insertCell(3).appendChild(aTable);
        } else {
            row.insertCell(3).innerHTML = items[ii].messages;
        }

        if (items[ii].reservations.length != 0) {

            row.insertCell(4).innerHTML = items[ii].reservations.length;
        }
    }

    $("#clientList").html(table)

}

//-------------------------Message-------------------------------------------//

function enumerateMessage() {

    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: 'GET',
        dataType: 'json',  // dataType is for receive

        success:
            function (answer) {
                console.log(answer);
                enumerateAnsMessage(answer)
            },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function enumerateAnsMessage(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Message</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Auditory</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Client</b>";

    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].messageText;
        row.insertCell(1).innerHTML = items[ii].audience.name;
        row.insertCell(2).innerHTML = items[ii].client.name;

    }

    $("#messageList").html(table)

}

//-------------------------Reservation----------------------------------------//

function enumerateReservation(key) {

    switch (key) {
        case 'selectOn':
            $.ajax({
                url: "http://localhost:8080/api/Reservation/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success: [
                    function (answer) {
                        console.log(answer);
                        enumerateAnsReservation(answer)
                    },

                    function (answer) {
                        console.log(answer);
                        let $select = $("#sReservation");
                        $select.empty();
                        $.each(answer, function (index, value) {
                            optText = value.idReservation;
                            optValue = value.idReservation;
                            $select.append($('<option>').val(optValue).text(optText));
                        })
                    }
                ],

                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;

        default:
            $.ajax({
                url: "http://localhost:8080/api/Reservation/all",
                type: 'GET',
                dataType: 'json',  // dataType is for receive

                success:
                    function (answer) {
                        console.log(answer);
                        enumerateAnsReservation(answer)
                    },
                error: function (xhr, status) {
                    console.log(status);
                }
            });
            break;
    }

    // $.ajax({
    //     url: "http://localhost:8080/api/Reservation/all",
    //     type: 'GET',
    //     dataType: 'json',  // dataType is for receive

    //     success:
    //         function (answer) {
    //             console.log(answer);
    //             enumerateAnsReservation(answer)
    //         },
    //     error: function (xhr, status) {
    //         console.log(status);
    //     }
    // });
}

function enumerateAnsReservation(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);

    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Id</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Start Date</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Devolution Date</b>";

    cell = row.insertCell(3);
    cell.innerHTML = "<b>Status</b>";

    cell = row.insertCell(4);
    cell.innerHTML = "<b>Auditory</b>";

    cell = row.insertCell(5);
    cell.innerHTML = "<b>Client</b>";

    cell = row.insertCell(6);
    cell.innerHTML = "<b>Score</b>";

    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].idReservation;
        row.insertCell(1).innerHTML = items[ii].startDate;
        row.insertCell(2).innerHTML = items[ii].devolutionDate;
        row.insertCell(3).innerHTML = items[ii].status;
        row.insertCell(4).innerHTML = items[ii].audience.name;

        if (items[ii].client.length != 0) {
            var aTable = document.createElement("TABLE");
            var aHeader = aTable.createTHead();

            var aRow = aHeader.insertRow(0);
            var aCell = aRow.insertCell(0);
            aCell.innerHTML = "<b>id</b>";

            aCell = aRow.insertCell(1);
            aCell.innerHTML = "<b>Name</b>";

            aCell = aRow.insertCell(2);
            aCell.innerHTML = "<b>Email</b>";
            aTable.style.borderStyle = "none";

            aRow = aTable.insertRow(1);
            aRow.insertCell(0).innerHTML = items[ii].client.idClient;
            aRow.insertCell(1).innerHTML = items[ii].client.name;
            aRow.insertCell(2).innerHTML = items[ii].client.email;
            row.insertCell(5).appendChild(aTable);
        }

        if (items[ii].score == null) {
            row.insertCell(6).innerHTML = items[ii].score;

        } else {
            row.insertCell(6).innerHTML = items[ii].score.calification;
        }

    }

    $("#reservationList").html(table)

}

//-------------------------Score---------------------------------------------//

function enumerateScore(key) {

    $.ajax({
        url: "http://localhost:8080/api/Score/all",
        type: 'GET',
        dataType: 'json',  // dataType is for receive

        success:
            function (answer) {
                console.log(answer);
                enumerateAnsScore(answer)
            },
        error: function (xhr, status) {
            console.log(status);
        }
    });

}


function enumerateAnsScore(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Score</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Message</b>";

    cell = row.insertCell(2);
    cell.innerHTML = "<b>Reservation</b>";

    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].calification;
        row.insertCell(1).innerHTML = items[ii].message;
        row.insertCell(2).innerHTML = items[ii].reservation.idReservation;
    }

    $("#scoreList").html(table)

}

//-------------------------Admin---------------------------------------------//

function enumerateAdmin() {
    $.ajax({
        url: "http://localhost:8080/api/Admin/all",
        type: 'GET',
        dataType: 'json',  // dataType is for receive

        success:
            function (answer) {
                console.log(answer);
                enumerateAnsAdmin(answer)
            },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function enumerateAnsAdmin(items) {

    var table = document.createElement("TABLE");
    var header = table.createTHead();

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Name</b>";

    cell = row.insertCell(1);
    cell.innerHTML = "<b>Email</b>";

    for (let ii = 0; ii < items.length; ii++) {

        row = table.insertRow(ii + 1);
        row.insertCell(0).innerHTML = items[ii].name;
        row.insertCell(1).innerHTML = items[ii].email;

    }

    $("#adminList").html(table)

}