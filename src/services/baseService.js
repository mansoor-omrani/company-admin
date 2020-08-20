import ServiceHub from './serviceHub';

class BaseService {
    constructor() {
        this.ajax = ServiceHub.Ajax;
    }
    Post(url, data = null) {
        return this.ajax.Post(url, data);
    }
    Get(url, data = null) {
        return this.ajax.Get(url, data);
    }
}

export default BaseService;