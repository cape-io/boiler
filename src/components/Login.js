import React, { PropTypes } from 'react';

import ProviderLinks from './ProviderLinks';

// Basic suggestion button.
function Login({photo, providers, email, onClick}) {
  let PhotoEl = false;
  if (photo) {
    PhotoEl = <img src={photo.previewUrl} />;
  }
  const loginProviders = [
    {type: 'email', label: `Email ${email}`, onClick},
  ];
  providers.forEach(provider => {
    if (provider === 'google') {
      loginProviders.push({
        type: 'google',
        label: 'Google',
        link: 'google',
      });
    }
  });
  return (
    <div>
      { PhotoEl }
      <pre>{ JSON.stringify(loginProviders, null, 2) }</pre>
    </div>
  );
}

Login.propTypes = {
  photo: PropTypes.object,
};
Login.defaultProps = {
};
export default Login;
