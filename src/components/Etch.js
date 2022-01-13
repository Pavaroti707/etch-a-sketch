import React, { useState, useEffect } from "react";
import Cell from "./Cell";

export default function Etch() {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [numberOfCells, setNumberOfCells] = useState(16);
  const [random, setRandom] = useState(false);

  const style = {
    display: "grid",
    gridTemplate: `repeat(${numberOfCells},1fr)/repeat(${numberOfCells},1fr)`,
    marginLeft: "15px",
    width: "450px",
    height: "450px",
    border: "1px solid black",
    marginTop: "50px",
  };

  const clearHandler = (e) => {
    let cells = document.getElementsByClassName("etch-cell");

    for (let i = 0; i < cells.length; i++) {
      cells[i].style.background = "rgb(211,211,211)";
    }
  };

  const setBlack = (e) => {
    setRandom(false);
    setColor("rgb(0,0,0)");
  };

  const randomColor = (e) => {
    setRandom(!random);
    setColor("rgb(125,125,125)");
  };

  const resetHandler = (e) => {
    const number = prompt("Enter number of cells on board");

    const digits = number.toString().split(".");

    if (number >= 16 && number <= 100) {
      if (digits.length > 1) {
        return alert("You must use whole numbers!");
      }

      setNumberOfCells(number);

      let cells = document.getElementsByClassName("etch-cell");

      for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = "rgb(211,211,211)";
      }
    } else alert("Number of cells must be between 16 and 100");
  };

  useEffect(() => {
    if (random) {
      setTimeout(() => {
        let firstNumber = Math.floor(Math.random() * 256);
        let secondNumber = Math.floor(Math.random() * 256);
        let thirdNumber = Math.floor(Math.random() * 256);

        setColor(
          "rgb(" + firstNumber + "," + secondNumber + "," + thirdNumber + ")"
        );
      }, 20);
    }

    if (!random) setColor("rgb(0,0,0)");
  }, [color]);

  const board = [];
  for (let i = 0; i < numberOfCells * numberOfCells; i++) {
    board.push(
      <Cell
        width={450}
        height={450}
        numberOfCells={numberOfCells}
        color={color}
        key={i}
      />
    );
  }

  return (
    <div>
      <h1>Etch A Sketch</h1>
      <div className="buttons">
        <button type="button" className="buttons-reset" onClick={resetHandler}>
          Reset Board
        </button>
        <button type="button" className="buttons-black" onClick={setBlack}>
          Black
        </button>
        <button type="button" className="buttons-random" onClick={randomColor}>
          Random Color
        </button>
        <button type="button" className="buttons-clear" onClick={clearHandler}>
          Clear Board
        </button>
      </div>
      <div className="etch" style={style}>
        {board}
      </div>
    </div>
  );
}
