import PropTypes from 'prop-types';
const Header = (props) => {
  return (
    <>
      <div>
        <h1> {props.title}</h1>
      </div>
    </>
  );
};

Header.defaultProps = {
  title: `Owen Wilson's "wow`,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
