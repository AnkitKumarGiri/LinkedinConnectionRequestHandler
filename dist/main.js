const form = document.querySelector(".form-data");
const connection_count_thresh = document.querySelector(".cnt-thresh");

form.addEventListener("submit", async () => {
    console.log("clicked");

    // value of the threshold for accepting connection requests
    let conn_cnt_thresh = connection_count_thresh.value;
    chrome.storage.sync.set({ conn_cnt_thresh });
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
});
