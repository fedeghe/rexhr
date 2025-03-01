var joe = {};

(function (ctx, _){

    var noop = function(){},
        override = function (o, els) {
            var ret = Object.assign({}, o);
            for(var i in els){
                if (els.hasOwnProperty(i))
                    ret[i] = els[i];
            }
            return ret;
        },
        request = function(params){
            
            var url = params.url,
                timeout = params.timeout,
                user = params.user || null,
                password = params.password || null,
                timeout = params.timeout,
                responseType = params.responseType,
                contentType = params.contentType,
                body = params.body || null,
                method = params.method || (body ? 'POST' : 'GET'),
                onCompleted = params.onCompleted || noop,
                onLoad = params.onLoad || noop,
                onError = params.onError || noop,
                onAbort = params.onAbort || noop,
                onProgress = params.onProgress || noop,
                onLoadend = params.onLoadend || noop,
                onLoadstart = params.onLoadstart || noop,
                onTimeout = params.onTimeout || noop,
                headers = params.headers || {},
                withCredentials = !!params.withCredentials,
                xhr = new XMLHttpRequest(),
                called = false;
            
            

            if (xhr) {
                xhr.responseType = responseType;
                xhr.timeout = timeout || null;
                xhr.addEventListener('load', onLoad);
                xhr.addEventListener('progress', onProgress);
                xhr.addEventListener('error', onError);
                xhr.addEventListener('timeout', onTimeout);
                xhr.addEventListener('abort', onAbort);
                xhr.addEventListener('loadend', function(){onLoadend(xhr)});
                xhr.addEventListener('loadstart', function(){onLoadstart(xhr)});
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        const status = xhr.status;
                        if (status === 0 || (status >= 200 && status < 400)) {
                            !called && onCompleted(xhr);
                            called = true;
                        } else {
                            onError(xhr.error);
                            xhr.abort();
                            throw new Error(url + ' replied 404');
                        }
                    }
                };
                if(contentType === 'application/xml') {
                    xhr.overrideMimeType("text/xml");
                }
                if (body) {
                    headers = override(headers, {'X-Requested-With': 'XMLHttpRequest'});
                    if (!_.FormData || !(body instanceof _.FormData)) {
                        headers = override(headers, {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
                    }
                    body = new URLSearchParams(body);
                }
                xhr.open(method, url, true, user, password);
                for (var field in headers) xhr.setRequestHeader(field, headers[field]);
                xhr.send(body);
            }
            return xhr;
        };
    ctx.getJson = function(params){
        return request(override(params, {
            method: 'GET',
            responseType: 'json'
        }));
    };
    ctx.getXML = function(params){
        return request(override(params, {
            method: 'GET',
            responseType: 'document',
            contentType: 'application/xml'
        }));
    };
    ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'].forEach(
        function (method) {
            ctx[method.toLowerCase()] = function(params){
                return request(override(params, {
                    method: method,
                    responseType: 'text'
                }));
            };
        }
    );

})(joe, window);

(typeof exports === 'object') && (module.exports = joe);