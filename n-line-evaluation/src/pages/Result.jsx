import { useNavigate } from "react-router-dom";
import MotionStart from "../components/MotionStart";
import Button from "../components/Button";

function Result() {
/*
  const goToResult = () => {
    navigate("/Result");
  };
*/
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
            10점 만점에 5점
          </div>
        </MotionStart>
      </div>
      <MotionStart delay={0.45}>
        <div className="resultBox"></div>
      </MotionStart>
      <MotionStart delay={0.5} className="resultDescript fontSize_small">
          GPT가 한번 읽고 내린 아주 매서운 평가가 담긴 라인 아주 매서운 평가가 담긴 라인
      </MotionStart>
      <MotionStart delay={0.55}>
        <div className="fontSize_small">
          현재 총 점수 : 5점
        </div>
      </MotionStart>
      <MotionStart delay={0.6}>
        <Button value="다음"></Button>
      </MotionStart>
      </div>
    </>
  );
}

export default Result;
