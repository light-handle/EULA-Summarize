const apiKey = "OPEN_API_KEY";

async function fetchSummary(licenseUrl) {
  const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
  const prompt = `Summarize the key points of the license agreement at the following URL: ${licenseUrl}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 1000,
      n: 1,
      stop: null,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  console.log(data.choices)
//   return data
  return data.choices[0].text.trim();
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSummary") {
      fetchSummary(request.licenseUrl)
        .then((summary) => sendResponse({ summary: summary }))
        .catch((error) => {
          console.error("Error fetching summary:", error);
          sendResponse({ summary: "Error fetching summary." });
        });
  
      return true; // Required to use sendResponse asynchronously
    }
  });

  
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "getSummary") {
//       // Placeholder text, replace this with the actual summary
//       sendResponse({ summary: "This is a summary of the license agreement." });
//     }
//   });
  