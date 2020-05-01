import React from 'react';

import { Link } from 'react-router-dom'

const TicketList = ({ tickets }) => {
    return (
         <div className='ticket-list'>
            
            
                {tickets.map(tk => 
                <Link to={`/tickets/${tk.id}`} key={tk.id} className='ticket-card'>
                    <div className='title is-6'>{tk.title}</div>
                </Link>
                )}
            
         </div> 
    );
};

export default TicketList;