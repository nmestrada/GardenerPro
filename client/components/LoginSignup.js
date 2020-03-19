import React, {useState} from 'react'

const LoginForm = () => {
    const [type, setType] = useState('SignUp')
    //type will determine whether this a signup or login form
    return (
        <div>
            {type === 'Sign Up'?
            <p>Sign Up!</p>:
            <p>Login In!</p>
            }
            <form onSubmit={()=>{}}>
                <label htmlFor="email">
                    Email:
                </label>
                <input name="email" type="text" />
                <label htmlFor="password">
                    Password:
                </label>
                <input name="password" type="text" />
                <button type="submit">{type}</button>
            </form>

        </div>
    )
}

//use Proptypes? is a form of type checking for JS

export default LoginForm