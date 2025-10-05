document.addEventListener("DOMContentLoaded", async () => {
  const hub = "https://maniksharma.xyz/webring";
  const sites_host = "https://maniksharma.xyz";
  const current = window.location.origin;

  try {
    const res = await fetch(sites_host + "/sites.json");
    const sites = await res.json();
    const index = sites.indexOf(current);

    if (index === -1) {
      document.write("The webmaster hasn't added me to the Frutiger Aero webring yet >:(");
      return;
    }

    const nextBtn = document.getElementById("top-right");
    const hubBtn = document.getElementById("middle");
    const prevBtn = document.getElementById("bottom-left");

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = sites[(index + 1) % sites.length];
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = sites[(index - 1 + sites.length) % sites.length];
      });
    }

    if (hubBtn) {
      hubBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = hub;
      });
    }

  } catch (err) {
    console.error("Failed to load webring sites:", err);
  }
});
