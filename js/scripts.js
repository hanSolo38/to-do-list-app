
function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    li.on("dblclick", crossOut);
    function crossOut() {
        li.toggleClass("strike");
    };

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    	li.addClass("delete")
    }
       
    $('#list').sortable();
    }

    //added so when user hits ENTER, it doesn't clear the form but adds
    $('#input').on('keypress', function(event) {
        if (event.which === 13) {
          event.preventDefault(); 
          newItem(); 
        }
      });
    