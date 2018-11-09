const fetch = require('node-fetch');
const baseController = require('./BaseController');
const config = require('../../config/config');

class GithubController extends baseController {
    constructor() {
        super();
    }

    /**
     * Action to get the github items
     *
     * @param req
     * @param res
     */
    indexAction(req, res) {
        fetch(config.github.url, {headers: { 'Authorization': `token ${config.github.token}` }})
            .then(res => res.json())
            .then(json => this.jsonResponse(res, 200, json));
    }
}

module.exports = new GithubController();
