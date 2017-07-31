$(document).ready(function () {
    $(".bubble").click(function () {
     	$(".bubble").css("background-color", "white");
     	$(this).css("background-color", "#999");
     	var id = parseInt(this.id.substring(1)); 
     	var path = "img/img" + id + ".jpg";
     	$("#selectedImg").fadeOut(500, function(){
     		$(this).attr("src", path).bind("onreadystatechange load", function(){
         		if (this.complete) $(this).fadeIn(500);
          	});
     	});
    });
});