import Button from "./Button";
import { motion } from "framer-motion";
import { modalAnimation } from "../utils/animation";

function Modal(props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <>
      <div className="modalContainer">
        <motion.div
          initial={modalAnimation.initial}
          animate={modalAnimation.animate}
          transition={modalAnimation.transition}
          className="modalBox"
        >
          <div className="modalLogo">{props.title}</div>
          <div className="modalDescript fontSize_small">{props.children}</div>
          <Button value="확인" handleButton={closeModal}></Button>
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
