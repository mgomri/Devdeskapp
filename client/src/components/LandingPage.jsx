import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../components/reusable/Menu';

const LandingPage = () => {

    const { push } = useHistory();
    const goToLogin = e => {
        e.preventDefault();
        push('/login');
    }

    return(
        <div className='landing'>
            <Menu />
            <div className='main-title'>DevDesk</div>
            <div className='get-help'>Get help fast.</div>
            <div className='btn-div'>
                <button className='button is-rounded is-dark is-large is-inverted' onClick={goToLogin}>LOGIN</button>
                <button className='button is-rounded is-dark is-large'>LEARN MORE</button>
            </div>
            <div className='cards'>
                <div className='ticket-card-sm '>
                    <h2 className='title is-6'>Login</h2>
                    <i className="far fa-2x fa-user"></i>
                </div>
                <i className="fas fa-chevron-right fa-2x"></i>
                
                <div className='ticket-card-sm '>
                    <h2 className='title is-6'>Submit a ticket</h2>
                    <i className="fas fa-clipboard-list fa-2x"></i>
                    
                </div>
                <i className="fas fa-chevron-right fa-2x"></i>
                <div className='ticket-card-sm '>
                    <h2 className='title is-6'>Get help</h2>
                    <i className="fas fa-hands-helping fa-2x"></i>
                </div>
            </div>
            
        </div>
    )
};

export default LandingPage;
