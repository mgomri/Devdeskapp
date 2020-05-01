import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import Menu from './reusable/Menu';


const SignupForm = () => {
    
    const initialState = {
        username: '',
        email: '',
        password: '',
        account_type: ''
    }
    
    const [formState, setFormState] = useState(initialState);
    const history = useHistory();
    const onChangeHandler = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    
    const signup = e => {
        e.preventDefault();
        axios.post('https://bw-node.herokuapp.com/auth/register', formState)
        .then(res =>{
            console.log(res);
            history.push('./login')
        })
        .catch(err => console.log(err));
        setFormState(initialState);
        
    };
    
       return ( 
<div className="blurred-bg-container">
<Menu />
    <div className="content">
     <div className="text">
        <div className='signup-form'>
        
        <form className='form' onSubmit={signup}>
                <label htmlFor='username'>
                        Username
                    <div className="field">
                        <p className="control has-icons-left">
                        <input
                            className='input is-large'
                            type='text'
                            name='username'
                            onChange={onChangeHandler}
                            value={formState.usename}
                        />
                        <span className="icon is-small is-left">
                        <i className="fas fa-user"/>
                        </span>
                        </p>
                    </div>
                </label>

                
                <label htmlFor='email'>
                        Email
                    <div className="field">
                        <p className="control has-icons-left">
                        <input
                        className='input is-large'
                        type='text'
                        name='email'
                        onChange={onChangeHandler}
                        value={formState.email}
                    />
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"/>
                        </span>
                        </p>
                    </div>
                </label>

               

                <label htmlFor='password'>
                    Password
                
                    <div className="field">
                        <p className="control has-icons-left">
                        <input
                            className='input is-large'
                            type='password'
                            name='password'
                            onChange={onChangeHandler}
                            value={formState.password}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"/>
                        </span>
                        </p>
                    </div>
                </label>

                
                <label htmlFor='account_type'>
                        Account Type
                        <div />
                    <div className='select'>
                <select onChange={onChangeHandler} name='account_type'>
                    <option value=''>Selct acount type</option>
                    <option value='admin'>admin</option>
                    <option value='user'>User</option>
                </select>
                </div>
                </label>
                
                <div className='spacer-sm'/>
                <button 
                    type='submit' 
                    className='button is-dark is-large'
                >
                    Signup
                </button>
            </form>
            </div>
            </div>
        <div className="blur"></div>
    </div>
</div>
            
            )
    

}

export default SignupForm;