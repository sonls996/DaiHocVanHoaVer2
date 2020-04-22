window.onscroll = function() {
    scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("menu").classList.add("menuanhien");
      document.getElementById("bot-menu").classList.add("bdb1");
      document.getElementById("leftmenu").classList.add("dni");
      document.getElementById("rightmenu").classList.add("dni");
      document.getElementById("logo").classList.add("wh60");
      document.getElementById("logo").classList.add("mg0a");
      // document.getElementById("menu").classList.add("pad");
      document.getElementById("menu-top").classList.add("dni");

      

    } else {
      document.getElementById("leftmenu").classList.remove("dni");
      document.getElementById("rightmenu").classList.remove("dni");
      document.getElementById("logo").classList.remove("wh60");
      document.getElementById("logo").classList.add("mg0a");
      document.getElementById("menu").classList.remove("menuanhien");
      document.getElementById("menu").classList.remove("bdb1");
      document.getElementById("menu-top").classList.remove("dni");
      document.getElementById("bot-menu").classList.remove("bdb1");



    }
  }
  $(document).ready( function() {
    $('#myCarousel').carousel({
		interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});

















var hidden= document.getElementById("clickme");
hidden.addEventListener("click",hiddenLogin);
function hiddenLogin(){
  if( document.getElementById("mobile-wrapLogin").style.height<="0px"){
  document.getElementById("mobile-wrapLogin").style.height= "105px";
  }else{
    document.getElementById("mobile-wrapLogin").style.height="0px";
  }
}


function openNav() {
  document.getElementById("mySidebar").style.right = "0";
  // document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").style.opacity = "1";
}
function closeNav() {
  document.getElementById("mySidebar").style.right = "-100%";
  // document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").style.opacity = "0";
}