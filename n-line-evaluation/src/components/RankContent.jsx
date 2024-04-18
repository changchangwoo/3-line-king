import { delay, motion } from "framer-motion";
import { startAnimation } from "../utils/animation";

function RankContent(props) {
  const handleModal = () => {
    props.setDetail(true)
    props.setUserId(props.data.id);
  }
  
  return (
    <>
      <motion.div
        whileHover={{scale: 1.02,
        backgroundColor: "rgba(103, 80, 164, 0.8)",
        }}
        initial={startAnimation.initial}
        animate={startAnimation.animate}
        onClick={handleModal}
        className={
          "rankingComponent" +
          (props.idx === 0
            ? " gold"
            : props.idx === 1
            ? " silver"
            : props.idx === 2
            ? " bronze"
            : "")
        }
      >
        <div className="ranking">{props.idx + 1}</div>{" "}
        <div className="userContents">
          <div className="fontSize_medium" style={{ fontWeight: "bold" }}>
            {props.data.name}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }} className="fontSize_small">
              {props.data.score1}/10
            </div>
            <div className="fontSize_small">2024-04-18</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default RankContent;
