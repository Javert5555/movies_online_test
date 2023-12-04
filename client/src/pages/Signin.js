import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/api-user'

const Signin = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = name => ({ target }) => {
        setValues({...values, [name]: target.value })
    }

    const clickSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: values.email || undefined,
            password: values.password || undefined,
        }
        const response = await login(user)
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

export default Signin