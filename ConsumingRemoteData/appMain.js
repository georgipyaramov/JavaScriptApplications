var mainModule = (function(){
    var url = 'http://localhost:3000/students',
        headers =
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
//            'Access-Controls-Allow-Methods':'GET,POST,DELETE,OPTIONS'
        },
        nameInput = $('#input-student-name')[0],
        gradeInput = $('#input-student-grade')[0],
        idInput = $('#input-student-id')[0],
        addButton = $('#add-student-btn')[0],
        showButton = $('#show-all-student-btn')[0],
        deleteButton = $('#delete-student-btn')[0],
        enrolledMsg = 'The student is enrolled',
        unenrolledMsg = 'The student is unenrolled';

    addButton.addEventListener('click', function() {
        var studentToGo = makeStudentAsJSON();
        clearInputValues([nameInput, gradeInput]);
        httpRequestModule.postJSON(url, studentToGo)
            .then(function() {
                showOperationDoneMessage(enrolledMsg)
            }, function(err) {
                    if (err.readyState === 0) {
                        console.log();
                        showOperationDoneMessage('The server is not running')
                    }
                    else{
                        console.log('Something wrong happened!');
                    }
                    console.log(err);
                })
    });

    showButton.addEventListener('click', function() {
        httpRequestModule.getJSON('http://localhost:3000')
            .then(showAllStudentList, function(err) {
                if (err.readyState === 0) {
                    console.log();
                    showOperationDoneMessage('The server is not running')
                }
                else{
                    console.log('Something wrong happened!');
                }
                console.log(err);
            });
    });

    deleteButton.addEventListener('click', function() {
        var id = idInput.value.toString();
        clearInputValues([idInput]);
        httpRequestModule.deleteJSON(url, id)
            .then(showOperationDoneMessage(unenrolledMsg), function(err) {
                console.log('Something wrong happened!');
            })
    });

    function makeStudentAsJSON() {
        return {
            name: nameInput.value,
            grade: gradeInput.value
        }
    }

    function clearInputValues(valuesToClear) {
        for (var i = 0; i < valuesToClear.length; i++) {
            valuesToClear[i].value = '';
        }
    }

    function showOperationDoneMessage(msg) {
        var messageBox = $('.enrolled-message-box');
        if (messageBox[0]) {
            messageBox.text(msg);
            messageBox.css('display', 'block');
        }
        else {
            messageBox = $('<div>');
            messageBox.text(msg);
            messageBox.addClass('enrolled-message-box');
            messageBox.css('border', '1px solid red');
            messageBox.css('padding', '10px');
            messageBox.css('position', 'fixed');
            messageBox.css('top', '100px');
            messageBox.css('left', '350px');
            messageBox.css('font-size', '20px');
            $('body').append(messageBox);
        }
        setTimeout(function() {
            messageBox.css('display', 'none');
        }, 3000)
    }

    function showAllStudentList(response) {
        var list = $('#all-students-list'),
            allStudents = response.students,
            listItem = $('<li>');

        if (!list[0]) {
            list = $('<ul>');

            list.attr('id', 'all-students-list');
            updateList(allStudents, listItem, list);
        }
        else {
            list.empty();
            updateList(allStudents, listItem, list);
        }
        list.appendTo($('#all-enrolled-students-list-container'));
    }

    function updateList(studentsList, listItem, list) {
        var currentItem;
        for (var i = 0; i < studentsList.length; i++) {
            currentItem = listItem.clone();
            $('<p>').text('The student '
                + studentsList[i].name
                + ' is in ' + studentsList[i].grade
                + 'th grade ID:' + studentsList[i].id)
                .appendTo(currentItem);
            currentItem.appendTo(list);

        }
    }



}());



