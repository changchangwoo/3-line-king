import { useLocation, useNavigate } from "react-router-dom";
import MotionStart from "../components/MotionStart";
import Button from "../components/Button";

function Result() {
  const { state } = useLocation();
  return (
    <>
      <div className="defaultContainer">
        <div className="resultLogoBox">
          <MotionStart delay={0.35}>
            <div style={{ float: "left", marginBottom: "5px" }}>
              전문 심사위원이 평가해본 결과...
            </div>
          </MotionStart>
          <MotionStart delay={0.4}>
            <div className="fontSize_title" style={{ float: "right" }}>
              10점 만점에 {state.data.score}점
            </div>
          </MotionStart>
        </div>
        <MotionStart delay={0.45}>
          <div className="resultBox"></div>
        </MotionStart>
        <MotionStart delay={0.5} className="resultDescript fontSize_small">
          {state.data.answer}
        </MotionStart>
        <MotionStart delay={0.55}>
          <div className="fontSize_small">현재 총 점수 : 5점</div>
        </MotionStart>
        <MotionStart delay={0.6}>
          <Button value="다음"></Button>
        </MotionStart>
      </div>
    </>
  );
}

export default Result;
