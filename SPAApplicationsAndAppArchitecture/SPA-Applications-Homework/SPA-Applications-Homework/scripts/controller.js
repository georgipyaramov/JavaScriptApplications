/// <reference path="controller.js" />
/// <reference path="..\libs/require.js" />
/// <reference path="..\libs/jquery-2.1.1.js" />

define(['requester', 'renderer'], function (requester, renderer) {
    'use strict';

    var resourceUrl, reloadPosts;

    resourceUrl = 'http://crowd-chat.herokuapp.com/posts';

    reloadPosts = function () {
        requester.getRequest(resourceUrl)
            .then(renderer.loadPosts, function () {
                throw new Error('Information could not be accessed!');
            });
    };

    $('#main-content').on('click', '#send-btn', function () {
        var message, author, currentMessage;

        event.preventDefault();
        message = $('#message').val();
        author = $('#username').val();
        currentMessage = { user: author, text: message };

        requester.postRequest(resourceUrl, currentMessage)
            .then(reloadPosts, function () {
                throw new Error('Message could not be send!');
            });
    });

    return {
        reloadPosts: reloadPosts
    }
});