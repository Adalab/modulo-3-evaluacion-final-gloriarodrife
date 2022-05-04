import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
  const { movie, image, id, phrase, director, audio } = props.movie;

  return (
    <>
      {/* Con el Link modifico la ruta  */}
      <Link to={`/movie/${id}`}>
        <img src={image} alt={movie} />
        <Link to="/"> Volver</Link>
        <h2>{movie}</h2>
        <p>{phrase}</p>
        <p>Director: {director} </p>
        <a href={audio} target="_blank">
          Escuchar audio
        </a>
      </Link>
    </>
  );
};

export default MovieDetail;
