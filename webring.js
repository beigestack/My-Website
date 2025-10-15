document.addEventListener("DOMContentLoaded", async () => {
  const hub = "https://maniksharma.xyz/webring";
  const sites_host = "https://maniksharma.xyz";

  // Get the parent site URL from iframe query param: ?site=https://example.com
  const params = new URLSearchParams(window.location.search);
  const current = params.get("site") || hub; // fallback to hub if not provided

  const container = document.querySelector(".frutiger-webring") || document.body;

  try {
    const res = await fetch(sites_host + "/sites.json");
    const sites = await res.json();

    const index = sites.indexOf(current);

    if (index === -1) {
      const msg = document.createElement("p");
      msg.textContent = "The webmaster hasn't added me to the Frutiger Aero webring yet >:(";
      container.appendChild(msg);
      return;
    }

    const nextBtn = container.querySelector("#top-right");
    const hubBtn = container.querySelector("#middle");
    const prevBtn = container.querySelector("#bottom-left");

    const navigateParent = (url) => {
      // Method 1: always navigate the parent page
      window.top.location.href = url;
    };

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateParent(sites[(index + 1) % sites.length]);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateParent(sites[(index - 1 + sites.length) % sites.length]);
      });
    }

    if (hubBtn) {
      hubBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateParent(hub);
      });
    }

  } catch (err) {
    console.error("Failed to load webring sites:", err);
    const msg = document.createElement("p");
    msg.textContent = "Failed to load webring sites.";
    container.appendChild(msg);
  }
});
