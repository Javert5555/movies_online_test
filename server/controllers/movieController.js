const { Movie } = require('../models/models')
const ApiError = require('../error/ApiError')

class MovieController {
    async create (req, res, next) {
        try {
            const { title, genre, director, issue_year, description, rating } = req.body
            if (!(await Movie.findOne({where: {genre: genre}}))) {
                next(ApiError.badRequest('Такой жанр не найден'))
                return
            }
            const movie = await Movie.create({ title, genre, director, issue_year, description, rating })
    
            return res.json(movie)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }

    }

    async update (req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({where: {id}})
            Object.assign(movie, req.body)
            await movie.save()

            return res.json(movie)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async delete (req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({where: {id}})
            await movie.destroy()

            return res.json({message: `Запись о фильме с id = ${id} была успешо удалена`})
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async list (req, res, next) {
        try {
            let movies = await Movie.findAll()
    
            return res.json(movies)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new MovieController()