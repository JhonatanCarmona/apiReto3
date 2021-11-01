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

    // // Creates the variable table and its headers
    // var table = `<table border="1">
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Description</th>
    //                 <th>Auditory</th>
    //             </tr>`;
    
    // var intTable = `<table border="1">`;

    // // Fill the table with the results of the ajax GET. In this case, only
    // //  the name is required

    // for (let ii = 0; ii < items.length; ii++) {
    //     if (items[ii].audiences.length == 0) {
    //         table += `<tr>
    //                 <td>${items[ii].name}</td>
    //                 <td>${items[ii].description}</td>
    //                 <td>${items[ii].audiences}</td>
    //             </tr>`;
    //     } else {

    //         table += `<tr>
    //                 <td>${items[ii].name}</td>
    //                 <td>${items[ii].description}</td>
    //                 <td>
    //                 for (let jj = 0; jj < items[ii].audiences.length ; jj++) {
    //                     <table>
    //                         <tr>
    //                             <td>${items[ii].audiences[jj].name}</td>
    //                         </tr>
    //                     </table>
    //         }
    //                 </td>
    //             </tr>`;
    //     }
    // }

    // table += `</table>` // Close the table label

    // $("#catList").html(table)

    var table = document.createElement("TABLE");
 //   var aTable = document.createElement("TABLE");
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
            row.style.textAlign = "center";
            row.style.border = "solid";
        } else {
            var aTable = document.createElement("TABLE");
            for (let jj = 0; jj <items[ii].audiences.length; jj++) {

//                console.log(jj)
                row = aTable.insertRow(jj);
                row.insertCell(0).innerHTML = items[ii].audiences[jj].name;
            }
            row = table.insertRow(ii + 1);
            row.style.textAlign = "center";
            row.style.border = "solid";
            row.insertCell(0).innerHTML = items[ii].name;
            row.insertCell(1).innerHTML = items[ii].description;
            row.insertCell(2).appendChild(aTable);
        }

    }




    $("#catList").html(table)

}
