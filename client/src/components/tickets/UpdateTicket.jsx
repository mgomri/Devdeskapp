import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';


const UpdateTicket = () => {

    const initialState = {
    
        title: '',
        description: '',
        completed: false
         
    }



    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() =>{
        axiosWithAuth()
        .get(`/ticket/${id}`)
        .then(res => {
         const data=res.data[0];
               setTicket({
                   ...ticket,
                   title:data.title,
                   description:data.description,
                   completed: data.completed
               })
        })
             .catch(err => console.log(err))
    }, [id]);


    const onChangeHandler = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name] : e.target.value
        })
    }  

    const updateTicket = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/ticket/${id}`, ticket)
        .then(res => {
            
            history.push(`/tickets/${id}`)
        })
        .catch(err => console.log(err));

    }

    const toggleCompleted = e => {
        
        setTicket({
            ...ticket,
            completed: !ticket.completed
        });
        
    }



    return (
        <div className='update-form'>
            <Link to={`/tickets/${ id }`}>
            <i className="fas fa-arrow-left fa-2x;">{' '}back to ticket{' '}{ id }</i>
            </Link>
            <h2 className='main-title'>Update</h2>
                <form className='form' onSubmit={updateTicket}>
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
                
                <input
                    name='completed'
                    type='checkbox'  
                    onChange={toggleCompleted}
                /> {' '}
                <label htmlFor='completed'>Completed</label>
                <div className='spacer-sm'/>
                  <button className='button is-dark' type='submit'>Update</button>      
            </form>
            
        </div>
    );
};

export default UpdateTicket;