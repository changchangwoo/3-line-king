import { useState } from "react";

function ContentLine(props) {
  return (
    <>
        <div className="contentLine">
          <div className="contentQuestion fontSize_medium">{props.value}</div>
          <input className="contentAnswer fontSize_small" onChange={(e) => props.onChange(e.target.value)}></input>
        </div>
    </>
  );
}

export default ContentLine;
