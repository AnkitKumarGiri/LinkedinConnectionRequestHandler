const form = document.querySelector(".form-data");
const connection_count_thresh = document.querySelector(".cnt-thresh");
const ignore_request = document.querySelector(".ignore-request");

form.addEventListener("submit", async () => {
    // value of the threshold for accepting connection requests
    let conn_cnt_thresh = connection_count_thresh.value;
    // select whether to ignore requests with lesser mutual connections
    let ignore_request_flag = ignore_request.checked;

    chrome.storage.sync.set({ conn_cnt_thresh, ignore_request_flag });
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
});
