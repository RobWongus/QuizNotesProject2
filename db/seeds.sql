USE  flashcard_db;

INSERT INTO cards(question, answer, category_id)
VALUES ("What is the first progame we all learn", "hello world", 1),
("two pieces of bread with filling is what?", "sandwhich", 2);

INSERT INTO categories(name)
VALUES ("Programming"), ("cooking");

SELECT  categories.name, cards.question, cards.answer
FROM cards
INNER JOIN categories
ON cards.category_id=categories.id