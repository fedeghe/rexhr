const fs = require('fs')

const savexml = ({ req, res, verb, ep }) => {
        res.contentType = 'xml';
        res.set({
            'content-type': 'application/xml'
        });
        var t = fs.readFileSync('./source/xxx.xml', 'utf8')
        res.sendRaw(202, `${t}`, {
            'content-type': 'application/xml'
        });
    },
    save = ({ req, res, verb, ep }) => {
        res.send(202, {
            "a":1
        });
    },
    post = ({ req, res, verb, ep }) => {
        res.send(202, {
            "a":2,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    put = ({ req, res, verb, ep }) => {
        res.send(202, {
            ...req.body,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    patch = ({ req, res, verb, ep }) => {
        res.send(202, {
            ...req.body,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    del = ({ req, res, verb, ep }) => {
        res.send(202, {
            response: `deleted ${req.body.id}`
        });
    },
    head = ({ req, res, verb, ep }) => {
        res.send(200, `what`, {
            'content-type': 'application/xml'
        });
    },
    late = ({ req, res, verb, ep }) => {        
        res.send(200, {
            response: `this came late`
        });
    };

module.exports = {
    save,
    savexml,
    post,
    put,
    del,
    patch,
    head,
    late
}