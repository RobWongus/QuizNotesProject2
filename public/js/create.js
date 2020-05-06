$(document).ready(function () {
    // new category variables

    let categoryNew = $("#newCategory")

    $(document).on("submit", "#category-form", newCategorySubmit);

    function newCategorySubmit(event) {
        event.preventDefault();
        if (categoryNew.val() === "") {
            return 
        }else{

        updateCategory({
            name: categoryNew
                .val()
                .trim()
        });
    }
    }

    function updateCategory(categoryData) {
        console.log(categoryData);
        $.post("/api/categories", categoryData, function () {
            window.location.href = "/card"
        })
    };
})