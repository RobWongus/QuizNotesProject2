$(document).ready(function () {
    // new category variables
    let categoryId;
    let categorySelect = $("#category")
    let categoryNew = $("#newCategory")

    $(document).on("submit", "#category-form", newCategorySubmit);

    getCategories();
    // calling categories for dropdowns
    function getCategories() {
        $.get("/api/categories", renderCategories)

    };

    //talks to db
    function renderCategories(data) {
        if (!data.length) {
            window.location.href = "/create"
        }
        let rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
            rowsToAdd.push(createCategoryRow(data[i]));
        }
        categorySelect.empty();
        // console.log(rowsToAdd);
        // console.log(categorySelect);
        categorySelect.append(rowsToAdd);
        categorySelect.val(categoryId);

    }

    function createCategoryRow(category) {
        let options = $("<option>");
        options.attr("value", category.id);
        options.text(category.name);
        return options;
    }

    function newCategorySubmit(event) {
        event.preventDefault();
        if (!categoryNew) {
            return
        }

        updateCategory({
            name: categoryNew
                .val()
                .trim()
        });
    }
    function updateCategory(categoryData) {
        console.log(categoryData);
        $.post("/api/categories", categoryData, function(){
            window.location.href = "/card"
        })
    };
})
