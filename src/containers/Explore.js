import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'
import ExploreEl from '../components/Explore'
import { resetErrorMessage } from '../redux/actions'

class Explore extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(nextValue) {
    this.props.pushPath(null, `/gh/${nextValue}`)
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div>
        <ExploreEl value={inputValue}
                 onChange={this.handleChange} />
        <hr />
        { children }
      </div>
    )
  }
}

Explore.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node,
}

function mapStateToProps(state, props) {
  const { params: { login, name } } = props
  let inputValue = login || ''
  if (name) {
    inputValue += '/'+name
  }
  return {
    errorMessage: state.errorMessage,
    inputValue,
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushPath,
})(Explore)
