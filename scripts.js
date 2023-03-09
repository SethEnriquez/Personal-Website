// Smooth Transition
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}


const toggleAGSFull = document.getElementById("EXP-AGS-Full");
const AGSFullRes = document.getElementById("EXP-AGS-Full-responsibilities");

AGSFullRes.style.display = "none";

toggleAGSFull.addEventListener("click", function() {
if (AGSFullRes.style.display === "none") {
  AGSFullRes.style.display = "block";
  toggleAGSFull.textContent = "Hide Responsibilities";
} else {
AGSFullRes.style.display = "none";
  toggleAGSFull.textContent = "Show Responsibilities";
  }
});


const toggleAGSCoop = document.getElementById("EXP-AGS-Coop");
const AGSCoopRes = document.getElementById("EXP-AGS-Coop-responsibilities");

AGSCoopRes.style.display = "none";

toggleAGSCoop.addEventListener("click", function() {
if (AGSCoopRes.style.display === "none") {
  AGSCoopRes.style.display = "block";
  toggleAGSCoop.textContent = "Hide Responsibilities";
} else {
AGSCoopRes.style.display = "none";
  toggleAGSCoop.textContent = "Show Responsibilities";
  }
});


const toggleReitmans = document.getElementById("EXP-Reitmans");
const ReitmansRes = document.getElementById("EXP-Reitmans-responsibilities");

ReitmansRes.style.display = "none";

toggleReitmans.addEventListener("click", function() {
if (ReitmansRes.style.display === "none") {
  ReitmansRes.style.display = "block";
  toggleReitmans.textContent = "Hide Responsibilities";
} else {
  ReitmansRes.style.display = "none";
toggleReitmans.textContent = "Show Responsibilities";
  }
});


const toggleSeneca = document.getElementById("EXP-Seneca");
const SenecaRes = document.getElementById("EXP-Seneca-responsibilities");

SenecaRes.style.display = "none";

toggleSeneca.addEventListener("click", function() {
if (SenecaRes.style.display === "none") {
  SenecaRes.style.display = "block";
  toggleSeneca.textContent = "Hide Responsibilities";
} else {
  SenecaRes.style.display = "none";
toggleSeneca.textContent = "Show Responsibilities";
  }
});


const toggleAVComm = document.getElementById("EXP-AVComm");
const AVCommRes = document.getElementById("EXP-AVComm-responsibilities");

AVCommRes.style.display = "none";

toggleAVComm.addEventListener("click", function() {
if (AVCommRes.style.display === "none") {
  AVCommRes.style.display = "block";
  toggleAVComm.textContent = "Hide Responsibilities";
} else {
  AVCommRes.style.display = "none";
  toggleAVComm.textContent = "Show Responsibilities";
  }
});


const togglePedalheads = document.getElementById("EXP-Pedalheads");
const PedalheadsRes = document.getElementById("EXP-Pedalheads-responsibilities");

PedalheadsRes.style.display = "none";

togglePedalheads.addEventListener("click", function() {
if (PedalheadsRes.style.display === "none") {
  PedalheadsRes.style.display = "block";
  togglePedalheads.textContent = "Hide Responsibilities";
} else {
  PedalheadsRes.style.display = "none";
togglePedalheads.textContent = "Show Responsibilities";
  }
});


const toggleBestBuy = document.getElementById("EXP-BestBuy");
const BestBuyRes = document.getElementById("EXP-BestBuy-responsibilities");

BestBuyRes.style.display = "none";

toggleBestBuy.addEventListener("click", function() {
if (BestBuyRes.style.display === "none") {
  BestBuyRes.style.display = "block";
  toggleBestBuy.textContent = "Hide Responsibilities";
} else {
  BestBuyRes.style.display = "none";
  toggleBestBuy.textContent = "Show Responsibilities";
  }
});


const toggleACSA = document.getElementById("EXP-ACSA");
const ACSARes = document.getElementById("EXP-ACSA-responsibilities");

ACSARes.style.display = "none";

toggleACSA.addEventListener("click", function() {
if (ACSARes.style.display === "none") {
  ACSARes.style.display = "block";
  toggleACSA.textContent = "Hide Responsibilities";
} else {
  ACSARes.style.display = "none";
  toggleACSA.textContent = "Show Responsibilities";
  }
});