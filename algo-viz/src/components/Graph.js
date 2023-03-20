const numRows = 10;
const numCols = 10;

export default function createGraph() {
  const graph = {};

  // Create nodes for each cell in the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const nodeId = `${row},${col}`;
      graph[nodeId] = [];
    }
  }

  // Add edges to adjacent cells
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const nodeId = `${row},${col}`;
      const neighbors = graph[nodeId];

      // Check left neighbor
      if (col > 0) {
        const leftId = `${row},${col - 1}`;
        neighbors.push(leftId);
        graph[leftId].push(nodeId);
      }

      // Check right neighbor
      if (col < numCols - 1) {
        const rightId = `${row},${col + 1}`;
        neighbors.push(rightId);
        graph[rightId].push(nodeId);
      }

      // Check top neighbor
      if (row > 0) {
        const topId = `${row - 1},${col}`;
        neighbors.push(topId);
        graph[topId].push(nodeId);
      }

      // Check bottom neighbor
      if (row < numRows - 1) {
        const bottomId = `${row + 1},${col}`;
        neighbors.push(bottomId);
        graph[bottomId].push(nodeId);
      }
    }
  }

  return graph;
}
