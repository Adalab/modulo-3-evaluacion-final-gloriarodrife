const FilterMovie = (props) => {
  const handleInput = (event) => {
    props.handleFilterMovie(event.currentTarget.value);
  };
  return (
    <form className="filter__movie">
      <label htmlFor="movie">Movie </label>
      <input
        type={props.inputType}
        id="movie"
        name="movie"
        value={props.filterMovie}
        onChange={handleInput}
      />
    </form>
  );
};
FilterMovie.defaultProps = {
  inputType: 'text',
  require: false,
};
export default FilterMovie;
