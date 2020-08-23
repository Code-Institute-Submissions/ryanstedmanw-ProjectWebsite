$(document).ready(function($) {
    setTimeout(function() {
     $("html, footer").animate(
    { scrollTop: "1000px" },
    {
        complete : function(){
        event.preventDefault();
        }
    }
    
);;
    }, 3000);
});