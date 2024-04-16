import { useState } from "react";
import Button from "../components/Button";
import { startAnimation } from "../utils/animation";
import MotionStart from "../components/MotionStart";
import { useNavigate } from "react-router-dom";

function Manual() {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/Game");
  };


  return (
    <>
          <div className="defaultContainer">
      <MotionStart delay={0.3} className="mainContainer fontSize_title">
        평가 방식
      </MotionStart>

      <MotionStart delay={0.35}>
      <ul className="fontSize_medium">
        <li>삼행시는 총 세번 이뤄집니다</li>
        <li>
          <span style={{ fontWeight: "bolder" }}>다음 기준</span>에 맞춰
          평가됩니다
        </li>
        <li>총 합산 점수로 등수를 정합니다</li>
      </ul>
      </MotionStart>

      <MotionStart delay={0.34} className="fontSize_medium">
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

      <MotionStart delay={0.45}>
      <Button value="시작" handleButton={goToGame}></Button>
      </MotionStart>
      </div>
    </>
  );
}

export default Manual;
