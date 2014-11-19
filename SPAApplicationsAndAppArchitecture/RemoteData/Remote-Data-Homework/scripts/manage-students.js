/// <reference path="..\libs/jquery-2.1.1.js" />
/// <reference path="..\libs/require.js" />
/// <reference path="ajax-requests.js" />
/// <reference path="renderer.js" />

define(['request', 'renderer'], function (request, renderer) {
    'use strict';

    var reloadStudents, addStudent, deleteStudent, resourceUrl;

    resourceUrl = 'http://localhost:3000/students';

    reloadStudents = function () {
        return request.getRequest(resourceUrl)
                .done(renderer.displayStudents)
                .fail(renderer.showRemovedErrorMessage);
    };

    addStudent = function (student) {
        return request.postRequest(resourceUrl, student)
                .done(renderer.showAddedSucccessMessage)
                .done(reloadStudents)
                .fail(renderer.showAddedErrorMessage);
    };

    deleteStudent = function (id) {
        return request.deleteStudent(resourceUrl, id)
                .done(renderer.showRemovedSuccessMessage)
                .done(reloadStudents)
                .fail(renderer.showRemovedErrorMessage);
    }

    return {
        addStudent: addStudent,
        deleteStudent: deleteStudent,
        displayAllStudents: reloadStudents
    }
});

