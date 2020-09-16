$(document).ready(function(){

    var dropDown = $("#dropDown-form") ;
    var status = false;

    $("#login").click(function(event){
        event.preventDefault();

        if(status == false){
            dropDown.fadeIn();
            status = true;
        }
        else{
            dropDown.fadeOut();
            status = false;
        }
    }
    )
})
