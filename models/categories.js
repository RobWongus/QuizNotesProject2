module.exports = function (sequelize, DataTypes){
  let Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
  },{
    timestamps: false
  })

  Categories.associate = function(models){
    Categories.hasMany(models.Cards, {
      onDelete: "cascade"
    });
  }

  return Categories
}
