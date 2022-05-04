import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      <FilterYear />
    </>
  );
};

export default Filters;
