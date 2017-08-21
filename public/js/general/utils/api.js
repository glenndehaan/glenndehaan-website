export default class api {

    /**
     * Creates an instance
     */
    constructor(url, callback) {
        this.data = false;
        this.url = url;
        this.callback = callback;

        this.getApiData();
    }

    getApiData() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    this.data = JSON.parse(xhr.responseText);
                    this.callback(this.data.projects);
                } else {
                    console.error(xhr);
                }
            }
        };

        xhr.open("GET", this.url, true);
        xhr.send();
    }
}
