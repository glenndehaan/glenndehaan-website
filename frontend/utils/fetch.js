export default class fetch {
    /**
     * Creates an instance
     */
    constructor(url, callback, token = false, json = true) {
        this.data = false;
        this.url = url;
        this.callback = callback;
        this.token = token;
        this.json = json;

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
                    this.data = this.json ? JSON.parse(xhr.responseText) : xhr.responseText;
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
