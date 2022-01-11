import React from "react";

export default function Cell({ width, color, numberOfCells, height }) {
  const styles = {
    width: width / numberOfCells,
    height: height / numberOfCells,
    backgroundColor: "rgb(211,211,211)",
    border: "1px solid black",
    margin: "-1.5px",
    padding: 0,
  };

  const clickHandler = (e) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <div onMouseEnter={clickHandler}>
      <div className="etch-cell" style={styles}>
        &nbsp;
      </div>
    </div>
  );
}
