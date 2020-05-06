$(document).ready(function () {
    // new card variables
    let categorySelect = $("#category");
    let categoryId;
    let questionInput = $("#questionInput");
    let answerInput = $("#answerInput");
    let createButton = $("#create-button")
    let demoButton = $("#demo-button")

    //event listener 
    $(createButton).on("click", submitNewCard);
    $(demoButton).on("click", randomAPICall)

    //pulls id value for category for submission to cards DB
    let selectedOption;
    $("select.form-control").change(function () {
        selectedOption = $(this).children("option:selected").val();
        console.log(selectedOption);
        return selectedOption;
    });

    // call to get categories for dropdown menu
    getCategories();

    // function for calling categories for dropdowns
    function getCategories() {
        $.get("/api/categories", renderCategories)

    };

    //renders db categories to page dropdown
    function renderCategories(data) {
        let rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
            rowsToAdd.push(createCategoryRow(data[i]));
        }
        categorySelect.empty();
        categorySelect.append(rowsToAdd);
        categorySelect.val(categoryId);

    }

    function createCategoryRow(category) {
        let options = $("<option>");
        options.attr("value", category.id);
        options.text(category.name);
        return options;
    }


    function submitNewCard(event) {
        event.preventDefault();
        if (!questionInput.val().trim() || !answerInput.val().trim() || !categorySelect.val()) {
            return;
        }
        console.log(categorySelect);
        
        let newCard = {
            question: questionInput
                .val()
                .trim(),
            answer: answerInput
                .val()
                .trim(),
            CategoryId: selectedOption
        };
        console.log(newCard);

        submitCard(newCard);
    };

    function submitCard(card) {
        $.post("/api/cards", card, function(){
            // window.location.href = "/card";
        })
        console.log(card);
    };

    function randomAPICall(){
        console.log("test");
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            method: "GET"
        }).then(function(response) {
                console.log(response);
                returnedData = response;
                let firstName = returnedData.results[0].name.first;
                let lastName = returnedData.results[0].name.last;

                let fullName = `${firstName} ${lastName}`

                let city = returnedData.results[0].location.city;
                let state = returnedData.results[0].location.state;
                let country = returnedData.results[0].location.country;
                let postcode = returnedData.results[0].location.postcode;

                let address = `${city} ${state}, ${country} ${postcode}`

                let email = returnedData.results[0].email;
                let phoneCell = returnedData.results[0].cell;
                let phoneLand = returnedData.results[0].phone;

                let contact = `Email: ${email} \n Cell: ${phoneCell} \nLand: ${phoneLand}`
    
                let personalData =  {
                    name : fullName, 
                    address: address, 
                    contactInfo:  contact }
                    console.log(personalData);
                 parseRandomApi(personalData);
                })

            }

});
