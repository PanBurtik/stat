$(document).ready(function(){
    $("#nadpis1").on("click", function(){
        $("#celkovy-prehled h3, #celkovy-prehled p").toggle(2000);
    });
    $("#nadpis2").on("click", function(){
        $("#ekonomika h3, #ekonomika p").toggle(2000);
    });
    $("#znak").on("click", function(){
        $("#symboly h3, #symboly p, #symboly img").toggle(2000);
    });
    $("#nadpis3").on("click", function(){
        $("#zakladni-udaje h3, #zakladni-udaje div, #zakladni-udaje table").toggle(2000);
    });
});