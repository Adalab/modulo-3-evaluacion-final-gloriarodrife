import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from './Loader';

const SceneDetail = (props) => {
  if (!props.loaded) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  if (props.loaded && !props.movie) {
    return (
      <>
        <section className="message">
          <p>The scene you are looking for does not exist</p>
          <p>Suggestions:</p>
          <ol className="message__suggestions">
            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
          </ol>
          <Link className="message__link" to="/">
            Main page
            <i className="message__link--icon fa-solid fa-house"></i>
          </Link>
        </section>
      </>
    );
  }
  const { movie, image, phrase, director, audio, video } = props.movie;
  return (
    <>
      <section className="detail">
        <div className="detail__visual">
          <img className="detail__img" src={image} alt={movie} />
        </div>
        <div className="detail__description">
          <h2 className="detail__title">{movie}</h2>
          <p className="detail__text">{phrase}</p>
          <p className="detail__text--director">Director: {director} </p>

          <audio className="play" controls>
            <source src={audio} type={props.type} />
            Your browser does not support the audio element.
          </audio>
          <Link className="detail__return" to="/">
            <i className="video fa-solid fa-arrow-left-long"></i>
            Back
          </Link>

          <a
            className="detail__video"
            target={props.target}
            href={
              video['360p'] || video['480p'] || video['7200p'] || video['1080p']
            }
          >
            <i className="fa-solid fa-video"></i>
            {' Scene'}
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
