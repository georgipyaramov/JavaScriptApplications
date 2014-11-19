/// <reference path="..\libs/jquery-2.1.1.js" />
/// <reference path="..\libs/require.js" />

define(function () {
    'use strict';

    var $addedSuccess, $addedError, $removedSuccess, $removedError, $studentsContainer, showAddedSuccessMsg, showAddedErrorMsg, showRemovedSuccessMsg, showRemovedErrorMsg, displayStudents;

    $addedSuccess = $('.added-message .success');
    $addedError = $('.added-message .error');
    $removedSuccess = $('.removed-message .success');
    $removedError = $('.removed-message .error');
    $studentsContainer = $('.students-container');

    showAddedSuccessMsg = function (data) {
        var message = '' + data.name + ' was added successfully!';
        successMessage($addedSuccess, message);
    };

    showRemovedSuccessMsg = function (data) {
        var message = 'The student was deleted successfully!';
        successMessage($removedSuccess, message);
    };

    showAddedErrorMsg = function (err) {
        errorMessage($addedError, err);
    };

    showRemovedErrorMsg = function (err) {
        errorMessage($removedError);
    };

    displayStudents = function (data) {
        var student, $studentsList, i, len;
        $studentsList = $('<ul/>').addClass('students-list');
        for (i = 0, len = data.students.length; i < len; i++) {
            student = data.students[i];
            $('<li />')
              .addClass('student-item')
              .append('Name: ')
              .append($('<strong />')
              .html(student.name))
              .append(' --- grade: ')
              .append($('<span />')
              .html(student.grade))
              .appendTo($studentsList);
        }

        $studentsContainer.html($studentsList);
    };

    function successMessage($domElement, message) {
        $domElement.html(message)
            .show()
            .fadeOut(2000);
    }

    function errorMessage ($domElement, err){
        $domElement.html('Error happened: ' + err + '!')
            .show()
            .fadeOut(2000);
    }

    return {
        displayStudents: displayStudents,
        showAddedSucccessMessage: showAddedSuccessMsg,
        showAddedErrorMessage: showAddedErrorMsg,
        showRemovedSuccessMessage: showRemovedSuccessMsg,
        showRemovedErrorMessage: showRemovedErrorMsg
    }
});