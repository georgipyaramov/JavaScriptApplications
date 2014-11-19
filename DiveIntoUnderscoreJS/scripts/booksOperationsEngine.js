define(['../libs/underscore'], function() {
    var Engine = (function() {
        var Engine = function() {
        };

        Engine.prototype.getTheMostPopularAuthor = function(collectionOfBooks) {
            var resultArr = _.chain(collectionOfBooks)
                .groupBy('author')
                .sortBy(function(book) {
                    return -book.length;
                })
                .value();

            resultArr = _.first(resultArr);
            resultArr = _.first(resultArr);

            return resultArr.author;
        };



        return Engine;
    }());

    return Engine;
});
