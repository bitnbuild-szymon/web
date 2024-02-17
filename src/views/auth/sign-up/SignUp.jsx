import './SignUp.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    
    return (
        <div className="sign-up">
            <form action="" autoComplete="off" spellCheck="false">
                <h1>sign up</h1>
                <h2>Create a new account.</h2>
                <label htmlFor="login">
                    <span>email</span>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} id="login"/>
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password"/>
                </label>
                <button type="submit" className="sign-up-button">sign up</button>
                <span>Already have accout? <Link to="/auth/sign-in">sign in</Link></span>
            </form>
        </div>
    )
}

export default SignIn;