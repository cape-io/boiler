import React, { PropTypes } from 'react';

import FieldGroup from '../input/FieldGroup';
import Login from './Login';

// Basic suggestion button.
function JoinLogin(props) {
  const { asyncValid, user, sendToken, sendingToken, sentTokenSuccess, ...other } = props;
  let leadMsg = 'Enter your email to start the login process.';
  let headerMsg = 'Join or Login';

  let ChildEl = false;
  if (asyncValid && user) {
    headerMsg = 'Login';
    leadMsg = 'Select a login method';
    ChildEl = (
      <Login
        sendingToken={sendingToken}
        sentTokenSuccess={sentTokenSuccess}
        onClick={sendToken}
        {...user}
      />
    );
  } else {
    ChildEl = <FieldGroup {...other} />;
  }

  return (
    <div>
      <h2>{ headerMsg }</h2>
      <p>{ leadMsg }</p>
      { ChildEl }
    </div>
  );
}

JoinLogin.propTypes = {
  asyncValid: PropTypes.bool.isRequired,
};
JoinLogin.defaultProps = {
};
export default JoinLogin;
