var rexhr = require('../../dist/index.js')

describe('basic requests', () => {
    it('get text', done => {
        rexhr.get({
            url :'http://127.0.0.1:3001/save',
            onCompleted: function(r){
                expect(r.response).toBe('{"a":1}');
                done();
            }
        });
    });
    it('get xml', done => {
        rexhr.getXML({
            url :'http://127.0.0.1:3001/savexml',
            onCompleted: function(r){
                expect(r.responseXML.childNodes[0].constructor.name).toBe('Element');
                expect(r.responseXML.childNodes[0].tagName).toBe('el');
                expect(r.responseXML).not.toBeNull();
                done();
            }
        });
    });
    it('get json', done => {
        rexhr.getJson({
            url :'http://127.0.0.1:3001/save',
            onCompleted: function(r){
                var j = r.response
                expect(j).not.toBeNull();
                expect(j.a).toBe(1);
                done();
            }
        });
    });

    it('post', done => {
        rexhr.post({
            url :'http://127.0.0.1:3001/save',
            body: {
                name:'federico',
                surname: 'ghedina'
            },
            onCompleted: function(r){
                var j = JSON.parse(r.response)
                expect(j).not.toBeNull();
                expect(j.a).toBe(2);
                done();
            }
        });
    });

    it('put', done => {
        rexhr.put({
            url :'http://127.0.0.1:3001/save',
            body: {
                name:'federico',
                surname: 'ghedina'
            },
            onCompleted: function(r){
                const res = r.response,
                    resJ = JSON.parse(res);
                expect(res).not.toBeNull();
                expect(resJ.who).toBe('federico@ghedina');
                done();
            }
        });
    });
    it('delete', done => {
        rexhr.delete({
            url :'http://127.0.0.1:3001/save',
            body: {
                id: 31,
            },
            onCompleted: function(r){
                var res = r.response,
                    resJ = JSON.parse(res);
                expect(resJ.response).toBe('deleted 31')
                done();
            }
        });
    });

    it('patch', done => {
        rexhr.patch({
            url :'http://127.0.0.1:3001/save',
            body: {
                name:'federico',
                surname: 'ghedina'
            },
            onCompleted: function(r){
                var res = r.response,
                    resJ = JSON.parse(res);
                expect(resJ.who).toBe("federico@ghedina");
                done()
            }
        });
    });

    it('head', done => {
        rexhr.head({
            url :'http://127.0.0.1:3001/save',
            // url :'https://jmvc.org/media/documentation.xml',
            body: {
                name:'federico',
                surname: 'ghedina'
            },
            onCompleted: function(r){
                expect(r.getResponseHeader("Content-Type")).toBe('application/xml')
                done()
            }
        });
    });
    
});