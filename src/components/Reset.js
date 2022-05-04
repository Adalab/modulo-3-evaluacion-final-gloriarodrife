const Reset = (props) => {
  const handleClick = (event) => {
    props.resetButton(event);
  };
  return <button onClick={handleClick}>Reset</button>;
};

export default Reset;
