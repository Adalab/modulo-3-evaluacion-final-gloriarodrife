const FilterMovie = (props) => {
  const handleInput = (event) => {
    props.handleFilterMovie(event.currentTarget.value);
  };
  return (
    <form className="filter__movie">
      <label htmlFor="movie">Movie </label>
      <input
        type="text"
        id="movie"
        name="movie"
        value={props.filterMovie}
        onChange={handleInput}
      />
    </form>
  );
};

export default FilterMovie;
