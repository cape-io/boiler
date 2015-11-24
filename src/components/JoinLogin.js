import React, { PropTypes } from 'react'

// Basic suggestion button.
function JoinLogin({ leadMsg, headerMsg, children, ...rest }) {

  return (
    <div>
      <h2>{ headerMsg }</h2>
      <p className="lead">{ leadMsg }</p>
      <p>hi!</p>
      { children }
    </div>
  )
}

JoinLogin.propTypes = {
  leadMsg: PropTypes.string.isRequired,
  headerMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
JoinLogin.defaultProps = {}

export default JoinLogin
