<pre>

                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/
                                v. 0.0.7
</pre>

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/rexhr/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/rexhr?branch=master)

Install it
``` sh
> yarn add rexhr
```

#### first things first: run the tests
All tests are meant to run agains a local small server which respond back usual replies needed in the tests. This means that tests are based ok some hadrcoded values returned by that local server, and that to run the tests we need first to start it:  
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
    withCreadentials = false    // Boolean
    user = null                 // String
    password = null             // String
	onCompleted = noop, 	    // ƒn
	onPreogress = noop, 	    // ƒn
	onLoad = noop,              // ƒn
	onLoadstart = noop,         // ƒn
	onLoadend = noop,           // ƒn
	onError = noop,     	    // ƒn
	onAbort = noop,     	    // ƒn
	onTimeout = noop,   	    // ƒn
})
```
</details>


