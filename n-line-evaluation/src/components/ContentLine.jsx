function ContentLine(props) {
  return (
    <>
        <div className="contentLine">
          <div className="contentQuestion fontSize_medium">{props.value}</div>
          <input className="contentAnswer fontSize_small"></input>
        </div>
    </>
  );
}

export default ContentLine;
