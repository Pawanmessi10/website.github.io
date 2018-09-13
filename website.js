$('documnet').ready(function(){
	$('.toggle').click(function(){
		$('.navbar').toggle();
	});
	
	$(".navbar li").hover(function(){
    $(this).find("a").css("color", "black");
    }, function(){
    $(this).find("a").css("color", "white");
});
});