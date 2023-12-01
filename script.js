const handler = () => {
  if (sessionStorage.getItem(`_${chrome.runtime.id}_initialized`)) {
    return;
  }

  const selectTerm = (term) => {
    const termSelecter = document.getElementsByName("search_term")[0];
    if (termSelecter && termSelecter.value === "" && term) {
      termSelecter.value = term;
      termSelecter.dispatchEvent(new Event("change"));
    }

    sessionStorage.setItem(`_${chrome.runtime.id}_initialized`, term);
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
