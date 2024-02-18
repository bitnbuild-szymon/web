import './SignIn.scss';
import { Link, Navigate} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';


const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const {user, signIn} = useAuth();

    const handleSignIn = () => {
       signIn(email, password).then(error => setError(error.toString()));
      
    };

    if(user) return (<Navigate to="/" />);

    return (
        <div className="sign-in">
            <form action="" autoComplete="off" spellCheck="false">
                <h1>sign in</h1>
                <h2 className={error ? "error" : ""}>{error ? error : "sign in to your account."}</h2>
                <label htmlFor="login">
                    <span>email</span>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} id="login"/>
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password"/>
                </label>
                <button type="submit" onClick={(e) => {e.preventDefault();handleSignIn();}} className="sign-in-button">sign in</button>
                <span>Don't have account yet? <Link to="/auth/sign-up">sign up</Link></span>
            </form>
        </div>
    )
}

export default SignIn;