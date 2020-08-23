$(document).ready(function($) {
    setTimeout(function() {
     $("html, footer").animate(
    { scrollTop: "300px" },
    {
        complete : function(){
        event.preventDefault();
        }
    }
    
);;
    }, 3000);
});