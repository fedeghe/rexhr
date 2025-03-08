var rexhr = {};

(function (ctx, _){
    var noop = function(){},
        override = function (o, els) {
            var ret = Object.assign({}, o);
            for (var i in els) {
                /* istanbul ignore else */
                if (els.hasOwnProperty(i))
                    ret[i] = els[i];
            }
            return ret;
        },
        request = function(params){
            var url = params.url,
                timeout = params.timeout || 0,
                user = params.user || null,
                password = params.password || null,
                responseType = params.responseType,
                contentType = params.contentType,
                body = params.body || null,
                method = params.method,
                onCompleted = params.onCompleted || noop,
                onLoad = params.onLoad || noop,
                onError = params.onError || noop,
                onAbort = params.onAbort || noop,
                onProgress = params.onProgress || noop,
                onLoadend = params.onLoadend || noop,
                onLoadstart = params.onLoadstart || noop,
                onTimeout = params.onTimeout || noop,
                headers = params.headers || {},
                wc = !!params.withCredentials,
                xhr = new XMLHttpRequest(),
                called = false;
            
            xhr.responseType = responseType;
            xhr.withCredentials = wc;
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
                    var status = xhr.status;
                    /* istanbul ignore else */
                    if (status === 0 || (status >= 200 && status < 400)) {
                        !called && onCompleted(xhr);
                        called = true;
                    }
                    // if (xhr.error){
                    //     onError(xhr.error);
                    //     xhr.abort();
                    // }
                }
            };
            if(contentType === 'application/xml') {
                xhr.overrideMimeType("text/xml");
            }
            if (body) {
                headers = override(headers, {'X-Requested-With': 'XMLHttpRequest'});
                /* istanbul ignore else */
                if (!_.FormData || !(body instanceof _.FormData)) {
                    headers = override(headers, {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
                }
                body = new URLSearchParams(body);
            }
            xhr.open(method, url, true, user, password);
            for (var field in headers) xhr.setRequestHeader(field, headers[field]);
            xhr.send(body);
            
            
            return xhr;
        };
    ctx.getJson = function(prs){
        return request(override(prs, {
            method: 'GET',
            responseType: 'json',
            contentType: 'application/json'
        }));
    };
    ctx.getXML = function(prs){
        return request(override(prs, {
            method: 'GET',
            responseType: 'document',
            contentType: 'application/xml'
        }));
    };
    
    'GET POST PUT PATCH DELETE HEAD OPTIONS TRACE CONNECT'
        .split(/\s/)
        .forEach(
            function (m) {
                ctx[m.toLowerCase()] = function(prs){
                    return request(override({
                        method: m,
                        responseType: 'text'
                    }, prs));
                };
            }
        );

})(rexhr, window);

(typeof exports === 'object') && (module.exports = rexhr);