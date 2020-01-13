$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)

    // user hits enter
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    // user clicks X
    // Add the listener to the list because it is avaiable when
    // the page loads. (Event delegation)
    // Listening specifcally for clicks on the span.
    $('.list').on('click', 'span', function(){
        removeTodo($(this).parent());
    });
});

function addTodos(todos) {
    // add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

//add new list item using todo
function addTodo(todo){
    let newTodo = $('<li class="task">'+todo.name +' <span>X</span></li>');
    if(todo.completed) newTodo.addClass('done');
    $('.list').append(newTodo);
    //store mongo _id
    newTodo.data('id', todo._id);
}

function createTodo(){
    //send request to create new todo
    let userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);

    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
    let clickedId = todo.data('id');
    let deleteUrl = '/api/todos/' + clickedId;

    // delete todo from db
    $.ajax({
        method: 'DELETE',
        url: deleteUrl,
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}