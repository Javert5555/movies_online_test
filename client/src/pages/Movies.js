import React, { Fragment, useEffect, useState } from 'react'
import { list, remove } from '../api/movies-api'

const Movies = () => {
    const [moviesList, setMoviesList] = useState([])
    const getMoviesList = async () => {
        const response = await list()
        setMoviesList(response)
        console.log(response)
    }

    const deleteMovie = async (e) => {
        const token = sessionStorage.getItem('jwt') 
        console.log(e.target.id)
        const response = await remove(e.target.id, token)
        console.log(response)
        await getMoviesList()
    }

    useEffect(() => {
        getMoviesList()
    }, [])
    return (
        <Fragment>
            <h1>Movies</h1>
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
                        <button
                            onClick={(e) => deleteMovie(e)}
                            id={`${movie.id}`}
                            style={{marginRight: '1rem', height: '2rem'}}
                        >Delete</button>
                        <button
                            id={`${movie.id}`}
                            style={{marginRight: '1rem', height: '2rem'}}
                        >Update</button>
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