// chrome.runtime.sendMessage({ action: "getSummary" }, (response) => {
//     document.getElementById("summary").innerText = response.summary;
//   });

// chrome.runtime.sendMessage({ action: "getSummary", licenseUrl: null }, (response) => {
//     document.getElementById("summary").innerText = response.summary;
//   });
  
// document.getElementById("summarizeButton").addEventListener("click", () => {
//     chrome.runtime.sendMessage({ action: "getSummary", licenseUrl: null }, (response) => {
//       document.getElementById("summary").innerText = response.summary;
//     });
//   });

document.getElementById("summarizeButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTabUrl = tabs[0].url;
      chrome.runtime.sendMessage({ action: "getSummary", licenseUrl: currentTabUrl }, (response) => {
        document.getElementById("summary").innerText = response.summary;
      });
    });
  });
  