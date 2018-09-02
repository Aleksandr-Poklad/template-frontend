if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {};
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };
}


document.addEventListener("DOMContentLoaded", function() {
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


}



let paddingBody = () => {
    let menu = document.querySelector('.header_manu_fixed');
    if (menu) {
        document.body.style.paddingTop = menu.offsetHeight + 'px';
    }
};

//begin mobileMenu
function mobileMenu() {
    let burger = document.querySelector('.header .burger');

    burger.addEventListener('click', function() {
        this.parentNode.classList.toggle('open');
    });

}
//end mobileMenu

//begin openSearch
function openSearch() {
    let mobSearch = document.querySelector('.search_mob'),
        blSearch = document.querySelector('.bl_search_mob'),
        close = document.querySelector('.btn_close_serch');

    mobSearch.addEventListener('click', function() {
        blSearch.classList.add('open_search');
    });
    close.addEventListener('click', function() {
        blSearch.classList.remove('open_search');
    });
}
//end openSearch




//begin preloader
function preloader() {
    let elem = document.querySelector('.preloader');

    elem.classList.add('hide');

    setTimeout(function() {
        elem.style.display = 'none';
    }, 500)
}
//end preloader



// window.addEventListener('load', domReady);