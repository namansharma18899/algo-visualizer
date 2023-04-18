import React, { useRef, useEffect ,useState} from 'react';
import p5 from 'p5';

function Sketch() {
  const canvasRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(500, 500).parent(canvasRef.current);
      };

      p.draw = () => {
        p.background(255); // set the background to white
        const boxSize = 1;
        const gridWidth = screenWidth/2;
        const gridHeight = screenHeight/2;

        // loop through the grid
        for (let i = 0; i < gridWidth; i++) {
          for (let j = 0; j < gridHeight; j++) {
            // calculate the x and y positions of each box
            const x = i * boxSize;
            const y = j * boxSize;

            // set the color of the box
            p.fill(0); // black

            // draw the box
            p.rect(x, y, boxSize, boxSize);
          }
        }
      };
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
}

export default Sketch;
