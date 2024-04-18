import { motion } from "framer-motion";

function Button(props) {
  const handleButton = () => {
    props.handleButton();
  };
  return (
    <>
      <button className="btn" onClick={handleButton} 
      style={{marginTop : props.marginTop}}>
        {props.value}
      </button>
    </>
  );
}

export default Button;
