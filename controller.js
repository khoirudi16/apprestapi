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
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

//get data students by id
exports.getById = function (req, res) {
    let id = req.params.id;
    let sql = 'select * from mahasiswa where id_mahasiswa = ' + id;
    connection.query(sql, function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}