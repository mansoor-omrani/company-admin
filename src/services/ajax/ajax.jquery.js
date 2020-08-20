import AjaxBase from './ajax.base.js'
let $ = window.jQuery;

class AjaxUsingjQuery extends AjaxBase {
    Post(url, data = null) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                data: data,
                dataType: 'json',
                method: 'POST',
                xhrFields: { withCredentials: true },
                success: function (result) {
                    resolve(result);
                },
                fail: function () {
                    reject()
                }
            });
        });
    }
    Get(url, data = null) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                data: data,
                dataType: 'json',
                method: 'GET',
                xhrFields: { withCredentials: true },
                success: function (result) {
                    resolve(result);
                },
                fail: function () {
                    reject()
                }
            });
        });
    }
}

export default AjaxUsingjQuery;