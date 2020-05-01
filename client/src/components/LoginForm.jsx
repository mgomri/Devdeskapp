
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Menu from './reusable/Menu';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";


const formSchema = yup.object().shape({
  username: yup.string().required("Enter your username"),
  password: yup.string().required("Enter your password"),
});

const LoginForm = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [credentials, setCredentials] = useState(initialState);
  const history = useHistory();

  const onChangeHandler = (e) => {
    e.preventDefault();
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://bw-node.herokuapp.com/auth/login", credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/dashboard");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed. Please try again.");
      });

    setCredentials(initialState);
  };


    return(
    <div className="blurred-bg-container">
            
            <Menu />
    <div className="content">
    <div className="text">
    <div className='login-form'>
        
        
            <form className='form' onSubmit={login}>

  
              <label htmlFor="username">
                Username
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="text"
                      name="username"
                      onChange={onChangeHandler}
                      value={credentials.username}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                  {errors.username}
                </div>
              </label>

              <label htmlFor="password">
                Password
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="password"
                      name="password"
                      onChange={onChangeHandler}
                      value={credentials.password}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                  {errors.password}
                </div>
              </label>

                <div className='spacer-sm'/>
                <button 
                    type='submit' 
                    className='button is-dark is-large login-btn'
                >
                    <i className="fas fa-lock-open"/>
                    Login
                </button>
                <div className='spacer-sm'/>
            <Link className='signup-link' to='/signup'>Don't have an account? Sign up here</Link>
          </form>
          </div>
        </div>

        <div className="blur" />
      </div>
    </div>
  );
};

export default LoginForm;
