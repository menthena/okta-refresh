const refresh = () => {
  const fiveMinutes = 5 * 60 * 1000;
  setInterval(() => {
    fetch("https://discovery.okta.com", { mode: "no-cors" });
  }, fiveMinutes);
};

chrome.runtime.onStartup.addListener(refresh);
chrome.runtime.onInstalled.addListener(refresh);
