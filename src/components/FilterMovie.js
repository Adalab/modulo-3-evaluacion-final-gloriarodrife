const FilterMovie = (props) => {
  const handleInput = (event) => {
    props.handleFilterMovie(event.target.value);
  };
  return (
    <section>
      <label htmlFor="movie">Movie </label>
      <input type="text" id="movie" onChange={handleInput} />
    </section>
  );
};

export default FilterMovie;
