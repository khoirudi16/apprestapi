'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('applikasi rest api berjalan', res);
}

//get all data students
exports.getAll = function (req, res) {
    let sql = 'select * from mahasiswa';
    connection.query(sql, function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}