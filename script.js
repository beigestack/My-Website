const container = document.getElementById("bubbles-container");
const bubbleCount = 25; // number of bubbles
const colors = ["#87CEFA", "#00BFFF", "#ADD8E6", "#B0E0E6"]; // Windows bubble shades
const vw = window.innerWidth;
const vh = window.innerHeight;

class Bubble {
  constructor() {
    this.el = document.createElement("div");
    this.el.classList.add("bubble");
    this.size = Math.random() * 40 + 20; // 20px to 60px
    this.el.style.width = `${this.size}px`;
    this.el.style.height = `${this.size}px`;
    this.el.style.background = colors[Math.floor(Math.random() * colors.length)];
    this.x = Math.random() * vw;
    this.y = Math.random() * vh;
    this.dx = (Math.random() - 0.5) * 2; // horizontal speed
    this.dy = (Math.random() - 0.5) * 2; // vertical speed
    container.appendChild(this.el);
    this.update();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // bounce off edges
    if (this.x <= 0 || this.x + this.size >= vw) this.dx *= -1;
    if (this.y <= 0 || this.y + this.size >= vh) this.dy *= -1;

    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;

    requestAnimationFrame(() => this.update());
  }
}

// create bubbles
for (let i = 0; i < bubbleCount; i++) {
  new Bubble();
}

// adjust for window resize
window.addEventListener("resize", () => {
  vw = window.innerWidth;
  vh = window.innerHeight;
});
