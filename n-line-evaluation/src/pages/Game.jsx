import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ContentLine from "../components/ContentLine";
import MotionStart from "../components/MotionStart";
import { useEffect, useState } from "react";
import API from "../utils/api";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

function Game() {
  const [keyWord, setKeyWord] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [answers, setAnswers] = useState(Array(keyWord.length).fill(''));

  const closeModal = () => {
    setIsModal(false);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers]; 
    newAnswers[index] = value; 
    setAnswers(newAnswers); 
  };
  const navigate = useNavigate();
  
  const goToResult = () => {
    let context = `\n`
    for(let i = 0; i < keyWord.length; i++) {
      if(answers[i] === undefined || keyWord[i] === undefined) {
        setIsModal(true)
        return
      }
      context += `${keyWord[i]} : ${answers[i]}\n`
    }
    setLoading(true)

    API.post("/games/eval", {
      context : context
    }).then((response) => {
      console.log(response.data)
      console.log(answers)
      navigate("/Result", { state: { data: response.data, keyWord : keyWord, answers : answers } });

    }).catch((err)=> {
      console.log(err)
    })
  };

  useEffect(() => {
    API.post("/games")
      .then((response) => {
        let tempArr = [];
        for (let i = 0; i < response.data.length; i++) {
          tempArr.push(response.data[i]);
        }
        setKeyWord(tempArr);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  return (
    <>      {isModal && (
      <Modal closeModal={closeModal} title="오류">
        빈칸이 존재하면 안돼요!
      </Modal>
    )}
    
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="defaultContainer">
          <MotionStart delay={0.3} className="mainContainer fontSize_title">
            {keyWord.join(" ")}
          </MotionStart>

          <MotionStart delay={0.35}>
            <div className="progressBar"></div>
            <div className="progressText fontSize_small">1/3</div>
          </MotionStart>

          <div className="contentBox">
          {keyWord.map((word, index) => (
              <MotionStart key={index} delay={0.5 + (0.05 * (index + 1))}>
          <ContentLine key={index} value={word} onChange={(value) => handleAnswerChange(index, value)} />
              </MotionStart>
            ))}
          
          </div>
          <MotionStart delay={0.55}>
            <Button value="제출" handleButton={goToResult}></Button>
          </MotionStart>
        </div>
      )}
    </>
  );
}

export default Game;
