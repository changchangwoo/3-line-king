import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goToManual = () => {
    navigate("/Manual");
  };
  return (
    <>
      <div className="mainContainer fontSize_title">
        삼행시의 <span style={{ fontSize: "35px", color: "#6750A4" }}>왕</span>
      </div>
      <div className="mainContainerSub fontSize_medium">
        당신의 순발력을 평가해드립니다
      </div>
      <div className="mainContainerImgBox"></div>
      <input className="inputUsername" placeholder="닉네임"></input>
      <div className="fontSize_small" style={{ marginTop: "10px" }}>
        닉네임은 오직 랭킹등록에만 사용되어집니다
      </div>
      <Button value="제출" handleButton={goToManual}></Button>
    </>
  );
}

export default Main;
