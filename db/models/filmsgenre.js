'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmsGenre = sequelize.define('FilmsGenre', {
  }, {});
  FilmsGenre.associate = function(models) {
    // associations can be defined here
  };
  return FilmsGenre;
};