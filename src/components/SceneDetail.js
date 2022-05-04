import { Link } from 'react-router-dom';

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
      <a href={audio} target="_blank" rel="noopener noreferrer">
        Listen audio
      </a>
    </>
  );
};

export default SceneDetail;
