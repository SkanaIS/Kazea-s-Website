// 控制小提示是否显示（改成 false 即可关闭）
const SHOW_HINT = true;
if (SHOW_HINT) {
  document.getElementById('join-hint').classList.add('show');
}

// 打字机效果
const subtitleElement = document.getElementById('typing-subtitle');
const texts = [
  "drawing soft things • floating in pastel clouds",
  "coding in the dark • coffee in the morning",
  "frontend chaos • backend dreams",
  "building weird stuff since 2023",
  "late night commits • early morning bugs"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  subtitleElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    const delay = 60 + Math.random() * 60;
    setTimeout(type, delay);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 40 + Math.random() * 30);
  } else if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1800 + Math.random() * 700);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 600);
  }
}

type();

document.querySelectorAll('.stroke-path').forEach(path => {
  const length = path.getTotalLength();
  path.style.setProperty('--length', length);
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
});

document.querySelectorAll(".project-item").forEach(item => {
  const texts = JSON.parse(item.dataset.texts);
  const desc = item.querySelector(".project-desc");
  let index = 0;

  desc.textContent = texts[0];

  setInterval(() => {
    desc.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % texts.length;
      desc.textContent = texts[index];
      desc.classList.remove("fade-out");
    }, 1000); // 与 CSS transition 时间一致
  }, 5000); // 每3秒切换一次
});