const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images'); 

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
	container.animate([{opacity:'0.1'},{opacity:'1.0'}]
	,{duration:1000,fill:'forwards'});
	if (counter === 15) {
		counter = -1;
	}
	counter++;
	container.style.backgroundImage = `url(img/bcg-${counter}.jpg`
}

function prevSlide() {
	container.animate([{opacity:'0.1'},{opacity:'1.0'}]
	,{duration:1000,fill:'forwards'});
	if (counter === 0) {
		counter = 16;
	}
	counter--;
	container.style.backgroundImage = `url(img/bcg-${counter}.jpg`
}