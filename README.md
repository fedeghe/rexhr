<pre>

                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/
                                v. maltaV('PACKAGE.version')
</pre>

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/rexhr/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/rexhr?branch=master)

### wtf?  
Another client ajax library

### first things first
All tests must run against a local small server, which needs to be started before running the tests.  
NPM package clearly brings only the very minimal code (no tests code and no test server), but on the [github repository](https://fedeghe@github.com/fedeghe/rexhr.git) there's everything:  

``` sh
> git clone https://fedeghe@github.com/fedeghe/rexhr.git
> cd rexhr
> yarn 
> yarn start // start the local server for tests
```
let it run and run the tests: 
``` sh
> yarn test
``` 
then You can shut down both.

# add it and use it

run `yarn add rexhr` in the project where you want to try it, then import it:
``` js
var rexhr = require('rexhr');
```


<details>
<summary>generic request signature</summary>

``` js  
rexhr.<http-verb>({
	url,					    // String
	body = null,			    // JSON, when the <verb> allows it
	headers = {}, 			    // one level JSON
	timeout = null				// Integer in ms
    withCreadentials = false    // Boolean
    user = null                 // String
    password = null             // String
	onCompleted = noop, 	    // ƒn
	onProgress = noop, 	    // ƒn
	onLoad = noop,              // ƒn
	onLoadstart = noop,         // ƒn
	onLoadend = noop,           // ƒn
	onError = noop,     	    // ƒn
	onAbort = noop,     	    // ƒn
	onTimeout = noop,   	    // ƒn
})
```
</details>


## most common http-verbs

<details>
<summary><code>rexhr.delete</code></summary>

``` js  
rexhr.delete({
	url: 'http://sampleurl/deleteSomething',
	body: {
		name: 'Henry',
		surname: 'Poincaré'
	}
	onCompleted: function(r){
		console.log((r.response);
	}
});
```
</details>

<details>
<summary><code>rexhr.get</code></summary>

``` js  
rexhr.get({
	url: 'http://sampleurl/gimmeSomething',
	onCompleted: function(r){
		console.log((r.response);
	}
});
```
</details>

<details>
<summary><code>rexhr.head</code></summary>

``` js  
rexhr.head({
	url: 'http://sampleurl/infoSomething',
	body: {
		name: 'Donald',
		surname: 'Knuth'
	}
	onCompleted: function(r){
		console.log((r.getResponseHeader("Content-Length"));
	}
});
```
</details>

<details>
<summary><code>rexhr.patch</code></summary>

``` js  
rexhr.patch({
	url: 'http://sampleurl/patchSomething',
	body: {
		id: 12345
	}
	onCompleted: function(r){
		console.log((r.response);
	}
});
```
</details>

<details>
<summary><code>rexhr.post</code></summary>

``` js  
rexhr.post({
	url: 'http://sampleurl/postSomething',
	body: {
		m: 'Bob',
		f: 'Alice'
	}
	onCompleted: function(r){
		console.log((r.response);
	}
});
```
</details>

<details>
<summary><code>rexhr.put</code></summary>

``` js  
rexhr.put({
	url: 'http://sampleurl/putSomething',
	body: {
		num: 1
	}
	onCompleted: function(r){
		console.log((r.response);
	}
});
```
</details>


---

### something extra


<details>
<summary><code>rexhr.getXML</code></summary>

``` js  
rexhr.getXML({
	url: 'http://sampleurl/text.xml',
	onCompleted: function(r){
		console.log((r.responseXML);
	}
});
```
</details>

<details>
<summary><code>rexhr.getJson</code></summary>

``` js  
rexhr.getJson({
	url: 'http://sampleurl/gimmejson',
	onCompleted: function(r){
		console.log((r.response);//already json
	}
});
```
</details>

<br/>
<br/>
<br/>

---
2026 - maltaV('PACKAGE.name')

