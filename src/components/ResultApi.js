const resultApi = (props) => {
  const handleInput = (event) => {
    props.setInputValue(event.target.value);
  };

  return (
    <input type="number" onChange={handleInput} value={props.inputValue} />
  );
};

export default resultApi;
