$(document).ready(function(){
  // new category variables
  let categoryId;
  let categorySelect = $("#category");
  let selectedOption;
  let card123123 = $("#cards")

  // on submit for category form, run newCategorySUbmit
  // $(document).on("submit", "#category-form", newCategorySubmit);
  
  getCategories();
  // getCards();

  // createCard();

  // calling categories for dropdowns
  function getCategories(){
      $.get("/api/categories", renderCategories)
  }

  //talks to db
  function renderCategories(data){
      // what does this do?
      if(!data.length){
          window.location.href = "/create"
      }

      // otherwise, create an empty array and then push the categories to it
      // then, empty the category select element
      // then, append the rows to add
      // then, set the value of those options to the categoryId

      let rowsToAdd = [];
      for(let i = 0; i < data.length; i++){
          rowsToAdd.push(createCategoryRow(data[i]));
      }
      categorySelect.empty();
      categorySelect.append(rowsToAdd);
      categorySelect.val(categoryId);
  }

  //creates category rows
  function createCategoryRow(category){
    // create an option
    // target the value, set that to the id of the category
    // set the text to the name of the category
    // return the option

    let options = $("<option>");
    options.attr("value", category.id);
    options.text(category.name);
    return options;
  }

  // runs getCards api call
  function getCards(category){
    $.get("/api/cards/:id", renderCards);
  }

  // get selected Category when there is a change in category
  $("select.form-control").change(function(){
    selectedOption = $(this).children("option:selected").val();
    console.log(selectedOption);
  });
  
  //talk to dB to get cards from the database with the specific category
  function renderCards(data){
    // what does this do?
    if(!data.length){
        window.location.href = "/review"
    }

    // otherwise, create an empty object and then loop through the cards, then push all of the cards from the dB to that
    // then, empty the category select element
    // then, append the cards
    // then, set the value of those options to the question, answer, and category ID
    console.log(selectedOption)
    createCard();
  }

  //creates category rows
  function createCard(){
    // create a series of nested divs
      // col div
      // card div
      // card body div
      // h5 element
      // p element
      // button element
   
    let colDiv = $("<div>");
    let cardDiv = $("<div>");
    let cardBodyDiv = $("<div>");
    let cardBodyHeading = $("<h5>");
    let cardBodyPara = $("<p>")
    let cardBodyButton = $("<button>");

    // from create
    let options = $("<option>");
    options.attr("value", category.id);
    options.text(category.name);

    // add classes, text
      //col div - add col class and sizing
      //card div - add card body class
      //h5 - add card-title class, name text from dB
      // p - add card-text, question text from db
      // button - add button type, class, data toggle, data-target, data-type, and text
    
    // append divs and elements together

    colDiv.append(cardDiv);
    cardDiv.append(cardBodyDiv);
    cardBodyDiv.append(cardBodyHeading);
    cardBodyDiv.append(cardBodyPara);
    cardBodyDiv.append(cardBodyButton);

    // append colDiv;
    card123123.append(colDiv);
  }

  //
});
