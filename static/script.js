console.log('SkpGRU1SS05LSkZVNFMyS0laS1ZLVVpTSk5FVlVSQ0ZLNUtWVVUyS0paQ1ZNVktTSU5ERVVOS0xLWktWS01TSUpKRkVJUktMS1pGVktTS09JUkNWS1ZDVEpSRlZFUTJWR0pLVEVUS0tLSkRFS1IyV0tOR0VXV1NHS1pFVkVNU0xKSkpFV1ZTSEtaQlZJU1NTSVpMRktVSlNLNUZFNFIyV0k1S0VXU1NIS1pEVUtTMlNHSkxVV1RTSElWS1ZPVTJESk5ORUdWU0ZKVkpVWVNTS0pKQ1VPVlNLSzVGVktXU0dKRkpWR1YySktaR0VLTVNWSkpKVVdOS0dJVTJGRU1TWEpFMlVVVkNGS01aRVdTU0tJTkNVV1VaU0tSRkU0VENWS1ZLRkdTQ0pLWkdGTVQyVkdKRUVVVFNPSVZEVk1VMklKSkxFVVZTQktOSlVXU1NDSU5MRTZWU1RLUkZGRVJTV0pWSlZHVjJLSVpGRk1SMlJHSkZFWVNTSElWR1ZHTVNXSk5IRUdSS1hKWkZVT1NLMkk1TEVPVkpTS1pGRU1UQ0ZLNUpFV1dDTEpWTkVLVktVSU5GVVNWU0RLVkxWS1dTVEpOSkVNUkpVS1JCVk1TWlZKTkRFT1VSU0pKRlZVUjJHSlZKVVdWU0hKSkNVS1ZLVUtOSFVTVlNES1pHVktNU0pKSkhFV1ZTVktKRlZRUzJPSVpERTJVMkxHSkVVNFRDRkdaTEZHVkNMS0pDVk1SS1NLTkxVV1ZTS0taRFZNVTJNSTVMRU1SU05LWkZWT1MyT0laQ1ZTVTJUSkJFVk1SU1dJVkdWR1dDSkdWREVLVjJTSk5LRVVXU0dLVkdWR01TWEpFMlVZUktQS1pGRkdTWlZJWkNUSVZDRElaRlVNU1NGSzVMRUdUQ0pKSkJWTVNLTktJMlVRVkpXS0U2VDJQSjU=');
const SHOW_HINT = true;
if (SHOW_HINT) {
  document.getElementById('join-hint').classList.add('show');
}

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
    }, 1000);
  }, 5000);

});
