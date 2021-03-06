import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/action';
import './signUp.scss';

/**
 * Component that renders a sign up form
 * @param {*} props 
 */
const SignUp = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleInputChange = (e) => {
    // eslint-disable-next-line default-case
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
      email: email,
    }
    props.handleSignUp(body);
  }

  const handleLoginSwitch = () => {
    props.switchLogin('signin')
  }
  return (
    <div id="signUpDiv">
      <form className="signUpForm" onSubmit={handleFormSubmit}>
        <label>
          <input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            type='email'
          />
        </label>
        <label>
          <input
            placeholder="username"
            name="username"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            type='password'
            minLength='6'
          />
        </label>
        <input id="loginButton" type="submit" value="Sign Up" />
      </form>
      <p>{props.login.signupStatus}</p>
      <p className="loginSwitch" onClick={handleLoginSwitch} style={{ cursor:"pointer" }}>Already a member?.. click to login</p>
    </div>
  )
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleSignUp: data => dispatch(actions.signUpFetch(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
