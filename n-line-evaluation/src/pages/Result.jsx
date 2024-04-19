import { useLocation, useNavigate } from "react-router-dom";
import MotionStart from "../components/MotionStart";
import Button from "../components/Button";
import ContentLine from "../components/ContentLine";
import { useEffect, useState } from "react";

function Result() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const goToRanking = () => {
    navigate("/Ranking");
  };
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
          <div className="resultBox">
          {state.keyWord.map((word, index) => (
              <MotionStart key={index} delay={0.5 + (0.05 * (index + 1))} >
          <ContentLine key={index} value={word} 
          height={"30px"}
          onChange={(value) => handleAnswerChange(index, value)} answer={state.answers[index]}/>
              </MotionStart>
            ))}
          </div>
        </MotionStart>
        <MotionStart delay={0.5} className="resultDescript fontSize_small">
          {state.data.answer}
        </MotionStart>
        <MotionStart delay={0.55}>
          <div className="fontSize_small">현재 총 점수 : 5점</div>
        </MotionStart>
        <MotionStart delay={0.6}>
          <Button value="다시하기"></Button>
        </MotionStart>
        <MotionStart delay={0.65}>
          <Button value="등수확인" marginTop="10px" handleButton={goToRanking}></Button>
        </MotionStart>  
      </div>
    </>
  );
}

export default Result;
