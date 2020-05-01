import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';





const Ticket = () => {


    const [ticket, setTicket] = useState({});
    const [isWarning, setIsWarning] = useState(false);
    const { id } = useParams();
    const { push } = useHistory();

    const deleteTicket = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/ticket/${id}`)
            .then(res => {
                push('/dashboard')
            })
            .catch(err => console.log(err));

    }

    const cancelDelete = e => {
        e.preventDefault();
        setIsWarning(false);
    }
        const grabTicketById = (id) => {
            axiosWithAuth()
              .get(`/ticket/${id}`)
              .then(res => {
                 
                 setTicket(res.data[0])
                 
              })
              .catch(err => console.log(err))
            
        }

        useEffect(() => {
            grabTicketById(id)
        },[ ]);

        const edit = e => {
            e.preventDefault();
            push(`/edit-tickets/${id}`)
        }

    return (
        <div className='ticket-div'>
            <Link to={`/dashboard`}>
            <i className="fas fa-arrow-left fa-2x;">{' '}back to dashboard{' '}</i>
        </Link>
        <div className='box ticket'>
        
            <div className='delete-div' onClick={() => setIsWarning(true)}>
          <i className="fas fa-trash-alt"/>
          {isWarning && (
            <div>
                <h1>Are you sure you wanna delete?</h1>
                <button onClick={deleteTicket}>yes</button>
                <button onClick={cancelDelete}>NO</button>
            </div>
          
          )}
          </div>
          <div className='title is-6'>{ticket.title}</div> 
          <div >{ticket.description}</div> 
          <div>{ticket.completed}</div>
          <div>{ticket.user_id}</div>
          <button className='button' onClick={edit}>EDIT</button>
          <button className='button'>SEND</button>
          </div>
        </div>
    );
};

export default Ticket;