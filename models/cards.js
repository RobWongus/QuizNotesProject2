module.exports = function(sequelize, DataTypes){
    let Cards = sequelize.define("Cards", {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            } 
        },
        answer: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    },{
        timestamps: false
    }
    );

    Cards.associate = function(models){
        Cards.belongsTo(models.Categories, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Cards;
}