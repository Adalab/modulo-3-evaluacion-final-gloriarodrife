import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import Reset from './Reset';
import PropTypes from 'prop-types';

const Filters = (props) => {
  return (
    <>
      <form className="filters">
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          yearSelected={props.yearSelected}
          years={props.years}
        />
        <Reset resetButton={props.resetButton} />
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
