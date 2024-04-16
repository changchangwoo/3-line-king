import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ContentLine from "../components/ContentLine";
import ContentBox from "../components/ContentLine";
import MotionStart from "../components/MotionStart";

function Game() {
  const navigate = useNavigate();
  const goToResult = () => {
    navigate("/Result");
  };
  return (
    <>
              <div className="defaultContainer">

      <MotionStart delay={0.3} className="mainContainer fontSize_title">
        제 시 어
      </MotionStart>

      <MotionStart delay={0.35}>
      <div className="progressBar"></div>
      <div className="progressText fontSize_small">1/3</div>
      </MotionStart>

      <div className="contentBox">

      <MotionStart delay={0.4}>
        <ContentLine value="제"></ContentLine>
        </MotionStart>

      <MotionStart delay={0.45}>
        <ContentLine value="시"></ContentLine>
        </MotionStart>

        <MotionStart delay={0.5}>
        <ContentLine value="어"></ContentLine>
        </MotionStart>

      </div>
      <MotionStart delay={0.55}>
      <Button value="제출" handleButton={goToResult}></Button>
      </MotionStart>
</div>
    </>
  );
}

export default Game;
