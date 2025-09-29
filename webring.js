document.addEventListener("DOMContentLoaded", async function() {
  const hub = "https://maniksharma.xyz/webring";
  const current = window.location.origin;

  try {
    const res = await fetch(hub + "/sites.json");
    const sites = await res.json();
    const index = sites.indexOf(current);

    if (index === -1) {
      console.warn("This site is not listed in the Frutiger Aero Webring.");
      return;
    }

    const prevArea = document.getElementById("top-right");
    const hubArea = document.getElementById("middle");
    const nextArea = document.getElementById("bottom-left");

    if (prevArea) prevArea.href = sites[(index - 1 + sites.length) % sites.length];
    if (hubArea) hubArea.href = hub;
    if (nextArea) nextArea.href = sites[(index + 1) % sites.length];

  } catch (err) {
    console.error("Failed to load webring sites:", err);
  }
});
