if (window.Element && !Element.prototype.closest) {
	Element.prototype.closest =
		function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i,
				el = this;
			do {
				i = matches.length;
				while (--i >= 0 && matches.item(i) !== el) {
				}
				;
			} while ((i < 0) && (el = el.parentElement));
			return el;
		};
}


document.addEventListener("DOMContentLoaded", function () {
	domReady();
});

function domReady() {

	// let widthScreen = document.documentElement.clientWidth;
	// if (widthScreen <= '992') { return false; }

	// let selects = Array.from(document.querySelectorAll('.js-select'));
	// selects.forEach((select) => {
	//     const initSelect = new CustomSelect(select)
	// });


	preloader();

	mobileMenu();
	openSearch();

	paddingBody();
	accordeon_terms();
	addAnimation();
	initPopupOnClassOpen();

}

function initPopupOnClassOpen() {
	$('.__swdOpenPopup').magnificPopup({
		type: 'inline',
		focus: '#text',
		removalDelay: 300,
	});
}

//begin animation and scroll
$.fn.animated = function (advance) {
	if ($(this).length) {

		var advanceIn = 200;
		if (advance) {
			advanceIn = advance;
		}

		if (window.pageYOffset + advanceIn > $(this).offsetParent().offset().top) {
			var ths = $(this);
			ths.addClass("animated");
		}
	}
};
$.fn.animatedQueue = function (hold, advance) {
	if ($(this).length) {
		var advanceIn = 200;
		if (advance) {
			advanceIn = advance;
		}

		if (window.pageYOffset + advanceIn > $(this).offsetParent().offset().top) {
			var ths = $(this);

			$.each(ths, function (i, t) {
				var $this = $(t);
				setTimeout(function () {
					$this.addClass("animated");
				}, i * hold);
			});
		}
	}
};

function addAnimation() {
	setTimeout(function () {
		$('.img_404_1').animated(500);
	}, 1500);


}

function scroll() {
	window.addEventListener("scroll", function () {
		addAnimation();
	})
}
//end animation and scroll

//begin accordeon_terms
function accordeon_terms() {
	$("#accord_term .hidden_content").hide().prev().click(function () {
		$(this).parents("#accord_term").find(".hidden_content").not(this).slideUp().parent().removeClass("show_content");
		$(this).next().not(":visible").slideDown().parent().addClass("show_content");
	});
}
//end accordeon_terms


let paddingBody = () => {
	let menu = document.querySelector('.header_manu_fixed');
	if (menu) {
		document.body.style.paddingTop = menu.offsetHeight + 'px';
	}
};

//begin mobileMenu
function mobileMenu() {
	let burger = document.querySelector('.header .burger');
	let body = document.querySelector('body');

	burger.addEventListener('click', function () {
		this.parentNode.classList.toggle('open');
		body.classList.toggle('no_scroll');
	});

}

//end mobileMenu

//begin openSearch
function openSearch() {
	let mobSearch = document.querySelector('.search_mob'),
		blSearch = document.querySelector('.bl_search_mob'),
		close = document.querySelector('.btn_close_serch'),
		body = document.querySelector('body');

	mobSearch.addEventListener('click', function () {
		blSearch.classList.add('open_search');
		body.classList.add('no_scroll');
	});
	close.addEventListener('click', function () {
		blSearch.classList.remove('open_search');
		body.classList.remove('no_scroll');
	});
}

//end openSearch


//begin preloader
function preloader() {
	let elem = document.querySelector('.preloader');

	elem.classList.add('hide');

	setTimeout(function () {
		elem.style.display = 'none';
	}, 500)
}

//end preloader


// window.addEventListener('load', domReady);