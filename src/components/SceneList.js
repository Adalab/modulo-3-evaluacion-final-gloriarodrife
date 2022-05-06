import Scene from './Scene';
import PropTypes from 'prop-types';
import Loader from './Loader';

const SceneList = (props) => {
  if (!props.loaded) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  if (props.loaded && props.data.length === 0) {
    return <p>The movie you are looking for does not exist</p>;
  }

  return (
    <section>
      <ul className="list">
        {props.data.map((item, index) => (
          <li className="card" key={index}>
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
