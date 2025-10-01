document.addEventListener("DOMContentLoaded", async () => {
  const hub = "https://frutigeraerowebring.maniksharma.xyz";
  const current = window.location.origin;

  try {
    const res = await fetch(hub + "/sites.json");
    const sites = await res.json();
    const index = sites.indexOf(current);

    if (index === -1) {
      document.write("The webmaster hasn't added me to the frutiger aero webring yet >:(");
      return;
    }

    // Handlers
    function right(){
    document.getElementById("top-right").onclick = () =>
      window.location.href = sites[(index - 1 + sites.length) % sites.length];
    }

    function middle(){
    document.getElementById("middle").onclick = () =>
      window.location.href = hub;
    }

    function left(){
    document.getElementById("bottom-left").onclick = () =>
      window.location.href = sites[(index + 1) % sites.length];
    }
  } catch (err) {
    console.error("Failed to load webring sites:", err);
  }
});
