import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <>
      <section className="filters">
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        <FilterYear data={props.data} years={props.years} />
      </section>
    </>
  );
};

export default Filters;
