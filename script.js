var imageNumber = 1;

$(document).ready(function () {
    update();
    $(".bubble").click(function () {
     	var nr = parseInt(this.id.substring(1)); 
     	imageNumber = nr;
        update();
    });

});

function update(){
    changeBubbles();
    const path = "img/img" + imageNumber + ".jpg";
    changeImage(path);
}

function changeBubbles(){
    $(".bubble").css("background-color", "white");
    const bbl = "#b" + imageNumber;
    $(bbl).css("background-color", "#999");
}

function changeImage(path){
    $("#selectedImg").fadeOut(500, function(){
        $(this).attr("src", path).bind("onreadystatechange load", function(){
            if (this.complete) $(this).fadeIn(500);
        });
    });
}

