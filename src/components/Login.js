import React, { PropTypes } from 'react';

import ProviderLinks from './ProviderLinks';

// Basic suggestion button.
function Login({photo, providers, email, onClick}) {
  const loginProviders = [];
  function addProviderInfo(type, label) {
    const info = {
      type,
      key: type,
    };
    if (type === 'email') {
      info.onClick = () => onClick(email);
      info.label = `Email a login link to ${label}`;
    } else {
      info.link = `/user/login/${type}`;
      info.label = `Sign in with ${label}`;
    }
    loginProviders.push(info);
  }
  addProviderInfo('email', email);
  providers.forEach(provider => {
    if (provider === 'google') {
      addProviderInfo('google', 'Google');
    }
  });

  let PhotoEl = false;
  if (photo) {
    PhotoEl = <img src={photo.previewUrl} />;
  }

  return (
    <div>
      { PhotoEl }
      <ProviderLinks providers={loginProviders} />
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
