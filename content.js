// // This is just a placeholder; replace this with your own algorithm
// function detectLicenseAgreementAndGenerateSummary() {
//     return "Summary of the detected license agreement.";
//   }
  
//   chrome.runtime.sendMessage({ action: "updateSummary", summary: detectLicenseAgreementAndGenerateSummary() });
  
// This is just a placeholder; replace this with your own algorithm
function detectLicenseAgreementUrl() {
    return window.location.href;
  }
  
chrome.runtime.sendMessage({ action: "updateSummary", licenseUrl: detectLicenseAgreementUrl() });
