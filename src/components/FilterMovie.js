import PropTypes from 'prop-types';

const FilterMovie = (props) => {
  const handleInput = (event) => {
    props.handleFilterMovie(event.currentTarget.value);
  };
  return (
    <section className="filter__movie">
      <label htmlFor="movie">{props.text}</label>
      <input
        type={props.inputType}
        id="movie"
        name="movie"
        value={props.filterMovie}
        onChange={handleInput}
      />
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
