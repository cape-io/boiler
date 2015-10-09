import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers.
import { devTools, persistState } from 'redux-devtools';
// Import any middleware.
import thunk from 'redux-thunk';

// Our reducer index.
import reducer from './modules';

// Add middleware to this array.
const middleware = [thunk];

// Allow the function to accept an initialState object.
export default function configureStore(initialState) {
  let finalCreateStore;
  // In production, we want to use just the middleware.
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware);
  }
  // In development, we want to use some store enhancers from redux-devtools.
  // UglifyJS will eliminate the dead code depending on the build environment.
  else {
    let persist = undefined;
    if (typeof window !== 'undefined') {
      persist = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    }
    finalCreateStore = compose(
      // Enables your middleware:
      applyMiddleware(...middleware),
      // Provides support for DevTools:
      devTools(),
      // Lets you write ?debug_session=<name> in address bar to persist debug sessions.
      persistState(persist)
    );
  }

  const store = finalCreateStore(createStore)(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextReducer = require('./modules');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
