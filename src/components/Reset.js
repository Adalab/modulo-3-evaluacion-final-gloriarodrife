import PropTypes from 'prop-types';

const Reset = (props) => {
  const handleClick = (event) => {
    props.resetButton(event);
  };
  return <button onClick={handleClick}>{props.buttonText}</button>;
};

Reset.defaultProps = {
  buttonText: 'Reset',
};
Reset.propTypes = {
  resetButton: PropTypes.func,
  handleClick: PropTypes.func,
};
export default Reset;
