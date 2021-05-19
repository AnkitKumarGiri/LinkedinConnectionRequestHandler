
chrome.storage.sync.get("conn_cnt_thresh", ({ conn_cnt_thresh }) => {
    console.log(conn_cnt_thresh);

    // select all requests
    var all_requests = document.getElementsByClassName("invitation-card artdeco-list__item");
    
    for (const request of all_requests){
        
        // find number of mutual connections
        var mutual_conn_text = request.getElementsByClassName("member-insights__count")[0];
        var mutual_conn_count = "0";

        if (mutual_conn_text != null){
            mutual_conn_count = mutual_conn_text.innerText;
        }

        mutual_conn_count = mutual_conn_count.replace(/\D/g, '');

        console.log(mutual_conn_count);

        // hit accept or ignore based on condition
        var action_buttons = request.getElementsByClassName("invitation-card__action-btn");
        if (mutual_conn_count >= conn_cnt_thresh){
            action_buttons[1].click();
        }
        else{
            action_buttons[0].click();
        }
    }
});
