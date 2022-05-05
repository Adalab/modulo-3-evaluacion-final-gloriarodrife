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
            <div>
              <i className="audio fa-solid fa-volume-high"></i>
            </div>
          </a>
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
        <audio controls autoPlay>
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
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
