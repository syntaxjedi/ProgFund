var canvas;
var context;

// Grab the canvas element on the page
canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

// draws the character on the canvas
function drawCharacter(){
  //empties sub-paths and begins a new path
  context.beginPath();

  //moves the starting point of the path to x,x coordinates
  context.moveTo(118, 118);

  //connects the path/sub-path to the x,x coordinates with a straight line
  context.lineTo(227, 73);

  //next 4 lines, bezierCurveTo adds a cubic bezier curve to a path
  context.bezierCurveTo(209, 30, 167, 0, 118, 0);
  context.bezierCurveTo(53, 0, 0.5, 53, 0, 118);
  context.bezierCurveTo(0, 183, 53, 235, 118, 235);
  context.bezierCurveTo(159, 235, 195, 215, 216, 183);

  //connects the path/sub-path to the x,x coordinates with a straight line
  context.lineTo(118, 118);

  //moves pen back to starting point of current sub-path
  context.closePath();

  //specifies color or style to use inside the shape
  context.fillStyle = "rgb(249, 243, 161)";

  //fills current path using specified fillstyle, default is solid black
  context.fill();

  //strokes current or given path with current stroke style, image border will not show up without this
  context.stroke();

  // Draw the eye
  context.beginPath();

  //adds arc to path centered at x,y with radius r at starting angle ending with ending angle and going in given direction (x, y, radius, start angle, end angle, anticlockwise)
  context.arc(118, 60, 10, 0, 2 * Math.PI, false);

  //specifies color or style to use inside the shape
  context.fillStyle = "rgb(0,0,0)";

  //fills current path using specified fillstyle, default is solid black
  context.fill();
}

// goes to, and runs, the drawCharacter function
//drawCharacter();
