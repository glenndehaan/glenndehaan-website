export default class github {

    /**
     * Creates an instance
     */
    constructor(url, token, callback) {
        this.data = false;
        this.url = url;
        this.token = token;
        this.callback = callback;

        this.getApiData();
    }

    getApiData() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    this.data = JSON.parse(xhr.responseText);
                    this.callback(this.data);
                } else {
                    console.error(xhr);
                }
            }
        };

        xhr.open("GET", this.url, true);
        xhr.setRequestHeader("Authorization", `token ${this.token}`);
        xhr.send();
    }
}
