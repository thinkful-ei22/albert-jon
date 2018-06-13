// Array
let turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// Use the filter method to remove any items where the turtle moves backwards or to the right
turtleMove = turtleMove.filter( move => move[0] >= 0 && move[1] >= 0);

// Use the map to create a new array containing how many steps the turtle makes in total w/ each movement
turtleSteps = turtleMove.map(move => move[0] + move[1]);

// Use the forEach method to log out how many steps the turtle took in each case.
turtleSteps.forEach(output => console.log(output));