
const rand = (m, M) => Math.random() * (M - m) + m;
let length = students.length;
const start_spin = document.querySelector(".spin");
const student = document.querySelector(".selectedStudent");
const context = document.querySelector(".wheel").getContext("2d");
const diameter = context.canvas.width;
const studentId = document.querySelector(".id");
const rad = diameter / 2;
const PI = Math.PI;
const circle = 2 * PI;
const arc = circle / length;
// let ehe = [];
const friction = 0.995; // 0.995=soft, 0.99=mid, 0.98=hard
let angVelocity = 0; // Angular velocity
let angR = 0; // Angle in radians

const getIndex = () => Math.floor(length - (angR / circle) * length) % length;

const drawSector = (sector, i) => {
  const ang = arc * i;
  context.save();
  // COLOR
  context.beginPath();
  context.fillStyle = `#${sector.color}`;
  context.moveTo(rad, rad);
  context.arc(rad, rad, rad, ang, ang + arc);
  context.lineTo(rad, rad);
  context.fill();
  // TEXT
  context.translate(rad, rad);
  context.rotate(ang + arc / 2);
  context.textAlign = "right";
  context.fillStyle = "#fff";
  context.font = "bold 30px sans-serif";
  context.fillText(sector.name, rad - 10, 10);
  //
  context.restore();
};

const rotate = () => {
  const sector = students[getIndex()];
  context.canvas.style.transform = `rotate(${angR - PI / 2}rad)`;
  student.innerHTML = sector.name;
  studentId.innerHTML = sector.id;
  start_spin.style.background = `#${sector.color}`;
};

const frame = () => {
  if (!angVelocity) return;
  angVelocity *= friction; // Decrement velocity by friction
  if (angVelocity < 0.002) angVelocity = 0; // Bring to stop
  angR += angVelocity; // Update angle
  angR %= circle; // Normalize angle
  rotate();
};

const engine = () => {
  frame();
  requestAnimationFrame(engine);
};

// INIT
fetch("http://localhost:8000/students/")
  .then((response) => response.json())
  .then((data) => {
    data.map((sector, i) => {
      drawSector(sector, i);
    });
  });

rotate(); // Initial rotation
engine(); // Start engine
start_spin.addEventListener("click", () => {
  if (!angVelocity) angVelocity = rand(0.25, 0.15);
});
console.log(angVelocity);
