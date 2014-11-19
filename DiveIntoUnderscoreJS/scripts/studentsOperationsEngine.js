define(['../libs/underscore'], function() {
    var Engine = (function() {
        var Engine = function() {
        };

        Engine.prototype.firstNameBeforeLastName = function(collectionOfStudents) {
            var resultArr;
            resultArr = _.chain(collectionOfStudents)
                .filter(isFirstNAmeBeforeLastName)
                .sortBy(sortByFullName)
                .value()
                .reverse();

            return resultArr;
        };

        Engine.prototype.printFullName = function(collectionOfStudents) {
            if (collectionOfStudents.length > 1) {
                _.each(collectionOfStudents, printFullName);
            }
            else {
                printFullName(collectionOfStudents);
            }
        };

        Engine.prototype.ageBetweenEighteenAndTwentfour = function(collectionOfStudents) {
            var resultArr;
            resultArr = _.chain(collectionOfStudents)
                .filter(isBetweenEighteenAndTwentfour)
                .sortBy(sortByFullName)
                .value();

            return resultArr;
        };

        Engine.prototype.highestMark = function(collectionOfStudents) {
            var result;
            result = _.max(collectionOfStudents, highestScore);

            return result;
        };

        function isFirstNAmeBeforeLastName(student) {
            return student.firstName < student.lastName;
        }

        function isBetweenEighteenAndTwentfour(student) {
            return student.age >= 18 && student.age <= 24;
        }

        function sortByFullName(student) {
            return student.firstName + student.lastName;
        }

        function printFullName(student) {
            console.log(student.firstName + ' ' + student.lastName);
        }

        function highestScore(student) {
            return student.marks
        }

        return Engine;
    }());

    return Engine;
});