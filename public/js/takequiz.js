$(document).ready(function(){
    $('.carousel').carousel()});
    
    $('#card').flip({
        trigger: 'click'
    });

    let categorySelect = $("#category");
    let categoryId;
   
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