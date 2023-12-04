const list = async () => {
    try {
        let response = await fetch('http://localhost:5000/api/movie/list', {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (id, token) => {
    try {
        let response = await fetch(`http://localhost:5000/api/movie/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (id, token, movie) => {
    try {
        let response = await fetch(`http://localhost:5000/api/movie/update/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: movie
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const create = async (token, movie) => {
    try {
        let response = await fetch('http://localhost:5000/api/movie/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(movie)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list, remove, create }