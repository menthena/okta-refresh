chrome.runtime.onInstalled.addListener(() => {
  const fiveMinutes = 5 * 60 * 1000;
  setInterval(() => {
    fetch("https://discovery.okta.com", { mode: "no-cors" });
  }, fiveMinutes);
});
