import React, {useState} from 'react';
import "./Login.css";
// import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate();
  
    const SignIn = (e) => {
      e.preventDefault(); //Stop the refresh!
     signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
         if (userCredential)
          navigate("/")
          })
          .catch((error) => alert(error.message));
    };
  
    const register = (e) => {
      e.preventDefault(); //Stop the refresh!
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential) 
          navigate("/");
        })
        .catch((error) =>{
           const errorMessage=error.message;
        alert(errorMessage)
        
       
    });
    }
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={SignIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
  
          <p>
            By signing-in your agree to the AMAZON FAKE CLONE Conditions of use &
            Sale.please see our Privacy Notice, our Cookies Notice ande our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
  }
  
  export default Login;