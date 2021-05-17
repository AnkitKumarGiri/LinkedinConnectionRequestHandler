import {automateRequestHandling} from './content';

const form = document.querySelector(".form-data");
const connection_count_thresh = document.querySelector("cnt-thresh");

const handleSubmit = async e => {
    e.preventDefault();
    automateRequestHandling(connection_count_thresh);
    console.log(connection_count_thresh);
}

form.addEventListener("submit", e => handleSubmit(e));
