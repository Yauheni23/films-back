'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActorImage = sequelize.define('ActorImage', {
    url: DataTypes.STRING
  }, {});
  ActorImage.associate = function({ Actors }) {
  };
  return ActorImage;
};