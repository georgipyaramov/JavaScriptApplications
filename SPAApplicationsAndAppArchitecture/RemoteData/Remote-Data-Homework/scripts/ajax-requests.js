/// <reference path="..\libs/require.js" />
/// <reference path="..\libs/jquery-2.1.1.js" />

define(['jQuery'], function (jQuery) {
    'use strict';

    var getJSON, postJSON, deleteStudent;

    // $.ajax() returns a promise, therefore I am not using Q here to make a promise
    getJSON = function (resourceUrl, callback) { //callback,
        return $.ajax({
            url: resourceUrl,
            type: 'GET',
            contentType: 'application/json',
            accept: 'application/json',
            success: callback
        });
    };

    postJSON = function (resourceUrl, data, callback) { //callback,
        return $.ajax({
            url: resourceUrl,
            type: 'POST',
            contentType: 'application/json',
            accept: 'application/json',
            data: JSON.stringify(data),
            success: callback
        });
    };

    deleteStudent = function (resourceUrl, id) {
        return $.ajax({
            url: resourceUrl + '/' + id,
            type: 'POST',
            data: {
                _method: 'delete'
            }
        });
    };

    return {
        getRequest: getJSON,
        postRequest: postJSON,
        deleteStudent: deleteStudent
    }
});
