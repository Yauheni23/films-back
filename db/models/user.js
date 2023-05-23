'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
  }, {});
  User.associate = ({ Films, Rating }) => {
    User.belongsToMany(Films, { through: Rating, as: 'ratedFilms', foreignKey: 'userId' });
    User.belongsToMany(Films, { through: 'Watchlist', as: 'toWatchFilms', foreignKey: 'userId' });
  };
  return User;
};
