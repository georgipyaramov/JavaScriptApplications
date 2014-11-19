define(['../libs/underscore'], function() {
    var Engine = (function() {
        var Engine = function() {
        };

        Engine.prototype.groupBySpecies = function(collectionOfAnimals) {
            var resultArr =
                _.chain(collectionOfAnimals)
                    .groupBy(groupeAnimals)
                    .sortBy(sortByLegs)
                    .value();

            return resultArr;
        };

        Engine.prototype.printName = function(collectionOfAnimals) {
            _.each(collectionOfAnimals, function(animals) {
                _.each(animals, printName);
            });
        };

        Engine.prototype.getTheNumberOfAllLegs = function(collectionOfAnimals) {
            var resultArr = _.reduce(collectionOfAnimals, calculateLegs, 0)

            return resultArr;
        };

        function groupeAnimals(animal) {
            return animal.species;
        }

        function printName(animal) {
            console.log(animal.name + ' --- ' + animal.species + ' --- ' + animal.legs + ' legs');
        }

        function sortByLegs(animal) {
            return animal.legs;
        }

        function calculateLegs(memo, animal) {
            return animal.legs + memo;
        }

        return Engine;
    }());

    return Engine;
});
