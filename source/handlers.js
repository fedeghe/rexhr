const fs = require('fs')

const savexml = ({ req, res, verb, ep }) => {
        console.log({verb})
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
        console.log({verb})
        res.send(202, {
            "a":1
        });
    },
    savepost = ({ req, res, verb, ep }) => {
        console.log({verb})
        res.send(202, {
            "a":2,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    saveput = ({ req, res, verb, ep }) => {
        console.log({verb})
        res.send(202, {
            ...req.body,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    savepatch = ({ req, res, verb, ep }) => {
        console.log({verb})
        res.send(202, {
            ...req.body,
            "who" : req.body.name+'@'+req.body.surname
        });
    },
    savedelete = ({ req, res, verb, ep }) => {
        console.log({verb})
        res.send(202, {
            response: `deleted ${req.body.id}`
        });
    },
    savehead = ({ req, res, verb, ep }) => {
        console.log({verb})
        res.send(200, `what`, {
            'content-type': 'application/xml'
        });
    };

module.exports = {
    save,
    savexml,
    savepost,
    saveput,
    savedelete,
    savepatch,
    savehead,
}