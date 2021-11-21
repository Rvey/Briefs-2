const sectors = JSON.parse(sessionStorage.getItem("students"));

const rand = (m, M) => Math.random() * (M - m) + m;
const length = sectors.length;
const start_spin = document.querySelector("#spin");
const student = document.querySelector(".selectedStudent")
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.98; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians

const getIndex = () => Math.floor(length - (ang / TAU) * length) % length;

const drawSector = (sector, i) => {
  const ang = arc * i;
  ctx.save();
  // COLOR
  ctx.beginPath();
  ctx.fillStyle = `#${sector.color}`
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText(sector.name, rad - 10, 10);
  //
  ctx.restore();
};

const rotate = () => {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
//   start_spin.textContent = sector.name;
  student.value = sector.name
  start_spin.style.background = `#${sector.color}`;
};

const frame = () => {
  if (!angVel) return;
  angVel *= friction; // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0; // Bring to stop
  ang += angVel; // Update angle
  ang %= TAU; // Normalize angle
  rotate();
};

const engine = () => {
  frame();
  requestAnimationFrame(engine);
};

// INIT
sectors.forEach(drawSector);
rotate(); // Initial rotation
engine(); // Start engine
start_spin.addEventListener("click", () => {
  if (!angVel) angVel = rand(0.25, 0.35);
});
