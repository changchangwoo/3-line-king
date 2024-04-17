import { useState } from "react";
import Button from "../components/Button";
import MotionStart from "../components/MotionStart";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function Manual() {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const goToGame = () => {
    navigate("/Game");
  };

  const handleModal = () => {
    console.log("check");
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && (
        <Modal title="평가 기준" closeModal={closeModal}>
          <ul style={{ margin: "auto", textAlign: "left" }}>
            <li>1. 해당하는 단어의 특성을 포함하는지</li>
            <li>2. 문맥이 자연스러운지</li>
            <li>3. 단어 종성에서 벗어나지 않는지</li>
            <li>4. 미괄식 구조로 임팩트가 주어지는지</li>
          </ul>
        </Modal>
      )}
      <div className="defaultContainer">
        <MotionStart delay={0.3} className="mainContainer fontSize_title">
          평가 방식
        </MotionStart>

        <ul className="fontSize_medium">
          <MotionStart delay={0.35}>
            <li>삼행시는 총 세번 이뤄집니다</li>
          </MotionStart>
          <MotionStart delay={0.4}>
            <li>
              <motion.span
                onClick={handleModal}
                style={{ fontWeight: "bolder" }}
                whileHover={{ scale: 1.1, color: "rgba(103, 80, 164, 0.8)"}} // hover 시 크기를 1.1배로 키움
              >
                다음 기준
              </motion.span>
              에 맞춰 평가됩니다
            </li>
          </MotionStart>
          <MotionStart delay={0.45}>
            <li>총 합산 점수로 등수를 정합니다</li>
          </MotionStart>
        </ul>

        <MotionStart delay={0.5} className="fontSize_medium">
          <div style={{ marginTop: "60px", marginBottom: "40px" }}>
            창의력을 발휘해 삼행시의{" "}
            <span
              style={{
                color: "#6750A4",
                fontWeight: "bolder",
              }}
            >
              왕
            </span>
            이 되세요!
          </div>
        </MotionStart>

        <MotionStart delay={0.55}>
          <Button value="시작" handleButton={goToGame}></Button>
        </MotionStart>
      </div>
    </>
  );
}

export default Manual;
