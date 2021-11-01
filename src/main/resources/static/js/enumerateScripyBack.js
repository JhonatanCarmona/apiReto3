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

    // Creates the variable table and its headers
    var table = `<table border="1">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Auditory</th>
                </tr>`;
    
    var intTable = `<table border="1">`;

    // Fill the table with the results of the ajax GET. In this case, only
    //  the name is required

    for (let ii = 0; ii < items.length; ii++) {
        if (items[ii].audiences.length == 0) {
            table += `<tr>
                    <td>${items[ii].name}</td>
                    <td>${items[ii].description}</td>
                    <td>${items[ii].audiences}</td>
                </tr>`;
        } else {

            table += `<tr>
                    <td>${items[ii].name}</td>
                    <td>${items[ii].description}</td>
                    <td>
                    for (let jj = 0; jj < items[ii].audiences.length ; jj++) {
                        <table>
                            <tr>
                                <td>${items[ii].audiences[jj].name}</td>
                            </tr>
                        </table>
            }
                    </td>
                </tr>`;

            //     table += `<tr>
            //     <td>${items[ii].name}</td>
            //     <td>${items[ii].description}</td>
            //     <td>

            //     ${items[ii].audiences.name}</td>
            // </tr>`;



        }
        // table += `<tr>
        //             <td>${items[ii].name}</td>
        //             <td>${items[ii].description}</td>
        //             <td>${items[ii].audiences[0].name}</td>
        //         </tr>`;
    }

    table += `</table>` // Close the table label

    $("#catList").html(table)
}
