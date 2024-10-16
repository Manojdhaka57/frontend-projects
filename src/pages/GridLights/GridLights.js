import React, { useState } from "react";
import "./GridLights.css";
const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={isDisabled}
      className={filled ? "cell cell-activated" : "cell"}
    ></button>
  );
};
const GridLights = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    let timer = setInterval(() => {
      setSelectedCells((originalSelectedCells) => {
        let newSelectedCells = originalSelectedCells.slice();
        newSelectedCells.pop();
        if (newSelectedCells.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newSelectedCells;
      });
    }, 300);
  };
  const handleOnCellClick = (index) => {
    let newSelectedCells = [...selectedCells, index];
    setSelectedCells(newSelectedCells);

    //* deactivate
    if (newSelectedCells.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  return (
    <div className="grid-lights-wrapper">
      <div
        className="grid-lights"
        style={{
          gridTemplateColumns: `repeat(${config[0].length},1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={selectedCells.includes(index)}
              onClick={() => handleOnCellClick(index)}
              isDisabled={selectedCells.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
