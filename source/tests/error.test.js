var rexhr = require('../../dist/index.js')
console.error = () => {};
describe('error requests', () => {
    it('get error', done => {
        rexhr.get({
            url :'http://127.0.0.1:3001/latexxxx',
            onError: function (e) {
                done();
            },
        });
    });
});