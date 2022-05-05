import Scene from './Scene';
import PropTypes from 'prop-types';

const SceneList = (props) => {
  if (!props.loaded) {
    return <p>Loading...</p>;
  }

  if (props.loaded && props.data.length === 0) {
    return <p>The movie you are looking for does not exist</p>;
  }

  return (
    <section>
      <ul>
        {props.data.map((item, index) => (
          <li key={index}>
            <Scene item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

SceneList.propTypes = {
  data: PropTypes.array,
  loaded: PropTypes.bool,
};
export default SceneList;
