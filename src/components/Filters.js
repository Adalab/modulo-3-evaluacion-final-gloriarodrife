import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      <FilterYear data={props.data} years={props.years} />
    </>
  );
};

export default Filters;
