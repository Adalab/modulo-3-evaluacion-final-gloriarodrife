import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import Reset from './Reset';

const Filters = (props) => {
  return (
    <>
      <section className="filters">
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
      </section>
    </>
  );
};

export default Filters;
