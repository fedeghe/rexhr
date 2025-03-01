<pre>

                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/
                                v. 0.0.0
</pre>

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/rexhr/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/rexhr?branch=master)

Install it
```
yarn add rexhr
```
use it
``` js
var rexhr = require('rexhr')

rexhr.get({
    url: 'https://jmvc.org'
})
```


#### run tests
All tests are meant to run agains a local small server which respond back usual replies needed in the tests. This means that tests are besed ok some hadrcoded values returned by that local server, and that to run the tests we need first to start that responding server:  
``` sh
yarn start
```
let it run and start the tests: 
``` sh
yarn test
```