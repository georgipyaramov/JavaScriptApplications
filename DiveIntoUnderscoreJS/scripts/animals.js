define(function(){
    var animalsCollection = (function(){
        var animalsArr = [
            {
                name: 'Tarantula',
                species : 'spider',
                legs: 8
            },
            {
                name: 'Abou',
                species : 'monkey',
                legs: 2
            },
            {
                name: 'Radzha',
                species : 'lion',
                legs: 2
            },
            {
                name: 'Simba',
                species : 'lion',
                legs: 2
            },
            {
                name: 'Pumba',
                species : 'pig',
                legs: 4
            },
            {
                name: 'Tom',
                species : 'dog',
                legs: 4
            },
            {
                name: 'Jerry',
                species : 'dog',
                legs: 6
            },
            {
                name: 'Ciara',
                species : 'lion',
                legs: 4
            },
            {
                name: 'Stonojka',
                species : 'centipede',
                legs: 100
            }

        ];

        return animalsArr;
    }());

    return animalsCollection;
});