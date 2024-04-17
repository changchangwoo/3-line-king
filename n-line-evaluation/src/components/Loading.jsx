import { color, motion } from "framer-motion";
import { modalAnimation } from "../utils/animation";

function Loading(props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <>
      <div className="modalContainer">
      <motion.div
      className="loadingView"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      ></motion.div>
    <div className="fontSize_small" style={{color: "white", fontWeight: "bold"}}>잠시만요!</div>
    </div>
    </>
  );
}

export default Loading;
