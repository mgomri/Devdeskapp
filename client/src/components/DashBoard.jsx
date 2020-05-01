import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import TicketList from './tickets/TicketList';
import { useHistory } from 'react-router-dom';
import Menu from './reusable/Menu';




const DashBoard = () => {
    
    const [tickets, setTickets] = useState([]);
    const { push } = useHistory();

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = () => {
        axiosWithAuth()
        .get('/ticket/')
        .then(res => {
           
            setTickets(res.data);
        })
        .catch(err => console.log(err));
    }

    const Creating = e => {
        e.preventDefault();
        push('/new-ticket');
        
    }
        


    return(
        <div className=' dash-board'>

            <div className='header'>
                <Menu />
                <div className='main-title'>Welcome to your dashboard </div>
                <button className='button is-dark create-ticket-btn' onClick={Creating}>Create Ticket</button>
            </div>
            
            <TicketList tickets={tickets} /> 
                      
            
              
        </div>
    )
};

export default DashBoard;