import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/action';

/**
 * Component that renders a signin form
 * @param {*} props 
 */
const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    // eslint-disable-next-line default-case
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('signin', username, password);
    const encodedStr = btoa(`${username}:${password}`);
    console.log('encoded', encodedStr);
    props.handleSignIn(encodedStr);
  }

  const handleLoginSwitch = () => {
    props.switchLogin('signup')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <p onClick={handleLoginSwitch} style={{ cursor:"pointer" }}>Not a member?.. click to sign up</p>
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleSignIn: data => dispatch(actions.signInFetch(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);