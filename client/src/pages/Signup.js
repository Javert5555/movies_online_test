import React, { useState } from 'react'
import { create } from '../api/api-user'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        open: false,
        error: '',
        redirectToReferrer: false
    })

    const handleChange = name => ({ target }) => { // name in this function - is the name of the input field
        setValues({...values, [name]: target.value })
    }

    const clickSubmit = async (e) => {
        e.preventDefault()
        const user = {
            username: values.username || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
        }
        const response = await create(user)
        console.log(response)
        if (response.message) {
            alert(response.message)
            return
        }
        sessionStorage.setItem('jwt', response.token)
        navigate('/movies')
    }

    return (
        <form>
            <label>
                <p>Имя пользователя</p>
                <input
                    type='text'
                    value={values.username}
                    onChange={handleChange('username')}
                />
            </label>
            <label>
                <p>Email</p>
                <input
                    type='text'
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </label>
            <label>
                <p>Password</p>
                <input
                    type='text'
                    value={values.password}
                    onChange={handleChange('password')}
                />
            </label>
            <input
            style={{display: "block", marginTop: "1rem"}}
                type='submit'
                value='Регистрация'
                onClick={(e) => clickSubmit(e)}
            />
        </form>
    )
}

export default Signup