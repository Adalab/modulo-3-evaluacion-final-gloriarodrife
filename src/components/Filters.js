import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

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
          years={props.years}
        />
      </section>
    </>
  );
};

export default Filters;
