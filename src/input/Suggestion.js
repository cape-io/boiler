import React, { PropTypes } from 'react';

// Basic suggestion button.
function Suggestion({preText, postText, suggestion, onClick, ...rest}) {
  return (
    <span>
      {preText + ' '}
      <button onClick={onClick}>
        {suggestion}
      </button>
      {postText + ' '}
    </span>
  );
}
Suggestion.propTypes = {
  onClick: PropTypes.func.isRequired,
  suggestion: PropTypes.string.isRequired,
  preText: PropTypes.string,
  postText: PropTypes.string,
};
Suggestion.defaultProps = {
  preText: 'Do you mean',
  postText: '?'
};
export default Suggestion;
