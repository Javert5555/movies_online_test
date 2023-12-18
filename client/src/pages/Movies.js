import React, { Fragment, useEffect, useState } from 'react'
import { create, list, remove } from '../api/movies-api'
import Home from './Home'

const Movies = () => {
    const [moviesList, setMoviesList] = useState([])
    const [movieValues, setMovieValues] = useState({
        title: '',
        genre: '',
        director: '',
        issue_year: 0,
        description: '',
        rating: 0
    })
    const getMoviesList = async () => {
        const response = await list()
        setMoviesList(response)
        console.log(response)
    }

    const deleteMovie = async (e) => {
        const token = sessionStorage.getItem('jwt') 
        console.log(e.target.id)
        const response = await remove(e.target.id, token)
        alert(response.message)
        console.log(response)
        await getMoviesList()
    }

    // const updateMovie = async (e) => {
    //     const token = sessionStorage.getItem('jwt') 
    //     console.log(e.target.id)
    //     const response = await remove(e.target.id, token)
    //     console.log(response)
    //     await getMoviesList()
    // }

    // const createMovie = async (e) => {
    //     const token = sessionStorage.getItem('jwt') 
    //     console.log(e.target.id)
    //     const response = await remove(e.target.id, token)
    //     console.log(response)
    //     await getMoviesList()
    // }

    const handleChange = name => ({ target }) => {
        setMovieValues({...movieValues, [name]: target.value })
    }

    const clickSubmit = async (e) => {
        e.preventDefault()
        const movie = {
            title: movieValues.title || undefined,
            genre: movieValues.genre || undefined,
            director: movieValues.director || undefined,
            issue_year: +movieValues.issue_year || 0,
            description: movieValues.description || undefined,
            rating: +movieValues.rating || 0,
        }
        console.log(movie)
        const token = sessionStorage.getItem('jwt') 

        const response = await create(token, movie)
        console.log(response)
        if (response.message) {
            alert(response.message)
            return
        }
        await getMoviesList()
    }

    useEffect(() => {
        getMoviesList()
    }, [])
    return (
        !sessionStorage.getItem('jwt') ?
        <Home /> :
        <Fragment>
            <h1 style={{textAlign: 'center'}}>Movies</h1>
            <form style={{border: 'solid black 1px', width: '500px', textAlign: 'center', margin: '1rem auto 3rem'}}>
                <label>
                    <p>Название фильма</p>
                    <input
                        type='text'
                        value={movieValues.title}
                        onChange={handleChange('title')}
                    />
                </label>
                <label>
                    <p>Жанр</p>
                    <input
                        type='text'
                        value={movieValues.genre}
                        onChange={handleChange('genre')}
                    />
                </label>
                <label>
                    <p>Режиссер</p>
                    <input
                        type='text'
                        value={movieValues.director}
                        onChange={handleChange('director')}
                    />
                </label>
                <label>
                    <p>Год выпуска</p>
                    <input
                        type='text'
                        value={movieValues.issue_year}
                        onChange={handleChange('issue_year')}
                    />
                </label>
                <label>
                    <p>Описание</p>
                    <input
                        type='text'
                        value={movieValues.description}
                        onChange={handleChange('description')}
                    />
                </label>
                <label>
                    <p>Рейтинг</p>
                    <input
                        type='text'
                        value={movieValues.rating}
                        onChange={handleChange('rating')}
                    />
                </label>
                <div style={{textAlign: 'center'}}>
                    <input
                        style={{margin: "1rem 0 5rem"}}
                            type='submit'
                            value='Добавить'
                            onClick={(e) => clickSubmit(e)
                        }
                    />
                </div>
            </form>
            <h2>Список фильм</h2>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center'
                    }}
                >
                    <p style={{marginRight: '1rem'}}>Название</p>
                    <p style={{marginRight: '1rem'}}>Жанр</p>
                    <p style={{marginRight: '1rem'}}>Режиссёр</p>
                    <p style={{marginRight: '1rem'}}>Дата выхода</p>
                    <p style={{marginRight: '1rem'}}>Описание</p>
                    <p style={{marginRight: '1rem'}}>Рейтинг</p>
                </div>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 5
                }}
            />
            {moviesList.map((movie, i) => (
                <div
                    key={`${i}-${movie.title}`}
                >
                    <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                        }}
                    >
                        <p style={{marginRight: '1rem'}}>{movie.title}</p>
                        <p style={{marginRight: '1rem'}}>{movie.genre}</p>
                        <p style={{marginRight: '1rem'}}>{movie.director}</p>
                        <p style={{marginRight: '1rem'}}>{movie.issue_year}</p>
                        <p style={{marginRight: '1rem'}}>{movie.description}</p>
                        <p style={{marginRight: '1rem'}}>{movie.rating}</p>
                        <button
                            onClick={(e) => deleteMovie(e)}
                            id={`${movie.id}`}
                            style={{marginRight: '1rem', height: '2rem'}}
                        >Delete</button>
                        {/* <button
                            // onClick={}
                            id={`${movie.id}`}
                            style={{marginRight: '1rem', height: '2rem'}}
                        >Update</button> */}
                    </div>
                    <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 5
                        }}
                    />
                </div>
            ))}
        </Fragment>
    )
}

export default Movies