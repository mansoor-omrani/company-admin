import Locator from 'locustjs-locator';
import { AjaxBase } from './ajax';

class BaseService {
    constructor() {
        this.ajax = Locator.Instance.resolve(AjaxBase);
    }
    Post(url, data = null) {
        return this.ajax.Post(url, data);
    }
    Get(url, data = null) {
        return this.ajax.Get(url, data);
    }
}

export default BaseService;