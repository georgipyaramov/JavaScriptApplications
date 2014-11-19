/// <reference path="..\libs/jquery-2.1.1.js" />
/// <reference path="..\libs/mustache.js" />
/// <reference path="..\libs/require.js" />

define(['jQuery', 'mustache', 'q'], function (jQuery, Mustache, Q) {
    'use strict';

    var displayPosts, loadPosts;

    function getTemplate() {
        var deferred;

        deferred = Q.defer();
        $.get('posts-template.html', function (template) {
            deferred.resolve(template);
        })
        .fail(function () {
            return deferred.reject(err);
        });

        return deferred.promise;
    }

    displayPosts = function (template, data) {
        var $postsContainer, currentPost, i, renderedPost, templateIsReady;

        $postsContainer = $('<div />');
        $postsContainer.addClass('posts-display');
        Mustache.parse(template);

        for (i in data) {
            currentPost = data[i];
            renderedPost = Mustache.render(template, currentPost);
            $postsContainer.append(renderedPost);
        }

        $('#display').html($postsContainer);
    }

    loadPosts = function (data) {
        getTemplate()
            .then(function (template) {
                displayPosts(template, data);
            }, function (err) {
                throw new Error('Requested information was not found!');
            });
    };

    return {
        loadPosts: loadPosts
    }
});

