const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    genre: {type: DataTypes.STRING},
    director: {type: DataTypes.STRING},
    issue_year: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.DECIMAL, defaultValue: 0}
})

module.exports = {
    User,
    Movie
}