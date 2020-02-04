//revealing text on scroll
function showText() 
{
    ScrollReveal().reveal('p, li, .examplePic' , {
        reset: true,
        delay: 300,
        mobile: true,
        easing   : 'linear',
    });
}

// change pictures ("About me", "Artists")
var sourceImg = ['Obrazy/pinkCircleC.jpg','Obrazy/coMaluje.jpg'];
			var vImg = true;
			
			var sourceImg2 = ['Obrazy/blueCircleC.jpg','Obrazy/lata8.jpg'];
			var vImg2 = true;
			
			var sourceImg3 = ['Obrazy/turkusCircleC.jpg','Obrazy/favourite.jpg'];
			var vImg3 = true;
			
			var sourceGogh= ['Obrazy/vanGogh.jpg','Obrazy/vanGogh Sunday.jpg'];
			var gImg = true;
			
			var sourceAl= ['Obrazy/albrecht.jpg','Obrazy/albrechtkwiat.jpg'];
			var aImg = true;
			
			var sourceTom= ['Obrazy/thomas.jpg','Obrazy/thomasZamek.jpg'];
			var tImg = true;
			
		function SetSecondImg(){
			if (vImg){
				document.getElementById('roseImg').src = sourceImg[1];
				vImg = false;
			}
    
			else {
				document.getElementById('roseImg').src = sourceImg[0];
				vImg = true;
			}
		}
		
		function SetSecondImg2(){
			if (vImg2){
				document.getElementById('blueImg').src = sourceImg2[1];
				vImg2 = false;
			}
    
			else {
				document.getElementById('blueImg').src = sourceImg2[0];
				vImg2 = true;
			}
		}
		
		function SetSecondImg3(){
			if (vImg3){
				document.getElementById('turkusImg').src = sourceImg3[1];
				vImg3 = false;
			}
    
			else {
				document.getElementById('turkusImg').src = sourceImg3[0];
				vImg3 = true;
			}
		}
		
		function SetGoghImg(){
			if (gImg){
				document.getElementById('goghImg').src = sourceGogh[1];
				gImg = false;
			}
    
			else {
				document.getElementById('goghImg').src = sourceGogh[0];
				gImg = true;
			}
		}
		
		function SetAlImg(){
			if (aImg){
				document.getElementById('alImg').src = sourceAl[1];
				aImg = false;
			}
    
			else {
				document.getElementById('alImg').src = sourceAl[0];
				aImg = true;
			}
		}
		
		function SetTomImg(){
			if (tImg){
				document.getElementById('tomImg').src = sourceTom[1];
				tImg = false;
			}
    
			else {
				document.getElementById('tomImg').src = sourceTom[0];
				tImg = true;
			}
		}
		
		
		// carousel
		var slideIndex = 1;


		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		function showSlides(n) {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("dot");
			if (n > slides.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		}
								
								
								
		