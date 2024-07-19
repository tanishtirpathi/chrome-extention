// Create the timer element
const timerElement = document.createElement("div");
timerElement.style.position = "fixed";
timerElement.style.top = "10px";
timerElement.style.left = "10px";
timerElement.style.height = "20px";
timerElement.style.padding = "5px 10px";
timerElement.style.cursor = "pointer";
timerElement.style.backgroundColor = "#143f4f";
timerElement.style.color = "#ffffea";
timerElement.style.border = "none";
timerElement.style.borderRadius = "5px";
timerElement.style.zIndex = "1000";
timerElement.style.fontFamily = "sans-serif";
timerElement.style.fontSize = "18px";
timerElement.style.lineHeight = "20px";
document.body.appendChild(timerElement);

let secondsSpent = 0;

const updateTimer = () => {
  secondsSpent++;
  const minutes = Math.floor(secondsSpent / 60);
  const seconds = secondsSpent % 60;
  timerElement.textContent = `Time spent: ${minutes}m ${seconds}s`;
};

// Update the timer every second
setInterval(updateTimer, 1000);
