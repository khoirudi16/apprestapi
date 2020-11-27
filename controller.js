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
            response.notOk(error, res);
            //console.log(error);
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
            response.notOk(error, res);
        } else {
            response.ok(rows, res);
        }
    })
}

//post data students
exports.postData = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    let sql = `insert into mahasiswa (nim, nama, jurusan) values (${nim},'${nama}','${jurusan}')`;

    connection.query(sql, function (error, rows, fields) {
        if (error) {
            response.notOk(error, res);
        } else {
            response.ok(rows.message, res);
        }
    })
}

//put data students based on id
exports.putData = function (req, res) {
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    let sql = `update mahasiswa set nim=${nim}, nama='${nama}', jurusan='${jurusan}' where id_mahasiswa='${id}' `;

    connection.query(sql, function (error, rows, fields) {
        if (error) {
            response.notOk(error, res);
        } else {
            response.ok(rows.message, res);
        }
    })
}

//delete data students by id
exports.deleteData = function (req, res) {
    let id = req.body.id_mahasiswa;
    let sql = `delete from mahasiswa where id_mahasiswa=${id}`;
    connection.query(sql, function (error, rows, fields) {
        if (error) {
            response.notOk(error, res);
        } else {
            response.ok(rows.message, res);
        }
    })
}