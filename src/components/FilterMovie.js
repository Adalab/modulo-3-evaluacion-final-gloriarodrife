import PropTypes from 'prop-types';

const FilterMovie = (props) => {
  const handleInput = (event) => {
    props.handleFilterMovie(event.currentTarget.value);
  };
  return (
    <section className="filter__movie">
      <label htmlFor="movie" className="movie__text">
        {props.text}
      </label>
      <input
        className="movie__search"
        type={props.inputType}
        id="movie"
        name="movie"
        value={props.filterMovie}
        onChange={handleInput}
      />
      <i className="fa-solid fa-magnifying-glass movie__search--icon"></i>
    </section>
  );
};
FilterMovie.defaultProps = {
  inputType: 'text',
  require: false,
  text: 'Movie',
};
FilterMovie.propTypes = {
  handleFilterMovie: PropTypes.func,
  handleInput: PropTypes.func,
  filterMovie: PropTypes.string,
  text: PropTypes.string,
  inputType: PropTypes.string,
};
export default FilterMovie;
