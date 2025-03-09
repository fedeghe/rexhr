<pre>

                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/
                                v. 0.0.8
</pre>

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/rexhr/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/rexhr?branch=master)

Install it
``` sh
> yarn add rexhr
```

### first thing first
All tests are meant to run agains a local small server which respond back usual replies needed in the tests. Indeed tests are based on some hadrcoded values returned by that local server, which needs to be started before running the tests:  
``` sh
// I assume you are in the folder where rexhr was installed
> cd node_modules/rexhr
> yarn start 
```
let it run and start the tests: 
``` sh
> yarn test
``` 
then You can shut down both.

# use it

run `yarn build` to be sure to get the minified version into `dist/index.js`

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
		name: 'Henry',
		surname: 'Poincaré'
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
<summary><code>rexhr.post</code></summary>

``` js  
rexhr.post({
	url: 'http://sampleurl/postSomething',
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
<summary><code>rexhr.put</code></summary>

``` js  
rexhr.put({
	url: 'http://sampleurl/putSomething',
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
2025 - rexhr

