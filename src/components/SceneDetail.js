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
  movie: {
    id: 'Not defined',
    name: 'Not defined',
    phrase: 'Not defined',
    director: 'Not defined',
    image: 'Not defined',
  },
};
SceneDetail.propTypes = {
  movie: PropTypes.object,
};
export default SceneDetail;
