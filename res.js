'use strict';

exports.ok = function (values, res) {
    let data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
};

exports.notOk = function (values, res) {
    let data = {
        'status': 500,
        'values': values
    };

    res.json(data);
    res.end();
}