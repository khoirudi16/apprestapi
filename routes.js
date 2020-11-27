'use strict';

module.exports = function (app) {
    let jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/get').get(jsonku.getAll);

    app.route('/getbyid/:id').get(jsonku.getById);

    app.route('/post').post(jsonku.postData);

    app.route('/put').put(jsonku.putData);
}