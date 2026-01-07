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

  function setHTML(outEl, html) {
    outEl.innerHTML = html;
  }

  dnsInfoBtn.addEventListener("click", () => {
    setHTML(internetInfoOut,
      "<strong>DNS (Domain Name System)</strong> is how the internet turns a website name into a number address called an <strong>IP address</strong>. " +
      "Humans remember names like <strong>example.com</strong>, but computers need IP addresses to connect to the right server. " +
      "When you type a URL, your device asks a DNS server: “What IP matches this name?” The DNS server replies with the IP address, " +
      "and then your browser can send the request to the correct server. Without DNS, you would need to type long IP numbers instead of names."
    );
  });

  routerInfoBtn.addEventListener("click", () => {
    setHTML(internetInfoOut,
      "<strong>Routers</strong> move data between networks. Your home or school router is the first router your device usually talks to. " +
      "After that, your data travels through many other routers owned by internet providers. Each router decides the next best path to send the packet " +
      "until it reaches the server. If one path is busy or broken, routers can send traffic a different way. This is why the internet still works even when " +
      "some links fail."
    );
  });

  httpInfoBtn.addEventListener("click", () => {
    setHTML(internetInfoOut,
      "<strong>HTTP</strong> is a set of rules for web communication. Your browser uses HTTP to request a page (for example: “GET the homepage”), " +
      "and the server replies with data (HTML, images, etc.). <strong>HTTPS</strong> is HTTP with encryption, which helps protect privacy and security. " +
      "That means other people on the network cannot easily read or change the data while it is traveling."
    );
  });

  packetInfoBtn.addEventListener("click", () => {
    setHTML(internetInfoOut,
      "<strong>Packets</strong> are small pieces of data sent across the internet. Big data is split into packets so it can travel faster and more reliably. " +
      "Each packet can take a different route through routers, and they are put back together at the end. " +
      "If a packet is lost, the system can request it again. This helps webpages load even when the network is not perfect."
    );
  });

  dnsBtn.addEventListener("click", () => {
    const url = (urlInput.value || "").trim().toLowerCase();
    if (!url) {
      dnsOutput.textContent = "Type a URL first.";
      return;
    }
    const ip = dnsMap[url] || ("192.0.2." + (Math.floor(Math.random() * 200) + 10));
    dnsOutput.textContent = `${url} → ${ip}`;
  });

  journeyBtn.addEventListener("click", () => {
    const steps = [
      "1) You type a URL in the browser and press enter.",
      "2) The browser asks a DNS server for the IP address of the website.",
      "3) Your device sends packets to your local router (home/school).",
      "4) Routers forward packets across the internet through many networks.",
      "5) The web server receives the request and processes it.",
      "6) The server sends response packets back to your device.",
      "7) Your browser puts the packets together and shows the webpage."
    ];
    journeySteps.innerHTML = steps.map(s => `<li>${s}</li>`).join("");
  });

  cloudInfoBtn.addEventListener("click", () => {
    setHTML(cloudInfoOut,
      "<strong>Cloud computing</strong> means using powerful computers (servers) on the internet to store data and run services. " +
      "Instead of saving everything only on your own device, the cloud lets you access your work from different devices using a login and the internet. " +
      "Examples include online storage, online documents, and websites hosted on cloud servers. " +
      "Cloud is useful because it can handle many users at once and it can scale up when demand increases."
    );
  });

  clientInfoBtn.addEventListener("click", () => {
    setHTML(cloudInfoOut,
      "<strong>Client-side</strong> means the part that runs on the user’s device (the browser). " +
      "HTML builds the structure (headings, sections, buttons). CSS controls the design (colors, boxes, layout). " +
      "JavaScript controls interaction (when you click a button, the page changes). " +
      "Client-side is responsible for what the user sees and how the page reacts."
    );
  });

  serverInfoBtn.addEventListener("click", () => {
    setHTML(cloudInfoOut,
      "<strong>Server-side</strong> means the part that runs on a server, not on the user’s device. " +
      "Servers store data (databases, files) and send information back to users. " +
      "When a website is hosted online (for example GitHub Pages), the website files are stored on remote servers. " +
      "This is server-side hosting because anyone can access the site through a URL, even if your own laptop is turned off."
    );
  });

  cloudVsLocalBtn.addEventListener("click", () => {
    setHTML(cloudInfoOut,
      "<strong>Cloud storage vs Traditional storage</strong><br><br>" +
      "<strong>Traditional storage</strong> means saving files on your own device (hard drive, USB). It can work offline, but sharing is manual and a device can be lost or broken.<br>" +
      "<strong>Cloud storage</strong> means saving files on remote servers. It is easier to access from anywhere and easier to share, but it needs internet and good security settings.<br><br>" +
      "In real life, many people use both: local storage for quick access, and cloud storage for backup and sharing."
    );
  });

  broadbandInfoBtn.addEventListener("click", () => {
    setHTML(cloudInfoOut,
      "<strong>Broadband</strong> is a fast internet connection that is always available. Common types include:<br><br>" +
      "• <strong>Fiber</strong>: uses light in cables, usually very fast and stable.<br>" +
      "• <strong>Cable</strong>: uses TV cables, speeds can change when many people are online.<br>" +
      "• <strong>DSL</strong>: uses phone lines, usually slower than fiber.<br>" +
      "• <strong>5G</strong>: wireless mobile internet, speed depends on signal and location.<br><br>" +
      "Broadband matters because cloud apps, streaming, and online gaming need reliable speed."
    );
  });

  clientBtn.addEventListener("click", () => {
    const now = new Date().toLocaleTimeString();
    clientOutput.textContent = `Client-side: the browser updated this text at ${now}.`;
  });

  serverBtn.addEventListener("click", () => {
    const t = new Date().toLocaleTimeString();
    const fake = { status: "OK", time: t, place: "Cloud server" };
    serverOutput.textContent = `${fake.place} reply: status=${fake.status}, time=${fake.time}`;
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
    setHTML(transInfoOut,
      "<strong>Simplex</strong> means data travels in only one direction. " +
      "A device sends and the other device only receives. " +
      "Example: a TV broadcast sends a signal to your TV, but your TV does not send back on the same channel. " +
      "Simplex is good when you only need one-way communication."
    );
  });

  halfBtn.addEventListener("click", () => {
    setHTML(transInfoOut,
      "<strong>Half-duplex</strong> means data can travel both ways, but not at the same time. " +
      "One side sends, then the other side sends. " +
      "Example: walkie-talkies — one person talks while the other listens, then they switch. " +
      "Half-duplex saves resources but can be slower for conversations."
    );
  });

  fullBtn.addEventListener("click", () => {
    setHTML(transInfoOut,
      "<strong>Full-duplex</strong> means data travels both ways at the same time. " +
      "This is how phone calls work: you can talk and listen at the same time. " +
      "Most internet communication is full-duplex because the browser is sending requests while receiving responses. " +
      "Full-duplex is best for fast two-way communication."
    );
  });

  errorCheckInfoBtn.addEventListener("click", () => {
    setHTML(transInfoOut,
      "<strong>Error checking</strong> protects <strong>data integrity</strong> (keeping data correct). " +
      "The sender adds a check value that represents the message. The receiver calculates the check value again. " +
      "If both match, the data is likely correct. If they do not match, the receiver knows something changed during transfer. " +
      "Real networks use stronger methods like CRC, but this demo shows the idea clearly."
    );
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

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderGame() {
    chips.innerHTML = "";
    orderBox.innerHTML = "";
    chosen = [];
    shuffle(correctOrder).forEach(label => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.textContent = label;
      chip.addEventListener("click", () => pick(label, chip));
      chips.appendChild(chip);
    });
    gameOut.textContent = `Score: ${score}`;
  }

  function pick(label, chip) {
    const expected = correctOrder[chosen.length];
    if (label !== expected) {
      chosen = [];
      orderBox.innerHTML = "";
      score = Math.max(0, score - 1);
      gameOut.textContent = `Score: ${score} — Wrong order, try again.`;
      return;
    }

    chosen.push(label);
    const li = document.createElement("li");
    li.textContent = label;
    orderBox.appendChild(li);

    if (chosen.length === correctOrder.length) {
      score += 2;
      gameOut.textContent = `Score: ${score} — Perfect! You built the full packet journey.`;
      setTimeout(renderGame, 900);
    } else {
      gameOut.textContent = `Score: ${score}`;
    }
  }

  shuffleGameBtn.addEventListener("click", renderGame);

  resetGameBtn.addEventListener("click", () => {
    score = 0;
    renderGame();
    gameOut.textContent = `Score: ${score} — Reset.`;
  });

  renderGame();
});
