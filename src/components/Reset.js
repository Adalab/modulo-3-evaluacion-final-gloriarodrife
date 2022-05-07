import PropTypes from 'prop-types';

const Reset = (props) => {
  const handleClick = (event) => {
    props.resetButton(event);
  };
  return (
    <button className="filter__button" onClick={handleClick}>
      Reset
    </button>
  );
};

Reset.propTypes = {
  resetButton: PropTypes.func,
  handleClick: PropTypes.func,
};
export default Reset;
