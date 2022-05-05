import PropTypes from 'prop-types';

const FilterYear = (props) => {
  const handleChange = (event) => {
    props.handleFilterYear(event.target.value);
  };

  const renderYears = () => {
    return (
      <select
        className="year__select select"
        name="year"
        value={props.yearSelected}
        onChange={handleChange}
      >
        <option value="All">All</option>
        {props.years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <section className="filter__year">
        <label htmlFor="year">{props.title}</label>
        <ul>{renderYears()}</ul>
      </section>
    </>
  );
};

FilterYear.defaultProps = {
  title: 'Year',
};
FilterYear.propTypes = {
  title: PropTypes.string.isRequired,
  years: PropTypes.array,
  year: PropTypes.number,
  handleFilterYear: PropTypes.func,
};
export default FilterYear;
