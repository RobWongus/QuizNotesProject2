$(document).ready(function(){
    let categoryId;
    let categorySelect = $("#category")
    let categoryNew = $("#newCategory")

    // if(url.indexOf("?card_id=")!==1){
    //     cardId = url.split("=")[1];
    //     getPostData(cardId, "card");
    // }
    // else if(url.indexOf("?category_id=")!== -1){
    //     categoryId = url.split("=")[1];
    // }

    $(document).on("submit", "#category-form", newCategorySubmit);

    getCategories();

    function getCategories(){
        $.get("/api/categories", renderCategories)

    }


    function renderCategories(data){
        if(!data.length){
            window.location.href = "/create"
        }
        let rowsToAdd = [];
        for(let i = 0; i < data.length; i++){
            rowsToAdd.push(createCategoryRow(data[i]));
        }
        categorySelect.empty();
        console.log(rowsToAdd);
        console.log(categorySelect);
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

        upsertCategory({
            name: categoryNew
            .val()
            .trim()
        });
    }

    function upsertCategory(categoryData){
        $.post("/api/categories", categoryData)
        .then(getCategories);
    };


});

