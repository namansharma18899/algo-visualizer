// const graph = {
//   a: { b: 1, c: 1 },
//   b: { a: 1, c: 1, d: 1 },
//   c: { a: 1, b: 1, d: 1, e: 1 },
//   d: { b: 1, c: 1, e: 1, f: 1 },
//   e: { c: 1, d: 1, f: 1 },
//   f: { e: 1, d: 1 },
// };
var Visited = [
  ["false", "false", "false", "false"]
  ["false", "false", "false", "false"]
  ["false", "false", "false", "false"]
  ["false", "false", "false", "false"]
]
var graph = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
]
var Found = false
function FillCurrElement(x,y){
  console.log('X'+x+' Y'+y+' '+'Visited')
}

function VisualizePath( sourcex,sourcey,destinationx,destinationy) {
  if (Visited[[sourcex,sourcey]]=="false"){
    if (sourcex==destinationx && sourcey==destinationy){
      Found=true
      return true
    }
    if (sourcex<0 || sourcex>3 || sourcey<0 || sourcey>4){
      return false
    }
    Visited[[sourcex,sourcey]]="true"
    FillCurrElement( sourcex,sourcey)
    VisualizePath( sourcex+1,sourcey,destinationx,destinationy)
    VisualizePath( sourcex-1,sourcey,destinationx,destinationy)
    VisualizePath( sourcex,sourcey+1,destinationx,destinationy)
    VisualizePath( sourcex,sourcey-1,destinationx,destinationy)
  }
}


// const printTable = (table) => {
//     return Object.keys(table)
//       .map((vertex) => {
//         var { vertex: from, cost } = table[vertex];
//         return `${vertex}: ${cost} via ${from}`;
//       })
//       .join("\n");
//   };

//   const tracePath = (table, start, end) => {
//     var path = [];
//     var next = end;
//     while (true) {
//       path.unshift(next);
//       if (next === start) {
//         break;
//       }
//       next = table[next].vertex;
//     }

//     return path;
//   };

//   const formatGraph = (g) => {
//     const tmp = {};
//     Object.keys(g).forEach((k) => {
//       const obj = g[k];
//       const arr = [];
//       Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
//       tmp[k] = arr;
//     });
//     return tmp;
//   };

//   const dijkstra = (graph, start, end) => {
//     var map = formatGraph(graph);

//     var visited = [];
//     var unvisited = [start];
//     var shortestDistances = { [start]: { vertex: start, cost: 0 } };

//     var vertex;
//     while ((vertex = unvisited.shift())) {
//       // Explore unvisited neighbors
//       var neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));

//       // Add neighbors to the unvisited list
//       unvisited.push(...neighbors.map((n) => n.vertex));

//       var costToVertex = shortestDistances[vertex].cost;

//       for (let { vertex: to, cost } of neighbors) {
//         var currCostToNeighbor =
//           shortestDistances[to] && shortestDistances[to].cost;
//         var newCostToNeighbor = costToVertex + cost;
//         if (
//           currCostToNeighbor == undefined ||
//           newCostToNeighbor < currCostToNeighbor
//         ) {
//           // Update the table
//           shortestDistances[to] = { vertex, cost: newCostToNeighbor };
//         }
//       }

//       visited.push(vertex);
//     }

//     console.log("Table of costs:");
//     console.log(printTable(shortestDistances));

//     const path = tracePath(shortestDistances, start, end);

//     console.log(
//       "Shortest path is: ",
//       path.join(" -> "),
//       " with weight ",
//       shortestDistances[end].cost
//     );
//   };

//   dijkstra(graph, "a", "f");