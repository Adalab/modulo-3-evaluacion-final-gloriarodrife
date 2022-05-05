import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Scene = (props) => {
  const { movie, image, phrase, year, id } = props.item;

  return (
    <>
      <Link to={`/scene/${id}`}>
        <img src={image} alt={`Scene of ${movie}`} />
        <h2>
          {movie} - {year}
        </h2>
        <p>{phrase}</p>
      </Link>
    </>
  );
};

Scene.defaultProps = {
  item: {
    id: 'Not defined',
    movie: 'Not defined',
    phrase: 'Not defined',
    image: 'Not defined',
    year: 'Not defined',
  },
};
Scene.propTypes = {
  item: PropTypes.object,
};
export default Scene;
