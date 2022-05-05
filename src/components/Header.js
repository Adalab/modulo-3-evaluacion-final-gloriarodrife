import PropTypes from 'prop-types';
import '../styles/layout/header.scss';
const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1 className="header__title"> {props.title}</h1>
      </header>
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
