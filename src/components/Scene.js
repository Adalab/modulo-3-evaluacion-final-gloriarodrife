const Scene = (props) => {
  const { movie, image, phrase, year } = props.item;
  return (
    <>
      <img src={image} alt={`Scene of ${movie}`} />
      <h2>
        {movie} - {year}
      </h2>
      <p>{phrase}</p>
    </>
  );
};

export default Scene;
