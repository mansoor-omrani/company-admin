class AjaxBase {
    constructor() {
        if (this.constructor === AjaxBase) {
            throw 'AjaxBase is an abstract class. You cannot instantiate from it.'
        }
    }
    Post(url, data = null) { }
    Get(url, data = null) { }
}

export default AjaxBase