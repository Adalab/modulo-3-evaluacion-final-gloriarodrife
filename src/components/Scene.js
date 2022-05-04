import { Link } from 'react-router-dom';

const Scene = (props) => {
  const { movie, image, phrase, year, id } = props.item;
  return (
    <>
      <Link to={`/movie/${id}`}>
        <img src={image} alt={`Scene of ${movie}`} />
        <h2>
          {movie} - {year}
        </h2>
        <p>{phrase}</p>
      </Link>
    </>
  );
};

export default Scene;
