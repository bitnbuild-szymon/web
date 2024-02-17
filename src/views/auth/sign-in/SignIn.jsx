import './SignIn.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmail } from '../../../lib/firebase/module.ts';

const handleSignIn = async (email, password) => {
    console.log(email, password);
    await signInWithEmail(email, password)
    .then((userCredentials) => {
        console.log(userCredentials);
    }).catch((err) => {
        console.error(err);
    })
}

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
        <div className="sign-in">
            <form action="" autoComplete="off" spellCheck="false">
                <h1>sign in</h1>
                <h2>sign in to your account.</h2>
                <label htmlFor="login">
                    <span>email</span>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} id="login"/>
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password"/>
                </label>
                <button type="submit" onClick={(e) => {e.preventDefault();handleSignIn(email, password);}} className="sign-in-button">sign in</button>
                <span>Don't have account yet? <Link to="/auth/sign-up">sign up</Link></span>
            </form>
        </div>
    )
}

export default SignIn;