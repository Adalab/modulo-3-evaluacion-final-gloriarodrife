import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Scene = (props) => {
  const { movie, image, phrase, year, id } = props.item;

  return (
    <>
      <Link to={`/scene/${id}`} style={{ textDecoration: 'none' }}>
        <img className="card__img" src={image} alt={`Scene of ${movie}`} />
        <h2 className="card__title">
          {movie} - {year}
        </h2>
        <p className="card__text">' {phrase} '</p>
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
