const config = require("../../config/config");

class BaseController {
    constructor() {
        this.baseConfig = {
            config: config,
            protocol: '',
            hostname: '',
            baseUrl: ''
        }
    }

    /**
     * Returns the complete config base + page specific
     *
     * @param request
     * @param pageSpecificConfig
     */
    mergePageConfig(request, pageSpecificConfig) {
        this.baseConfig.hostname = request.get('host');
        this.baseConfig.protocol = request.protocol;
        this.baseConfig.baseUrl = `${request.protocol}://${request.get('host')}${config.application.basePath}`;

        return Object.assign(this.baseConfig, pageSpecificConfig);
    }
}

module.exports = BaseController;
