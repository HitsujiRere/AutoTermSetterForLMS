const handler = () => {
  const selectTerm = (term) => {
    const termSelecter = document.getElementsByName("search_term")[0];
    if (termSelecter && termSelecter.value === "" && term) {
      termSelecter.value = term;
      termSelecter.dispatchEvent(new Event("change"));
    }
  };

  chrome.storage.sync.get(["term"], (res) => {
    selectTerm(res.term);
  });
};

if (document.readyState !== "loading") {
  handler();
} else {
  document.addEventListener("DOMContentLoaded", handler);
}
