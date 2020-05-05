const db = require("../models");

module.exports = function (app) {

    app.get("/api/cards", function (req, res) {
        let query = {};
        if (req.query.category_id) {
            query.CategoryId = req.query.categories_id;
        }

        db.Cards.findAll({
            where: query,
            include: [db.Categories]
        }).then(function (dbCards) {
            res.json(dbCards)
        });
    });

    app.get("/api/cards/:id", function (req, res) {
        db.Cards.findAll({
            // limit: 10,
            where: {
                // id: req.params.id
                CategoryId: req.params.id
            },
            include: [db.Categories]
        }).then(function (dbCards) {
            res.json(dbCards);
            // console.log(dbCards);
        });
    });

    app.post("/api/cards", function (req, res) {
        db.Cards.create(req.body).then(function (dbCards) {
            res.json(dbCards)
        });
    });

};