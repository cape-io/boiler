import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';

class EditableButtons extends Component {
  handleSubmit(event) {
    const {onSubmit} = this.props;
    event.preventDefault();
    onSubmit();
  }

  render() {
    const {onClose, disabled} = this.props;

    let CloseButton = false;
    if (onClose) {
      CloseButton = (
        <button
          className="btn btn-sm editable-close"
          type="button"
          onClick={onClose}
        >
          <Icon symbol="ban-circle" />
        </button>
      );
    }

    return (
      <div className="editable-buttons">
        <button
          className="btn btn-sm editable-submit"
          disabled={disabled}
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Icon symbol="ok" />
        </button>
        { CloseButton }
      </div>
    );
  }
}

EditableButtons.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
};
export default EditableButtons;
