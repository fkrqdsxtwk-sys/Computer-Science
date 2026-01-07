document.addEventListener("DOMContentLoaded", () => {
  const byId = (id) => document.getElementById(id);

  const dnsMap = {
    "example.com": "93.184.216.34",
    "google.com": "142.250.190.14",
    "wikipedia.org": "208.80.154.224"
  };

  const themeBtn = byId("themeBtn");
  const internetInfoOut = byId("internetInfoOut");
  const dnsInfoBtn = byId("dnsInfoBtn");
  const packetInfoBtn = byId("packetInfoBtn");
  const httpInfoBtn = byId("httpInfoBtn");
  const routerInfoBtn = byId("routerInfoBtn");

  const urlInput = byId("urlInput");
  const dnsBtn = byId("dnsBtn");
  const journeyBtn = byId("journeyBtn");
  const dnsOutput = byId("dnsOutput");
  const journeySteps = byId("journeySteps");

  const cloudInfoOut = byId("cloudInfoOut");
  const cloudInfoBtn = byId("cloudInfoBtn");
  const clientInfoBtn = byId("clientInfoBtn");
  const serverInfoBtn = byId("serverInfoBtn");
  const cloudVsLocalBtn = byId("cloudVsLocalBtn");
  const broadbandInfoBtn = byId("broadbandInfoBtn");

  const clientBtn = byId("clientBtn");
  const serverBtn = byId("serverBtn");
  const clientOutput = byId("clientOutput");
  const serverOutput = byId("serverOutput");

  const noteInput = byId("noteInput");
  const saveNoteBtn = byId("saveNoteBtn");
  const loadNoteBtn = byId("loadNoteBtn");
  const clearNoteBtn = byId("clearNoteBtn");
  const noteOutput = byId("noteOutput");

  const transInfoOut = byId("transInfoOut");
  const simplexBtn = byId("simplexBtn");
  const halfBtn = byId("halfBtn");
  const fullBtn = byId("fullBtn");
  const errorCheckInfoBtn = byId("errorCheckInfoBtn");

  const messageInput = byId("messageInput");
  const sendBtn = byId("sendBtn");
  const tamperBtn = byId("tamperBtn");
  const clearBtn = byId("clearBtn");
  const sendOutput = byId("sendOutput");
  const logList = byId("logList");

  const chips = byId("chips");
  const orderBox = byId("orderBox");
  const gameOut = byId("gameOut");
  const shuffleGameBtn = byId("shuffleGameBtn");
  const resetGameBtn = byId("resetGameBtn");

  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  themeBtn.addEventListener("click", () => document.body.classList.toggle("dark"));

  dnsInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "DNS changes a website name (URL) into an IP address so your device can find the correct server.";
  });

  packetInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "Data is split into packets. Packets travel from your browser to the server and then back again to your browser.";
  });

  httpInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "HTTP/HTTPS are rules for web communication. Your browser requests a page and the server sends it back.";
  });

  routerInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "Routers move packets between networks. Packets may pass through many routers before reaching the server.";
  });

  dnsBtn.addEventListener("click", () => {
    const url = (urlInput.value || "").trim().toLowerCase();
    if (!url) { dnsOutput.textContent = "Type a URL first."; return; }
    const ip = dnsMap[url] || ("192.0.2." + (Math.floor(Math.random() * 200) + 10));
    dnsOutput.textContent = `${url} → ${ip}`;
  });

  journeyBtn.addEventListener("click", () => {
    const steps = [
      "1) You type a URL in the browser.",
      "2) Browser asks DNS for the IP address.",
      "3) Packets go to your local router.",
      "4) Packets travel through many routers on the internet.",
      "5) Server receives the request and sends data back.",
      "6) Browser rebuilds the page and shows it."
    ];
    journeySteps.innerHTML = steps.map(s => `<li>${s}</li>`).join("");
  });

  cloudInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Cloud computing means using servers on the internet to store data and run services that users can access from anywhere.";
  });

  clientInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Client-side happens in your browser (HTML, CSS, JavaScript). It controls what you see and how the page reacts.";
  });

  serverInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Server-side happens on a server. Servers store data and send results to users. Hosting a website online is server-side.";
  });

  cloudVsLocalBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Cloud storage is on remote servers and is easy to access from different devices. Traditional storage is on your own device (hard drive/USB) and is not automatically shared.";
  });

  broadbandInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Broadband is a fast internet connection. Examples: fiber (fast/stable), cable (shared speeds), and 5G (wireless mobile internet).";
  });

  clientBtn.addEventListener("click", () => {
    clientOutput.textContent = `Client-side update: ${new Date().toLocaleTimeString()}`;
  });

  serverBtn.addEventListener("click", () => {
    const data = { status: "OK", time: new Date().toLocaleTimeString() };
    serverOutput.textContent = `Server reply (simulated): ${data.status} at ${data.time}`;
  });

  const NOTE_KEY = "site_note";
  saveNoteBtn.addEventListener("click", () => {
    const t = (noteInput.value || "").trim();
    if (!t) { noteOutput.textContent = "Type a note first."; return; }
    localStorage.setItem(NOTE_KEY, t);
    noteOutput.textContent = "Saved.";
  });

  loadNoteBtn.addEventListener("click", () => {
    const t = localStorage.getItem(NOTE_KEY);
    noteOutput.textContent = t ? `Saved note: ${t}` : "No saved note found.";
  });

  clearNoteBtn.addEventListener("click", () => {
    localStorage.removeItem(NOTE_KEY);
    noteOutput.textContent = "Deleted.";
    noteInput.value = "";
  });

  simplexBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Simplex is one-way only. Example: TV broadcast sends to you.";
  });

  halfBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Half-duplex is two-way, but not at the same time. Example: walkie-talkies.";
  });

  fullBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Full-duplex is two-way at the same time. Example: phone calls and most internet use.";
  });

  errorCheckInfoBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Error checking uses a check value. Sender and receiver compare check values. If they don’t match, an error is detected.";
  });

  function checksum(message) {
    let sum = 0;
    for (let i = 0; i < message.length; i++) sum += message.charCodeAt(i);
    return sum % 256;
  }

  function addLog(text) {
    const li = document.createElement("li");
    li.textContent = text;
    logList.prepend(li);
    const items = logList.querySelectorAll("li");
    if (items.length > 12) items[items.length - 1].remove();
  }

  let lastPacket = null;

  sendBtn.addEventListener("click", () => {
    const msg = (messageInput.value || "").trim();
    if (!msg) { sendOutput.textContent = "Type a message first."; return; }
    const check = checksum(msg);
    lastPacket = { msg, check };
    sendOutput.textContent = `Sent "${msg}" | check=${check} | received OK`;
    addLog(`Sent "${msg}" (check=${check}) → OK`);
  });

  tamperBtn.addEventListener("click", () => {
    if (!lastPacket) { sendOutput.textContent = "Send a message first."; return; }
    const tampered = lastPacket.msg + "!";
    const newCheck = checksum(tampered);
    if (newCheck !== lastPacket.check) {
      alert("ERROR: Data changed during transfer (check mismatch).");
      sendOutput.textContent = `ERROR detected | expected ${lastPacket.check}, got ${newCheck}`;
      addLog(`Tamper detected: expected ${lastPacket.check}, got ${newCheck}`);
    } else {
      sendOutput.textContent = "No error detected.";
    }
  });

  clearBtn.addEventListener("click", () => {
    logList.innerHTML = "";
    lastPacket = null;
    messageInput.value = "";
    sendOutput.textContent = "Cleared.";
  });

  const correctOrder = [
    "Type URL in browser",
    "DNS finds IP address",
    "Packets go to local router",
    "Packets travel through routers",
    "Server sends response packets",
    "Browser shows the webpage"
  ];

  let chosen = [];
  let score = 0;

  function renderGame() {
    chips.innerHTML = "";
    orderBox.innerHTML = "";
    correctOrderShuffled().forEach(label => {
      const btn = document.createElement("div");
      btn.className = "chip";
      btn.textContent = label;
      btn.addEventListener("click", () => pickStep(label, btn));
      chips.appendChild(btn);
    });
    updateGameOut();
  }

  function correctOrderShuffled() {
    const arr = correctOrder.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function pickStep(label, el) {
    if (el.dataset.used === "1") return;

    const expected = correctOrder[chosen.length];
    if (label !== expected) {
      chosen = [];
      score = Math.max(0, score - 1);
      orderBox.innerHTML = "";
      document.querySelectorAll(".chip").forEach(c => c.dataset.used = "0");
      updateGameOut("Wrong order — reset.");
      return;
    }

    el.dataset.used = "1";
    chosen.push(label);

    const li = document.createElement("li");
    li.textContent = label;
    orderBox.appendChild(li);

    if (chosen.length === correctOrder.length) {
      score += 2;
      updateGameOut("Perfect! +2 points.");
      chosen = [];
      setTimeout(() => {
        orderBox.innerHTML = "";
        renderGame();
      }, 700);
      return;
    }

    updateGameOut();
  }

  function updateGameOut(extra) {
    gameOut.textContent = extra ? `Score: ${score} — ${extra}` : `Score: ${score}`;
  }

  shuffleGameBtn.addEventListener("click", () => renderGame());

  resetGameBtn.addEventListener("click", () => {
    chosen = [];
    score = 0;
    orderBox.innerHTML = "";
    renderGame();
    updateGameOut("Reset.");
  });

  renderGame();
});
