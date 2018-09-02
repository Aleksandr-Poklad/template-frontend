import {TimelineMax} from 'gsap';

 export let animPattern = function() {
  if($(window).width() < 992) {
		return false;
	}
let tl = new TimelineMax({
	repeat: 5, 
	yoyo: true
});

	tl.staggerFromTo('.pattern_wr .square_group', 0.25, { opacity: 0 }, { opacity: 1,  ease:Back.easeOut }, 0.1);

}

 export let animSideScroll = function() {
  if($(window).width() < 992) {
		return false;
	}
let tl2 = new TimelineMax({
	repeat: 6, 
	yoyo: true,
	delay: 5
});

	tl2.staggerFromTo('.bl_line .line', 0.1, { background: '#fff' }, { background: '#11bedb',  ease:Back.easeOut }, 0.075);

}

// function initAnimPattern() {
// 	let isActive = document.querySelector('.active');
// 	if() {
// 		animPattern();
// 	}
// }

// export animPattern;