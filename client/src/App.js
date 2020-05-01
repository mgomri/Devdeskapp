import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import { Route } from  'react-router-dom';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import Ticket from './components/tickets/Ticket';
import UpdateTicket from './components/tickets/UpdateTicket';
import NewTicket from './components/tickets/NewTicket' ;



function App() {
  return (
    <div className="App">

      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/login' component={LoginForm}/>
      <Route path='/signup'>
          <SignupForm />
      </Route>
      <Route path='/tickets/:id' component={Ticket} />
      <Route path='/edit-tickets/:id' component={UpdateTicket} />
      <Route path='/new-ticket' component={NewTicket}/>
      <PrivateRoute path='/dashboard' component={DashBoard}/>
    </div>
  );
}

export default App;
