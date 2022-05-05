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

Scene.propTypes = {
  item: PropTypes.object,
  movie: PropTypes.string,
  phrase: PropTypes.string,
  year: PropTypes.number,
  id: PropTypes.any,
};
export default Scene;
