'use strict';
module.exports = (sequelize, DataTypes) => {
  const Films = sequelize.define('Films', {
    directorId: DataTypes.INTEGER,
    type: DataTypes.ENUM('TV', 'film', 'season', 'episode'),
    parentId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    posterUrl: DataTypes.STRING,
    backdropUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE
  }, {});

  Films.associate = ({ Genres, Directors, FilmsImages, Actors, User, Rating }) => {
    Films.belongsToMany(Genres,{ through: 'FilmsGenre', as: 'genres', foreignKey: 'filmId' });
    Films.belongsToMany(Actors,{ through: 'FilmActor', as: 'actors', foreignKey: 'filmId' });
    Films.belongsTo(Directors, { as: 'director', foreignKey: 'directorId' });
    Films.hasMany(FilmsImages, { as: 'images', foreignKey: 'filmId' });
    Films.belongsToMany(User, { through: Rating, as: 'ratedBy', foreignKey: 'filmId' });
    Films.belongsToMany(User, { through: 'Watchlist', as: 'toWatchedBy', foreignKey: 'filmId' });
  };

  return Films;
};
