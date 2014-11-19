var httpRequestModule = (function() {
    var getJSON = function(url, headers) {
        return $.ajax({
            url: url,
            type: 'GET',
            headers: headers || ''
        })
    };

    var postJSON = function(url, data, headers) {
        return $.ajax({
            url: url,
            type: 'POST',
            data: data || {},
            headers: headers || ''
        })
    };

    var deleteJSON = function(url, id) {
        return $.ajax({
            url: url + '/' + id,
            type: 'POST',
            data: {
                _method: 'delete'
            }
        });
    };

    return {
        getJSON: getJSON,
        postJSON: postJSON,
        deleteJSON: deleteJSON
    }
}());