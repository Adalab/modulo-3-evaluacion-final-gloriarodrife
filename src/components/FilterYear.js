const FilterYear = (props) => {
  const handleChange = (event) => {
    props.handleFilterYear(event.target.value);
  };

  const renderYears = () => {
    return (
      <select name="year" id="">
        {props.years.map((year) => (
          <option value={year} onChange={handleChange}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <label>Year</label>
      <ul>{renderYears()}</ul>
    </>
  );
};

export default FilterYear;
