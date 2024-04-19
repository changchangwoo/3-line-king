import { useState } from "react";

function ContentLine(props) {
  return (
    <>
        <div className="contentLine" style={{height: props.height}}>
          <div className="contentQuestion fontSize_medium">{props.value}</div>
          {!props.answer ?
          <input className="contentAnswer fontSize_small" onChange={(e) => props.onChange(e.target.value)}></input>
            : <div className="contentAnswer fontSize_small">
              <div className="temp">
              {props.answer}
              </div>
              </div>
        }
        </div>
    </>
  );
}

export default ContentLine;
