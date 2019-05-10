export default class fetch {
    /**
     * Creates an instance
     */
    constructor(url, callback, token = false) {
        this.data = false;
        this.url = url;
        this.callback = callback;
        this.token = token;

        this.get();
    }

    /**
     * Get data from API
     */
    get() {
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
        if(this.token) {
            xhr.setRequestHeader("Authorization", `token ${this.token}`);
        }
        xhr.send();
    }
}
