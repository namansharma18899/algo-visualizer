import React, { useState, useEffect } from "react";
import "./shuffle.css";

const ShuffleButton = ({ shuffleArray }) => (
  <button className="shuffle-button" onClick={shuffleArray}>
    Shuffle
  </button>
);

const NumberList = ({ numbers, swapPairs }) => (
  <ul className="number-list">
    {numbers.map((num, index) => (
      <li
        key={index}
        className={`number-item ${swapPairs.includes(index) ? "swap" : ""}`}
      >
        {num}
      </li>
    ))}
  </ul>
);

const Shuffle = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [shuffled, setShuffled] = useState(false);
  const [swapPairs, setSwapPairs] = useState([]);

  useEffect(() => {
    if (shuffled) {
      const swapInterval = setInterval(() => {
        if (swapPairs.length === 0) {
          clearInterval(swapInterval);
        } else {
          const [i, j] = swapPairs.splice(0, 2);
          const shuffledNumbers = [...numbers];
          [shuffledNumbers[i], shuffledNumbers[j]] = [
            shuffledNumbers[j],
            shuffledNumbers[i],
          ];
          setNumbers(shuffledNumbers);
        }
      }, 2000);
      return () => clearInterval(swapInterval);
    }
  }, [shuffled, swapPairs, numbers]);

  const shuffleArray = () => {
    if (!shuffled) {
      const shuffledNumbers = [...numbers];
      const swapPairs = [];

      for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNumbers[i], shuffledNumbers[j]] = [
          shuffledNumbers[j],
          shuffledNumbers[i],
        ];
        swapPairs.push(i, j);
      }

      setNumbers(shuffledNumbers);
      setSwapPairs(swapPairs);
      setShuffled(true);
    }
  };

  return (
    <div className="container">
      <ShuffleButton shuffleArray={shuffleArray} />
      <NumberList numbers={numbers} swapPairs={swapPairs} />
    </div>
  );
};

export default Shuffle;
