

$("#add_user").submit(function(event){
    alert("Data Inserted Succesfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();//this method is going to return a serialized array of the data
    //so when we click on the submit button, we're going to get all the submited data inside the variable(unindexed_array)
    let data={}

    $.map(unindexed_array, function(n, i){
        data[n['name']]=n['value']
    })

    console.log(data);

    let request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("User Updated Succesfully!");
        window.location.href = "/";
    })

})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id");

        let request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!");
                location.reload();
            })
        }

    })
}