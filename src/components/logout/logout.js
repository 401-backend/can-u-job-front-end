import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/action';

/**
 * Component that renders a logout button
 * @param {*} props 
 */
const LogOut = props => {
  /**
   * Log out
   * @function
   */
  const logout = () => {
    props.handleLogout();
  }

  return (
    <>
      <span onClick={logout}>Log Out</span>
    </>
  )
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleLogout: () => dispatch(actions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);