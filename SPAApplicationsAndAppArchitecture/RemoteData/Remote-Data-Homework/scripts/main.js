/// <reference path="..\libs/require.js" 
/// <reference path="..\libs/jquery-2.1.1.js" />

(function () {
    'use strict';

    require.config({
        paths: {
            'jQuery': '../libs/jquery-2.1.1',
            'request': 'ajax-requests',
            'renderer': 'renderer',
            'engine': 'manage-students'
        }
    });

    require(['jQuery', 'engine'], function (jQuery, engine) {
        engine.displayAllStudents();

        $('#add-btn').on('click', function () {
            var student, name, grade;

            name = $('#students-name').val();
            grade = $('#students-grade').val();

            student = { name: name, grade: grade };
            engine.addStudent(student);
        });

        $('#delete-btn').on('click', function () {
            var id;

            id = $('#students-id').val();
            engine.deleteStudent(id);
        });
    });
}());
