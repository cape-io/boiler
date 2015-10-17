import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JoinLogin from '../components/JoinLogin';
import * as actions from '../modules/email';

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps({email, db}) {
  // Decide what headerMsg and leadMsg to have based on the route?
  // Is it better to have different templates or different data?
  return {
    id: 'email',
    ...db['join-login'],
    ...email,
  };
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// Not sure why it needs to happen here.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinLogin);
