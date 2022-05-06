import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SceneDetail = (props) => {
  if (!props.loaded) {
    return <p>Loading...</p>;
  }

  if (props.loaded && !props.movie) {
    return <p>The scene you are looking for does not exist</p>;
  }
  const { movie, image, phrase, director, audio, video } = props.movie;
  return (
    <>
      <section className="detail">
        <div className="detail__visual">
          <img className="detail__img" src={image} alt={movie} />
          <audio className="play" controls>
            <source src={audio} type={props.type} />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="detail__description">
          <h2 className="detail__title">{movie}</h2>
          <p className="detail__text">{phrase}</p>
          <p className="detail__text--director">Director: {director} </p>

          <Link className="detail__return" to="/">
            <div>
              <i className="video fa-solid fa-arrow-left-long"></i>
            </div>
          </Link>

          <a
            className="detail__video"
            target={props.target}
            href={
              video['360p'] || video['480p'] || video['7200p'] || video['1080p']
            }
          >
            {' Scene'}

            <i className="fa-solid fa-video"></i>
          </a>
        </div>
      </section>
    </>
  );
};

SceneDetail.defaultProps = {
  target: '_blank',
  type: 'audio/mpeg',
};
SceneDetail.propTypes = {
  target: PropTypes.string,
  movie: PropTypes.object,
};
export default SceneDetail;
