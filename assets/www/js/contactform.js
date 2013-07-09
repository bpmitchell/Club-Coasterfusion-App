$(function(){
        $('#form').submit(function(e){

            // Stop the form actually posting
            e.preventDefault();

            // Send the request
            $.post('http://brian.concertext.com/contact/proccess.php', {
                name: $('#name').val(),
                email: $('#email').val(),
                info: $('#gender').val(),
            }, function(d){
                console.log(d);
                // Here we handle the response from the script
                // We are just going to alert the result for now
                alert(d);
				$( '#form' ).each(function(){
    this.reset();
});
            });
        });
    });