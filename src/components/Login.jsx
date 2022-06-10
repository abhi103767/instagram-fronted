import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        setForm((perv) => {
            return {
                ...perv,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleLogin = async () => {
        const { data } = await axios.post('http://localhost:3412/auth/login', {
            ...form
        })
        console.log(data);

    };


    return (
        <div>
            <input type={'text'} placeholder='username' name='username'
                onChange={handleChange} />
            <input type={'password'} placeholder='password' name='password'
                onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login