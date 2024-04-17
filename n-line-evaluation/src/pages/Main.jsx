import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
// import Modal from "../components/Modal";
import MotionStart from "../components/MotionStart";
import Modal from "../components/Modal";
import API from "../utils/api";
function Main() {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [userName, setUserName] = useState("");

  const goToManual = () => {
    if (userName === "") {
      setIsModal(true);
    } else {
      API.post("/users", {
        name : userName
      }).then((response) => {
        if(response.status === 200)
        navigate("/Manual");

      }).catch((err) => {
        console.log(err)
      })
    }
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal} title="오류">
          닉네임을 입력해주세요
        </Modal>
      )}
      <div className="defaultContainer">
        <MotionStart delay={0.3} className="mainContainer fontSize_title">
          삼행시의{"  "}
          <span style={{ fontSize: "35px", color: "#6750A4" }}>왕</span>
        </MotionStart>

        <MotionStart delay={0.35} className="mainContainerSub">
          당신의 순발력을 평가해드립니다
        </MotionStart>

        <MotionStart delay={0.4} className="mainContainerImgBox"></MotionStart>

        <MotionStart delay={0.45}>
          <input
            className="inputUsername"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="닉네임"
          ></input>
          <div className="fontSize_small" style={{ marginTop: "10px" }}>
            닉네임은 오직 랭킹등록에만 사용되어집니다
          </div>
        </MotionStart>

        <MotionStart delay={0.5}>
          <Button value="제출" handleButton={goToManual}></Button>
        </MotionStart>
      </div>
    </>
  );
}

export default Main;
