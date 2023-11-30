const handler = () => {
  const termSelecter = document.getElementById("termSelecter");

  chrome.storage.sync.get(["term"], (res) => {
    termSelecter.value = res.term ?? "";
  });

  termSelecter.addEventListener("change", (event) => {
    const term = event.target.value;
    chrome.storage.sync.set({ term });
  });
};

if (document.readyState !== "loading") {
  handler();
} else {
  document.addEventListener("DOMContentLoaded", handler);
}
