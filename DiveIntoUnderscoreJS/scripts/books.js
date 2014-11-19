define(function(){
    var booksCollection = (function(){
        var booksArr = [
            {
                title: 'Angels and Demons',
                author : 'Dan Brown'
            },
            {
                title: 'The Da\'Vinci Code',
                author : 'Dan Brown'
            },
            {
                title: ' Harry Potter and the Philosopher\'s Stone',
                author : 'J. K. Rowling'
            },
            {
                title: 'Harry Potter and the Chamber of Secrets',
                author : 'J. K. Rowling'
            },
            {
                title: 'Harry Potter and the Prisoner of Azkaban',
                author : 'J. K. Rowling'
            },
            {
                title: 'Harry Potter and the Goblet of Fire',
                author : 'J. K. Rowling'
            },

        ];

        return booksArr;
    }());

    return booksCollection;
});