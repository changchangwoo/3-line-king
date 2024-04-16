import Button from "./Button";
import { motion } from "framer-motion";
import { modalAnimation } from "../utils/animation";

function Modal() {
  return (
    <>
      <div className="modalContainer">
        <motion.div
          initial={modalAnimation.initial}
          animate={modalAnimation.animate}
          transition={modalAnimation.transition}
          className="modalBox"
        >
          <div className="modalLogo">오류</div>
          <div className="modalDescript fontSize_small">
            닉네임을 입력해주세요
          </div>
          <Button value="확인"></Button>
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
