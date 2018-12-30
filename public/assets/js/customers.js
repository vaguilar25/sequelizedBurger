// Make sure we wait to attach our handlers until the DOM is fully loaded.
//Change the state of the burger
$(function () {

    
    //Create New Customer
    $(".customer-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("Entra");
        event.preventDefault();
        console.log("Entra");
        if ($("#inputCustomer").val().trim() != "") {
            var newCustomer = {
                name: $("#inputCustomer").val().trim(),

            };

            // Send the POST request.
            $.ajax("/api/customers", {
                type: "POST",
                data: newCustomer
            }).then(
                function () {
                    console.log("test");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });

    //Delete Customer
    $(".deleteCustomer").on("click", function (event) {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/customers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("delete customer");
                // Reload the page to get the updated list
               location.reload();
            }
        );
    });

});
