import { useEffect, useState } from "react";
import Button from "../components/Button";
import MotionStart from "../components/MotionStart";
import RankContent from "../components/RankContent";
import API from "../utils/api";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import ContentLine from "../components/ContentLine";

function Ranking() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [detailData, setDetailData] = useState({});
  const [lines, setLines] = useState([]);
  const [answers, setAnswers] = useState([])

  const [list, setList] = useState([]);

  useEffect(() => {
    let url = "/users/" + userId;
    API.get(url)
      .then((response) => {
        setDetailData(response.data[0]);
        let lineTemp = []
        let answerTemp = []
        let parts = response.data[0].first.trim().split("\n")
        for(let i =0; i < parts.length; i++) {
          let [a,b] = parts[i].split(" : ")
          lineTemp.push(a)
          answerTemp.push(b)
        }
        setLines(lineTemp)
        setAnswers(answerTemp)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isModal]);

  useEffect(() => {
    API.get("/users")
      .then((response) => {
        setList(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const closeModal = (e) => {
    setIsModal(false);
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <>
      {isModal && (
        <Modal title={detailData.name} closeModal={closeModal}>
          <div style={{width : "100%", marginTop : "15px"}}>
          {lines.map((word, index) => (
              <MotionStart key={index} delay={0.2+ (0.05 * (index + 1))} >
          <ContentLine key={index} value={word} 
          height={"30px"}
          onChange={(value) => handleAnswerChange(index, value)} answer={answers[index]}/>
              </MotionStart>
            ))}
            </div>  
        </Modal>
      )}
      <div className="defaultContainer">
        <MotionStart delay={0.3} className="mainContainer fontSize_title">
          랭킹
        </MotionStart>
        <MotionStart delay={0.35}>
          <div className="rankingContainer">
            <div className="rankingList">
              {list.map((item, index) => (
                <RankContent
                  key={index}
                  idx={index}
                  data={item}
                  setDetail={setIsModal}
                  setUserId={setUserId}
                />
              ))}
            </div>
          </div>
        </MotionStart>
        <MotionStart delay={0.45}>
          <Button value="다시하기" handleButton={goToMain}></Button>
        </MotionStart>
      </div>
    </>
  );
}

export default Ranking;
