import PropTypes from 'prop-types';
import '../styles/layout/header.scss';
const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1 className="header__title"> Owen Wilson's "wow"</h1>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
