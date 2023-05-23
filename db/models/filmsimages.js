'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmsImages = sequelize.define('FilmsImages', {
    url: DataTypes.STRING
  }, {});
  FilmsImages.associate = ({ Films }) => {
  };
  return FilmsImages;
};