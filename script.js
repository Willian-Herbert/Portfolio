$(document).ready(function() {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 230) {
            $(".habilidades").css("opacity","1");
        } else {
         $(".habilidades").css("opacity","0");
        }
     });
   });

$(document).ready(function() {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 430) {
            $(".projetos").css("opacity","1");
        } else {
         $(".projetos").css("opacity","0");
        }
    });
});