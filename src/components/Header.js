import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1> Owen Wilson's "wow"</h1>
        </Link>
      </div>
    </>
  );
};
export default Header;
