const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },

    height_min: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    
    height_max: {
      type:DataTypes.STRING,
      allowNull:true,
    },

    weight_min:{
      type:DataTypes.STRING,
      allowNull:true,
    },

    weight_max:{
      type:DataTypes.STRING,
      allowNull:true,
    },

    life_span: {
      type:DataTypes.STRING,
      allowNull:false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull:false,
    },

    createdInDb: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
    }
  })

  };
