var imageNumber = 1;

$(document).ready(function () {
    update();

    //manual change
    $(".bubble").click(function () {
     	var nr = parseInt(this.id.substring(1)); 
     	imageNumber = nr;
        update();
    });

    //automatic change
    setInterval(function(){ 
         if(imageNumber < 5)
            imageNumber++;
        else
            imageNumber = 1;
        update();
     }, 3500);       
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

