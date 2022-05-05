import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SceneDetail = (props) => {
  if (!props.loaded) {
    return <p>Loading...</p>;
  }

  if (props.loaded && !props.movie) {
    return <p>The scene you are looking for does not exist</p>;
  }

  const { movie, image, phrase, director, audio } = props.movie;
  return (
    <>
      <section className="detail">
        <div>
          <img className="detail__img" src={image} alt={movie} />
        </div>
        <div className="detail__description">
          <h2 className="detail__title">{movie}</h2>
          <p className="detail__text">{phrase}</p>
          <p className="detail__text--director">Director: {director} </p>
          <a
            className="detail__audio"
            href={audio}
            target={props.target}
            rel="noopener noreferrer"
          >
            Listen audio
          </a>
          <Link className="detail__return" to="/">
            <i class="fa-solid fa-arrow-left-long"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

SceneDetail.defaultProps = {
  target: '_blank',
};
SceneDetail.propTypes = {
  target: PropTypes.string,
  movie: PropTypes.object,
};
export default SceneDetail;
