import React, { useState } from "react";
import "./shuffle.css";

const ShuffleButton = ({ shuffleArray }) => (
  <button className="shuffle-button" onClick={shuffleArray}>
    Shuffle
  </button>
);

const NumberList = ({ numbers }) => (
  <ul className="number-list">
    {numbers.map((num, index) => (
      <li key={index} className="number-item">
        {num}
      </li>
    ))}
  </ul>
);

const Shuffle = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [sIndex, setSIndex]= useState(9);

  const shuffleArray = () => {
    const shuffledNumbers = [...numbers];

    // for (let i = shuffledNumbers.length - 1; i > 0; i--) {
      var i = sIndex;
      const j = Math.floor(Math.random() * (i));
      [shuffledNumbers[i], shuffledNumbers[j]] = [
        shuffledNumbers[j],
        shuffledNumbers[i],
      ];
    // }
    setSIndex(i-1)
    setNumbers(shuffledNumbers);
  };

  return (
    <div className="container">
      <ShuffleButton shuffleArray={shuffleArray} />
      <NumberList numbers={numbers} />
    </div>
  );
};

export default Shuffle;
