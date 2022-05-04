import { Link, Route } from 'react-router-dom';

const MovieDetail = (props) => {
  const { movie, image, id, phrase, director, audio } = props.movie;
  console.log(audio);
  return (
    <>
      {/* Con el Link modifico la ruta  */}

      <img src={image} alt={movie} />

      <Link to="/"> Volver</Link>

      <h2>{movie}</h2>
      <p>{phrase}</p>
      <p>Director: {director} </p>
      <a href={audio} target="_blank" rel="noopener noreferrer">
        Escuchar audio
      </a>
    </>
  );
};

export default MovieDetail;
