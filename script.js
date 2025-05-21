document.addEventListener("DOMContentLoaded", () => {
  fetch("https://yt-api-0idm.onrender.com/latest_video")
    .then((res) => res.json())
    .then((data) => {
      const videoId = data.items[0].id.videoId;
      const title = data.items[0].snippet.title;
      const link = `https://youtube.com/watch?v=${videoId}`;
      const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
      const preview = document.getElementById("yt-preview");
      const img = document.getElementById("thumbnail");

      if (img) {
        img.src = thumbnail;
      }

      if (preview) {
        preview.href = link;
        preview.textContent = `${title}`;
      }
    })
    .catch((err) => {
      console.error("Failed to load video:", err);
      const preview = document.getElementById("yt-preview");
      if (preview) preview.textContent = "Failed to load video.";
    });
});
