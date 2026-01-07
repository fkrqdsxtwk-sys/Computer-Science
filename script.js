document.addEventListener("DOMContentLoaded", () => {
  const dnsMap = {
    "example.com": "93.184.216.34",
    "google.com": "142.250.190.14",
    "wikipedia.org": "208.80.154.224"
  };

  let lastPacket = null;

  const byId = (id) => document.getElementById(id);

  const themeBtn = byId("themeBtn");

  const internetInfoOut = byId("internetInfoOut");
  const dnsInfoBtn = byId("dnsInfoBtn");
  const packetInfoBtn = byId("packetInfoBtn");
  const httpInfoBtn = byId("httpInfoBtn");

  const urlInput = byId("urlInput");
  const dnsBtn = byId("dnsBtn");
  const journeyBtn = byId("journeyBtn");
  const dnsOutput = byId("dnsOutput");

  const cloudInfoOut = byId("cloudInfoOut");
  const cloudInfoBtn = byId("cloudInfoBtn");
  const clientInfoBtn = byId("clientInfoBtn");
  const serverInfoBtn = byId("serverInfoBtn");
  const cloudVsLocalBtn = byId("cloudVsLocalBtn");

  const clientBtn = byId("clientBtn");
  const serverBtn = byId("serverBtn");
  const clientOutput = byId("clientOutput");
  const serverOutput = byId("serverOutput");

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

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  dnsInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "DNS is like a phonebook for the internet. It changes a website name (URL) into an IP address so your device can find the right server.";
  });

  packetInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "Packet journey: Browser → DNS finds IP → your router sends packets through many routers → server receives request → server sends packets back → browser shows the page.";
  });

  httpInfoBtn.addEventListener("click", () => {
    internetInfoOut.textContent =
      "HTTP is a set of rules for sending and receiving web data. Your browser uses HTTP/HTTPS to request a page, and the server sends the page back.";
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
    alert("Journey: Browser → DNS (find IP) → Router(s) → Server → Response back to Browser");
  });

  cloudInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Cloud computing means using servers on the internet to store data and run services. You access it using a connection, not only from your own device.";
  });

  clientInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Client-side happens in your browser. HTML builds the page, CSS makes it look good, and JavaScript makes it interactive.";
  });

  serverInfoBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Server-side happens on a server. The server stores data and sends results to users. Cloud hosting is server-side because the files are on remote servers.";
  });

  cloudVsLocalBtn.addEventListener("click", () => {
    cloudInfoOut.textContent =
      "Cloud storage is on remote servers and can be reached from different devices. Traditional storage is on your own device (like a hard drive or USB) and is not automatically shared.";
  });

  clientBtn.addEventListener("click", () => {
    clientOutput.textContent = `Client-side: this text was updated at ${new Date().toLocaleTimeString()}.`;
  });

  serverBtn.addEventListener("click", () => {
    const t = new Date().toLocaleTimeString();
    serverOutput.textContent = `Server-side (simulated): cloud server replied at ${t}.`;
  });

  simplexBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Simplex means one-way only. Example: a TV broadcast sends data to you, but you do not send back on the same channel.";
  });

  halfBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Half-duplex means two-way but not at the same time. Example: walkie-talkies—one person talks, then the other replies.";
  });

  fullBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Full-duplex means two-way at the same time. Example: phone calls and most internet connections.";
  });

  errorCheckInfoBtn.addEventListener("click", () => {
    transInfoOut.textContent =
      "Error checking uses a check value. The sender calculates it and sends it with the data. The receiver calculates it again. If they do not match, an error is detected.";
  });

  sendBtn.addEventListener("click", () => {
    const msg = (messageInput.value || "").trim();
    if (!msg) {
      sendOutput.textContent = "Type a message first.";
      return;
    }
    const check = checksum(msg);
    lastPacket = { msg, check };

    sendOutput.textContent = `Sent "${msg}" | check=${check} | received OK`;
    addLog(`Sent "${msg}" (check=${check}) → OK`);
  });

  tamperBtn.addEventListener("click", () => {
    if (!lastPacket) {
      sendOutput.textContent = "Send a message first.";
      return;
    }
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
});
