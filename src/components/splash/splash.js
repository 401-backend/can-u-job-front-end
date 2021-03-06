import React from 'react';
import Login from '../login/login';
import './splash.scss';
import auction from './assets/001-auction.png';
import bid from './assets/002-bid.png';
import spyglass from './assets/004-spyglass.png';

/**
 * Component that renders a splash page that holds a login form and is shown if a users lands on the page without being logged in
 * @param {*} props 
 */
const Splash = props => {

  return (
    <div className="splashDiv">
      <h1>Welcome to Can-U</h1>
      <p id="p">Do you need help moving? mowing your lawn? setting up ikea furniture? There are not a lot of options to find handy help. Search for handy people across the nation!</p>
      <ul>
        <li><img src={auction}/> Create a job, and let people bid to do that job for you!</li>
        <li><img src={bid}/>Whoever bids the lowest amount of money to do that job, wins!</li>
        <li><img src={spyglass} />Also look for jobs that you can do!</li>
      </ul>
      <Login />
    </div>
  )
}

export default Splash;