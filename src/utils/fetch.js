'use strict';
/*
* use method
* fetch().get(url, data)
*.then()
*  .catch()
*/

const param = require('jquery-param');  // for 深度解析

function isObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]' ||
           Object.prototype.toString.call(data) === '[object Array]';
}

function hasContentType(headers) {
    return Object.keys(headers).some(function (name) {
        return name.toLowerCase() === 'content-type';
    });
}

function setHeaders(xhr, headers) {
    headers = headers || {};

    if (!hasContentType(headers)) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    Object.keys(headers).forEach(function (name) {
        xhr.setRequestHeader(name, headers[name]);
    });
}

function xhrConnection(type, url, data, options) {
    if (isObject(data)) {
        data = param(data);
    }
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        if (type === 'get') {
            url = url.replace(/#.*$/, '');
            let divider = url.indexOf('?') !== -1 ? '&' : '?';
            url = [url, data].join(divider);
            data = null;
        }

        xhr.open(type, url || '', true);
        setHeaders(xhr, options.headers);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                let result;
                try {
                    result = JSON.parse(xhr.responseText);
                } catch (e) {
                    window.wmErrorReport && window.wmErrorReport(e);
                    result = xhr.responseText;
                }
                resolve(result);
            } else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error('Network Error'));
        };
        xhr.send(data);
    });
}

export default function Ajax(options) {
    options = options || {};

    let ajax = {};

    let httpMethods = ['get', 'post', 'put', 'delete'];

    httpMethods.forEach(function (method) {
        ajax[method] = function (url, data) {
            return xhrConnection(method, url, data, options);
        };
    });
    return ajax;
}
