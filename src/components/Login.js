import React, { PropTypes } from 'react';

// Basic suggestion button.
function Login({photo, providers}) {
  let PhotoEl = false;
  if (photo) {
    PhotoEl = <img src={photo.previewUrl} />;
  }
  return (
    <div>
      { PhotoEl }
      <pre>{ JSON.stringify(providers, null, 2) }</pre>
    </div>
  );
}

Login.propTypes = {
  photo: PropTypes.object,
};
Login.defaultProps = {
};
export default Login;
