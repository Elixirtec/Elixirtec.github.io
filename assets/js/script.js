jQuery(document).ready(function($){
		$('.scroll_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
});

function show(id) {
		var section1 = document.getElementById('section1');
		var section2 = document.getElementById('section2');
		var section3 = document.getElementById('section3');
		section1.style.display = 'none';
		section2.style.display = 'none';
		section3.style.display = 'none';
		if (id == 1) {
			section1.style.display = 'block';
		} else if (id == 2) {
			section2.style.display = 'block';
		} else if (id == 3) {
			section3.style.display = 'block';
		}
		screenAdapt();
}

function screenAdapt() {
	if (section1.style.display == 'block'){
		document.getElementById('section1').style.height = (screen.height - document.getElementById('navigator').scrollHeight - document.getElementById('line').scrollHeight) + "px";
	}
}

show(1)
screenAdapt();