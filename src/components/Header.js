// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Header = (props) => {
  return (
    <>
      <div>
        <h1> Owen Wilson's "wow"</h1>
      </div>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
