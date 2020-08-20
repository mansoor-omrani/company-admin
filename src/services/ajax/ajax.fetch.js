import AjaxBase from './ajax.base.js';
import parse from 'url-parse';

class AjaxUsingFetch extends AjaxBase {
    Post(url, data = null) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();

            if (data) {
                for (var key of Object.keys(data)) {
                    formData.append(key, data[key]);
                }
            }

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                credentials: 'same-origin',
                body: formData
            }).then(function (response) {
                if (response.ok) {
                    if (response.redirected) {
                        const parsed = parse(response.url, true);
                        let message = '';
                        let status = '';

                        if (parsed.pathname.toLowerCase().endsWith('/account/signin')) {
                            message = 'Your session is ended or you are not signed in yet. Please login to perform this operation.';
                            status = 'AccessDenied';
                        } else {
                            message = 'There is a problem at the server. We cannot perform your request now. Please login or refresh the page and redo your operation. If you encountered the same problem again, contact support team.';
                            status = 'Redirected';
                        }

                        return { Success: false, Status: status, Message: message, Info: response.url, Bag: response }

                    } else {
                        return response.json();
                    }
                } else {
                    let message = '';
                    let status = '';

                    switch (response.status) {
                        case 401:
                            message = 'Your session is ended or you are not signed in yet. Please login to perform this operation.';
                            status = 'AccessDenied';
                            break;
                        case 403:
                            message = 'You are not authorized to perform this operation. If you have another account that has authorization, please signout and login with that account.';
                            status = 'Forbidden';
                            break;
                        case 500:
                            message = 'There is a problem at the server. We cannot perform your request. Please contact support team.';
                            status = 'ServerError';
                            break;
                        default:
                            message = 'There is a problem at the server. We cannot perform your request now. Please login again or refresh the page and redo your operation. If you encountered the same problem again, contact support team.';
                            status = '';
                            break;
                    }

                    return { Success: false, Status: status, responseStatus: response.status, responseStatusText: response.statusText, Message: message, Bag: response }
                }
            }).then(function (data) {
                resolve(data);
            }).catch(_ => reject());
        });
    }
    buildUrl(url, parameters) {
        let qs = "";

        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs +=
                    encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last "&"
            url = url + "?" + qs;
        }

        return url;
    }
    Get(url, data = null) {
        return new Promise((resolve, reject) => {
            const _url = this.buildUrl(url, data);

            fetch(_url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
                credentials: 'same-origin',
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                resolve(data);
            }).catch(_ => reject(_));
        });
    }
}

export default AjaxUsingFetch;