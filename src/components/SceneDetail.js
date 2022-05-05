import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ls from '../services/localStorage';
const SceneDetail = (props) => {
  ls.set('scenes', props.movie);

  // ls.get('scene', defaultScene)
  if (!props.loaded) {
    return <p>Loading...</p>;
  }

  if (props.loaded && !props.movie) {
    return <p>The scene you are looking for does not exist</p>;
  }

  const { movie, image, phrase, director, audio } = props.movie;
  return (
    <>
      <img src={image} alt={movie} />
      <Link to="/">Return</Link>
      <h2>{movie}</h2>
      <p>{phrase}</p>
      <p>Director: {director} </p>
      <a href={audio} target={props.target} rel="noopener noreferrer">
        Listen audio
      </a>
    </>
  );
};

SceneDetail.defaultProps = {
  target: '_blank',
};
SceneDetail.propTypes = {
  movie: PropTypes.object,
};
export default SceneDetail;
