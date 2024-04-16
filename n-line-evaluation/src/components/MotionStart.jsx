import { startAnimation } from "../utils/animation"; // 상대 경로에 따라 실제 파일 경로를 수정해야 합니다.
import { motion } from "framer-motion";

function MotionStart(props) {
  return (
    <>
      <motion.div
        initial={startAnimation.initial}
        animate={startAnimation.animate}
        transition={{ delay: props.delay, duration: 0.4 }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </>
  );
}

export default MotionStart;
