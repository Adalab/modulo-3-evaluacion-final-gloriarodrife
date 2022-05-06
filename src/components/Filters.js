import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import Reset from './Reset';
import PropTypes from 'prop-types';
import '../styles/layout/filters.scss';

const Filters = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="filters">
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <section className="filters__container">
          <FilterYear
            handleFilterYear={props.handleFilterYear}
            yearSelected={props.yearSelected}
            years={props.years}
          />
          <Reset resetButton={props.resetButton} />
        </section>
      </form>
    </>
  );
};
Filters.propTypes = {
  years: PropTypes.array,
  handleFilterMovie: PropTypes.func,
  handleFilterYear: PropTypes.func,
  resetButton: PropTypes.func,
  yearSelected: PropTypes.string,
  filterMovie: PropTypes.string,
};
export default Filters;
