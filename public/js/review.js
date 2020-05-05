$(document).ready(function(){
  // new category variables
  let categoryId;
  let categorySelect = $("#category");
  let selectedOption; 
  let card123123 = $("#cards")

  getCategories();
  getAllCards();
  
  // calling categories for dropdowns
  function getCategories(){
      $.get("/api/categories", renderCategories)
      // render all
      getCards();
  }

  //talks to db
  function renderCategories(data){
      // what does this do?
      if(!data.length){
          window.location.href = "/create"
      }


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
    let options = $("<option>");
    options.attr("value", category.id);
    options.text(category.name);
    return options;
  }

  // runs getCards api call
  function getAllCards(){
    $.get("/api/cards/", renderAllCards);
    console.log("getting all categories")
  }

  // get selected Category when there is a change in category

  function getCards() {
    $("select.form-control").change(function(){
      selectedOption = $(this).children("option:selected").val();
      let selectCardRoute = "/api/cards/";
      let getCardRoute = selectCardRoute + selectedOption;
      // console.log(getCardRoute);
      
      // issue is that an object is being returned, when it should be in the form of an array
      // need to turn convert returned data into an array?
      $.get(getCardRoute).then( function(result) {
        // console.log(result);
        // console.log(Object.values(result));
        renderSpecificCards(result);
      })
    })
  };
  
  
  //talk to dB to get cards from the database to get All Cards
  function renderAllCards(data){
    console.log(data);
    console.log(data.length);
    let cardsToAdd = [];
    for(let i = 0; i < data.length; i++){
        cardsToAdd.push(createCard(data[i]));
        console.log(createCard(data[i]));
        // console.log(typeof data + " " + data.length);
    }
    console.log(cardsToAdd)
    card123123.empty();
    card123123.append(cardsToAdd);
    card123123.val(cardsToAdd);
    // console.log("adding cards")
  }

  function renderSpecificCards(data){
    console.log(data);
    console.log(data.length);

    // lenght is coming back undefined
    // issue is that there is no length coming back?
    
    let cardsToAdd = [];
    for(let i = 0; i < data.length; i++){
      cardsToAdd.push(createCard(data[i]));
      console.log(createCard(data[i]));
      // console.log(card);
    }
    // array is coming back empty
    console.log(cardsToAdd)
    card123123.empty();
    card123123.append(cardsToAdd);
    card123123.val(cardsToAdd);
    // console.log("adding cards")

  }

  //creates category rows
  function createCard(data){
   
    let colDiv = $("<div>");
    let cardDiv = $("<div>");
    let cardBodyDiv = $("<div>");
    let cardBodyHeading = $("<h5>");
    let cardBodyPara = $("<p>")
    let cardBodyButton = $("<button>");


    // add classes, text
    colDiv.addClass("col-3 m-2");
    cardDiv.addClass("card");
    cardBodyDiv.addClass("card-body");
    cardBodyHeading.addClass("card-title");
    cardBodyPara.addClass("card-text");
    cardBodyButton.attr("type","button");
    cardBodyButton.attr("class","btn btn-primary");
    cardBodyButton.attr("data-toggle","modal");
    cardBodyButton.attr("data-target","#exampleModal");
    cardBodyButton.attr("data-whatever","expand1");

    // add classes and params

    //col div - add col class and sizing
    //card div - add card body class
    //h5 - add card-title class, name text from dB
    // p - add card-text, question text from db
    // button - add button type, class, data toggle, data-target, data-type, and text
    cardBodyHeading.text(data.question);
    cardBodyPara.text(data.answer);
    cardBodyButton.text("Expand");
    // add text from DB
      
      
    // append divs and elements together

    colDiv.append(cardDiv);
    cardDiv.append(cardBodyDiv);
    cardBodyDiv.append(cardBodyHeading);
    cardBodyDiv.append(cardBodyPara);
    // cardBodyDiv.append(cardBodyButton);

    // append colDiv;
    return colDiv;
  }

});
