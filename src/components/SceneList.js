import Scene from './Scene';

const SceneList = (props) => {
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

export default SceneList;
