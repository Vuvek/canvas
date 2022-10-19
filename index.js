var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//  Video 1 to 8

// Blue rectangle
// context.fillStyle = "pink";
// context.fillRect(50, 50, 50, 50);
// context.fillRect(150, 50, 120, 60);
// context.beginPath();
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.lineCap = "round";
// context.lineJoin = "round";
// context.moveTo(30, 70);
// context.lineTo(130, 120);
// context.lineTo(120, 20);
// context.lineTo(200, 100);
// context.lineTo(200, 10);
// context.stroke();

// video 8 shadow

// context.shadowColor = "blue";
// context.shadowOffsetX = 10;
// context.shadowOffsetY = 10;
// context.shadowBlur = 5;
// context.beginPath();
// context.moveTo(30, 30);
// context.lineTo(130, 120);
// context.lineWidth = 15;
// context.lineCap = "round";
// context.strokeStyle = "red";
// context.stroke();

// Video 10 arc
// arc(x, y, radius, startsAngle, endAngle, counterClockWise);

// var radian = Math.PI / 180;
// context.beginPath();
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.shadowColor = "blue";
// context.shadowOffsetX = 10;
// context.shadowOffsetY = 10;
// context.shadowBlur = 5;
// context.arc(75, 45, 50, 0 * radian, 180 * radian, false);
// context.stroke();

// Video 11 quadraticCurveTo
// quadraticCurveTo(controlX,controlY,endX,endY)

// context.beginPath();
// context.strokeStyle = "red";
// context.lineWidth = 4;
// context.moveTo(80, 80);
// context.quadraticCurveTo(70, 10, 10, 10);
// context.stroke();

// Video 12 bezier curve
// context.bezierCurveTo(controlx1,controly1,controlx2,controly2,endx,endy)

// Video 14 Rectangle
// context.rect(xCordinate, yCordinate, width, height)

// const Rect = (x, y, w, h) => {
//   context.strokeStyle = "red";
//   context.lineWidth = 4;
//   context.lineJoin = "round";
//   context.fillStyle = "blue";
//   context.rect(x, y, w, h);
//   context.stroke();
//   context.fill();
// };
// Rect(20, 20, 50, 50);

// // context.fillRect(xCordinate, yCordinate, width, height)

// const fillRect = (x, y, w, h) => {
//   context.fillStyle = "green";
//   const rect = context.fillRect(x, y, w, h);
// };
// fillRect(100, 20, 50, 50);

// // context.strokeRect(xCordinate, yCordinate, width, height)

// const strokeRect = (x, y, w, h) => {
//   context.lineWidth = 3;
//   context.strokeStyle = "blue";
//   context.lineJoin = "round";
//   context.strokeRect(x, y, w, h);
// };
// strokeRect(200, 20, 50, 50);

// // context.clearRect(xCordinate, yCordinate, width, height)

// const clearRect = (x, y, w, h) => {
//   context.clearRect(x, y, w, h);
//   console.log("chling");
//   strokeRect(200, 20, 50, 24);
//   strokeRect(200, 50, 50, 24);
// };

// const getCursorPosition = (canvas, event) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   console.log(x, y);
//   console.log(context.isPointInPath(x, y));
// };

// canvas.addEventListener("click", (e) => {
//   console.log("canvas clicked ", e);
//   getCursorPosition(canvas, e);
// });

const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill(circle);
console.log(circle, "circle is here");
const rectangle = new Path2D();
rectangle.rect(10, 40, 50, 50);
context.fillStyle = "red";
context.fill(rectangle);

// Listen for mouse moves
canvas.addEventListener("mousemove", (event) => {
  // Check whether point is inside circle
  if (context.isPointInPath(rectangle, 15, 45)) {
    console.log("inside circle i am", event);
    context.fillStyle = "green";
  } else {
    // console.log("outside circle i am");
    context.fillStyle = "red";
  }

  // Draw circle
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fill(circle);
  context.fillStyle = "red";
  context.fill(rectangle);
});
