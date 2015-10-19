// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../components/Counter';

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps() {
  return {};
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// Not sure why it needs to happen here.
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }
function mergeProps(stateProps, dispatchProps, {route: {color, increment}}) {
  return {
    color,
    increment,
  };
}
export default connect(mapStateToProps, null, mergeProps)(Component);
