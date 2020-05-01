import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Menu from '../reusable/Menu';
import { useHistory } from 'react-router-dom';


const NewTicket = () => {

   const { push } = useHistory();

    const initialState = {
    
        title: '',
        description: '',
        user_id:2
    }

    const [ticket, setTicket] = useState(initialState);

    const onChangeHandler = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }

    const createTicket = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/ticket/', ticket)
        .then(res => {
            push('./dashboard');
        })
        .catch(err => console.log(err));
        
        setTicket(initialState);
        
    }
   

    return (
        <div className='new-ticket'>
            <Menu />
            <div className='main-title'>New Ticket</div>
            <form className='form ' onSubmit={createTicket}>
                <label htmlFor='title'>
                    Subject
                    <input 
                        className='input'
                        type='text'
                        name='title'
                        onChange={onChangeHandler}
                        value={ticket.title}
                    />
                </label> 

                <label htmlFor='title'>
                    description  
                    <textarea
                        className='textarea'
                        type='text'
                        name='description'
                        onChange={onChangeHandler}
                        value={ticket.description}
                    />
                </label>
                    <div className='spacer-sm'/>
                    <div className='btn-div-2'>
                    <button className='button is-dark' type='submit'>Create</button>
                    {' '}
                    <button className='button is-dark' onClick={() => push('./dashboard')}>
                        Cancel
                    </button>
                    </div>
            </form>
            

   
        </div>
    );
};

export default NewTicket;