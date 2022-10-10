//js file

function stickydiv() {

	var div = document.getElementById('stick-menu');
	var pg_pos = window.pageYOffset;

	if(pg_pos >= 50) {
		div.className = 'sec-1-90 motion position-stick bg-white';
	} else {
		div.className = 'sec-1-90 motion position-rel';
	}
}

function togglemenu(toggle,pop) {
	
	var tg = document.getElementById(toggle);
	var bx = document.getElementById(pop);

	//console.log(toggle,pop);
	//console.log(tg.name);
	
	if(tg.name == 'on') {
		bx.style.display = 'none';
		tg.name = 'off';
	}else if(tg.name == 'off') {
		bx.style.display = 'block';
		tg.name = 'on';
	}
	//console.log(tg.name)
        
/**function closeMenu(pop,toggle) {
	var bx = document.getElementById(pop);
	var tg = document.getElementById(toggle);

	if(bx.name == 'on') {
		tg.style.display = 'block';
		bx.name = 'off';
	}**/
}
/**let slideIndex = [1];
let slideId = ["mySlide"]

showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}**/

var slider = document.getElementById("item");
var myslide = item.getElementsByClassName("myslide");
    function next(){
    	slider.append(myslide[0]);

    }

    function prev(){
    	slider.prepend(myslide[3]);
    }
    //console.log(myslide);
    //console.log(slider);

window.onscroll = () => {  
	stickydiv();
}