function Button(props) {
  const handleButton = () => {
    props.handleButton();
  };
  return (
    <>
      <button className="btn" onClick={handleButton}>
        {props.value}
      </button>
    </>
  );
}

export default Button;
