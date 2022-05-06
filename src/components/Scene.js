import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Scene = (props) => {
  const { movie, image, phrase, year, id } = props.item;

  return (
    <>
      <Link className="card__link" to={`/scene/${id}`}>
        <img className="card__img" src={image} alt={`Scene of ${movie}`} />
        <section className="card__info">
          <h2 className="card__title">
            {movie} - {year}
          </h2>
          <p className="card__text">' {phrase} '</p>
        </section>
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
