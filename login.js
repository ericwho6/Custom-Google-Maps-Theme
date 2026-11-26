// Paste your hash here after step 3
const VALID_HASH = "1ec77d1303d633a288b790df8d22f57147863cc5e0b09c68a172239293f416d1";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function loadMaps() {
  const s = document.createElement("script");
  s.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_X9VVBXoDhmU2Waxbpi3a03nMh12gAqI&callback=initMap&loading=async";
  s.async = true;
  document.head.appendChild(s);
}

function unlock() {
  document.getElementById("login").style.display = "none";
  loadMaps();
}

async function tryLogin() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value;
  const hash = await sha256(user + ":" + pass);

  if (hash === VALID_HASH) {
    sessionStorage.setItem("unlocked", "yes");
    unlock();
  } else {
    document.getElementById("loginError").textContent = "Wrong username or password.";
  }
}

document.getElementById("loginBtn").addEventListener("click", tryLogin);
document.getElementById("pass").addEventListener("keydown", (e) => {
  if (e.key === "Enter") tryLogin();
});

// Skip the login on reload within the same browser session
if (sessionStorage.getItem("unlocked") === "yes") unlock();