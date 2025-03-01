var rexhr = require('../../dist/index.js')

describe('timeout requests', () => {
    it('get text', done => {
        rexhr.get({
            url :'http://127.0.0.1:3001/late',
            timeout: 1,
            onTimeout: function () {
                done();
            },
        });
    });
});