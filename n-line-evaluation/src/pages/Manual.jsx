import { useState } from "react";
import Button from "../components/Button";

function Manual() {
  return (
    <>
      <div className="mainContainer fontSize_title">평가 방식</div>
      <ul className="fontSize_medium">
        <li>삼행시는 총 세번 이뤄집니다</li>
        <li>
          <span style={{ fontWeight: "bolder" }}>다음 기준</span>에 맞춰
          평가됩니다
        </li>
        <li>총 합산 점수로 등수를 정합니다</li>
      </ul>
      <div
        className="ontSize_medium"
        style={{ marginTop: "60px", marginBottom: "40px" }}
      >
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
      <Button value="시작"></Button>
    </>
  );
}

export default Manual;
