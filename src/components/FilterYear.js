const FilterYear = (props) => {
  const handleChange = (event) => {
    props.handleFilterYear(event.target.value);
  };

  const renderYears = () => {
    return (
      <select name="year" id="">
        {props.years.map((year, index) => (
          <option key={index} value={year} onChange={handleChange}>
            {year}
          </option>
        ))}
      </select>
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
