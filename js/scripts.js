//*Hannah Hogan -- 2024

function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ''){
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }

    function crossOut() {
        li.classList.toggle('strike');
    }

    li.on('dblclick', crossOut);

}
