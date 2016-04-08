$(document).ready(function(){

	$("#slideshow >div:gt(0)").hide();

	setInterval(function(){

		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	},2000); 


	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "#3C3C3C"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "0px", "width": "130px","height":"130px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}
	});
	
	$("#login").submit(function(event){
		event.preventDefault();
	});
	
	$("#registro").submit(function(event){
		event.preventDefault();
	});


	
});