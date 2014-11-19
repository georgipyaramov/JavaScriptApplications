/// <reference path="..\libs/require.js" />

(function () {
    'use strict';

    require.config({
        paths: {
            'jQuery': '../libs/jquery-2.1.1',
            'sammy': '../libs/sammy-0.7.4',
            'mustache': '../libs/mustache',
            'q': '../libs/q',
            'requester': 'ajax-requester',
            'renderer': 'renderer',
            'controller': 'controller'
        }
    });

    require(['jQuery'], function(jQuery){
        require(['sammy', 'mustache', 'controller'], function (sammy, mustache, controller) {

            var app = sammy('#main-content', function () {

                this.get('#/home', function () {
                    //  var $paragraph, $secondParagraph;
                    //
                    //  $paragraph = $('<p />');
                    //  $paragraph.html('Home sweet home!');
                    //
                    //  $secondParagraph = $('<p />');
                    //  $secondParagraph.html('There is NO place like home! :P');

                    $('#main-content').empty()
                        .load('home-page.html');
                });

                this.get('#/about', function () {
                    // var $paragraph, $span;
                    //
                    // $paragraph = $('<p />');
                    // $paragraph.html('The current Crowd Chat was provided to you by the kind gentlemen: ');
                    //
                    // $span = $('<span />');
                    // $span.append('<strong>')
                    // .html('Mr. J. Query, Mr. Mustache, Mr. Q, Mr. Require and Mr. Sammy')
                    // .append('</strong');

                    $('#main-content').empty()
                        .load('about-page.html');
                });

                this.get('#/chat', function () {
                    $('#main-content').empty()
                        .load('chat-room.html');

                    setInterval(controller.reloadPosts, 2000);
                });
            });

            app.run('#/home');
        });
    });
}());