$(document).ready(function () {
    change(1);
    $(".bubble").click(function () {
     	var nr = parseInt(this.id.substring(1)); 
     	change(nr)
    });
});

function change(number){
    changeBubbles(number);
    const path = "img/img" + number + ".jpg";
    changeImage(path);
}

function changeBubbles(nr){
    $(".bubble").css("background-color", "white");
    const bbl = "#b" + nr;
    $(bbl).css("background-color", "#999");
}

function changeImage(path){
    $("#selectedImg").fadeOut(500, function(){
        $(this).attr("src", path).bind("onreadystatechange load", function(){
            if (this.complete) $(this).fadeIn(500);
        });
    });
}

