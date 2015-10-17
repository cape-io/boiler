import React, { PropTypes } from 'react';

// import FieldGroup from '../input/FieldGroup';
// import Login from './Login';

// Basic suggestion button.
function JoinLogin({leadMsg, headerMsg, children, ...rest}) {
  // const { asyncValid, user, sendToken, sendingToken, sentTokenSuccess, ...other } = props;
  //
  // let ChildEl = false;
  // if (asyncValid && user) {
  //   headerMsg = 'Login';
  //   leadMsg = 'Select a login method';
  //   ChildEl = (
  //     <Login
  //       sendingToken={sendingToken}
  //       sentTokenSuccess={sentTokenSuccess}
  //       onClick={sendToken}
  //       {...user}
  //     />
  //   );
  // } else {
  //   ChildEl = <FieldGroup {...other} />;
  // }

  return (
    <div>
      <h2>{ headerMsg }</h2>
      <p className="lead">{ leadMsg }!</p>
      { children }
    </div>
  );
}

JoinLogin.propTypes = {
  leadMsg: PropTypes.string.isRequired,
  headerMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
JoinLogin.defaultProps = {};
export default JoinLogin;
