  $(document).ready(function(){
    // new category variables
    let categoryId;
    let categorySelect = $("#category")
    let categoryNew = $("#newCategory")

    // new card variables
    let questionInput = $("#questionInput");
    let answerInput = $("#answerInput");
    let cardButton = $("#newCardButton");
    let newCard = $("#newCardForm")
    // if(url.indexOf("?card_id=")!==1){
    //     cardId = url.split("=")[1];
    //     getCardData(cardId, "card");
    // }
    // else if(url.indexOf("?category_id=")!== -1){
    //     categoryId = url.split("=")[1];
    // }

    $(document).on("submit", "#category-form", newCategorySubmit);

    // new card submit button maybe?
    $(newCard).on("submit", submitNewCard);
    
    
    getCategories();
// calling categories for dropdowns
    function getCategories(){
        $.get("/api/categories", renderCategories)

    }

//talks to db
    function renderCategories(data){
        if(!data.length){
            window.location.href = "/create"
        }
        let rowsToAdd = [];
        for(let i = 0; i < data.length; i++){
            rowsToAdd.push(createCategoryRow(data[i]));
        }
        categorySelect.empty();
        // console.log(rowsToAdd);
        // console.log(categorySelect);
        categorySelect.append(rowsToAdd);
        categorySelect.val(categoryId);
        
    }

    function createCategoryRow(category){
        let options = $("<option>");
        options.attr("value", category.id);
        options.text(category.name);
        return options;
    }

    function newCategorySubmit(event){
        event.preventDefault();
        if(!categoryNew){
            return
        }

        updateCategory({
            name: categoryNew
            .val()
            .trim()
        });
    }

    function updateCategory(categoryData){
        console.log(categoryData);
        $.post("/api/categories", categoryData)
        .then(getCategories);
    };

// creating new card
    
    function submitNewCard(){
        // event.preventDefault();
        if(!questionInput.val().trim() || !answerInput.val().trim() || categorySelect.val()){
            return;
        }

        let newCard = {
            question: questionInput
                .val()
                .trim(),
            answer: answerInput
                .val()
                .trim(),
            CategoryId: categorySelect.val()
        };
        console.log(newCard);

        submitCard(newCard);
    };

    function submitCard(card){
        console.log(card);
        $.post("/api/cards", card)
        .then(getCategories)
    };

    // $(".create-card").click(function(event){
    //     event.preventDefault();
    //     submitNewCard();
    // })

});
