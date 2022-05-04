const FilterYear = (props) => {
  const handleChange = (event) => {
    props.handleFilterYear(event.target.value);
  };

  const renderYears = () => {
    return (
      <form>
        <select name="year" value={props.yearSelected} onChange={handleChange}>
          <option value="All">All</option>
          {props.years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    );
  };

  return (
    <>
      <section className="filter__year">
        <label>Year</label>
        <ul>{renderYears()}</ul>
      </section>
    </>
  );
};

export default FilterYear;
