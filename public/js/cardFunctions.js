$(document).ready(function () {
    // new card variables
    let categorySelect = $("#category");
    let categoryId;
    let questionInput = $("#questionInput");
    let answerInput = $("#answerInput");
    let cardForm = $("#newCardForm")

    let selectedOption;
    
    $(cardForm).on("submit", submitNewCard);

    $("select.form-control").change(function () {
        selectedOption = $(this).children("option:selected").val();
        console.log(selectedOption);
        return selectedOption;
    });

    getCategories();

    // calling categories for dropdowns
    function getCategories() {
        $.get("/api/categories", renderCategories)

    };

    //talks to db
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
            window.location.href = "/card";
        })
        console.log(card);
    };

});
