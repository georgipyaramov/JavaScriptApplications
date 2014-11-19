(function () {
    'use strict';
    require(['./scripts/students',
            './scripts/animals',
            './scripts/books',
            './scripts/studentsOperationsEngine',
            './scripts/animalsOperationsEngine',
            './scripts/booksOperationsEngine'],
        function (students,
                animals,
                books,
                StudentsOpsEngine,
                AnimalsOpsEngine,
                BooksOperationsEngine) {
    var studentsEngine = new StudentsOpsEngine(),
        animalsEngine = new AnimalsOpsEngine(),
        booksEngine = new BooksOperationsEngine,
        result;
//        First task
    console.log('-----------First task--------------');
    result = studentsEngine.firstNameBeforeLastName(students);
    studentsEngine.printFullName(result);

//        Second task
    console.log('-----------Second task-------------');
    result = studentsEngine.ageBetweenEighteenAndTwentfour(students);
    studentsEngine.printFullName(result);

//        Third task
    console.log('------------Third task--------------');
    result = studentsEngine.highestMark(students);
    studentsEngine.printFullName(result);

//        Fourth task
    console.log('------------Fourth task-------------');
    result = animalsEngine.groupBySpecies(animals);
    animalsEngine.printName(result);

//        Fifth task
    console.log('------------Fifth task----------------');
    result = animalsEngine.getTheNumberOfAllLegs(animals);
    console.log('The total number of legs of all animals in the array is ' + result);

//        Sixth task
    console.log('------------Sixth task----------------');
    result = booksEngine.getTheMostPopularAuthor(books);
    console.log('The most popular author is ' + result);

//        Seventh task
    console.log('------------Seventh task----------------');
    var result = _.groupBy(students, 'firstName');
    var mostPopularFirstNames = _.max(result, function (names) {
        return names.length;
    });
    console.log('The most popular first name is ' + mostPopularFirstNames[0].firstName);

    var peopleByLastName = _.groupBy(students, 'lastName');
    var mostPopularLastNames = _.max(peopleByLastName, function (names) {
        return names.length;
    });
    console.log('The most popular last name is ' + mostPopularLastNames[0].lastName);

    });
}());

