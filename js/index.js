'use strict';

/*================================================
    Javascript media query to set header's content
=================================================*/
const header = document.querySelector('#header');
var deviceSizes = [
    window.matchMedia( '(max-width: 1220px)' ),
    window.matchMedia( '(max-width: 1030px)' ),
    window.matchMedia( '(max-width: 860px)' ),
    window.matchMedia( '(max-width: 440px)' ),
    window.matchMedia( '(max-width: 310px)' )
]

let respondToQuery = () => {
    if (deviceSizes[0].matches) {
       header.innerHTML = 'Max-width: 1220px';
    }

    if (deviceSizes[1].matches) {
        header.innerHTML = 'Max-width: 1030px';
    }

    if (deviceSizes[2].matches) {
        header.innerHTML = 'Max-width: 860px';
    }

    if (deviceSizes[3].matches) {
        header.innerHTML = 'Max-width: 440px';
    }

    if (deviceSizes[4].matches) {
        header.innerHTML = 'Max-width: 310px';
    }

    if (!deviceSizes[0].matches && !deviceSizes[1].matches && !deviceSizes[2].matches && !deviceSizes[3].matches && !deviceSizes[4].matches) {
        header.innerHTML = 'Larger Desktops';
    }
}

for (var i=0; i<deviceSizes.length; i++) {
    respondToQuery(deviceSizes[i]);
    deviceSizes[i].addListener(respondToQuery);
}

/*========================================================
    Store css width & height in function deviceOrientation
    & call in function deviceWidthAndHeight for later use
=========================================================*/
let deviceOrientation = () => {
    if (document.documentElement.clientWidth <= document.documentElement.clientHeight) {
        document.querySelector('.orientation').innerHTML = 'Portrait:';
    }else {
        document.querySelector('.orientation').innerHTML = 'Landscape:';
    }
}

let deviceWidthAndHeight = () => {
    read_css_width_onresize.innerHTML = `<span class="orientation"></span> ${document.documentElement.clientWidth}px <span class="times">&times;</span> ${document.documentElement.clientHeight}px`;
    deviceOrientation();
}

/*================================================
    Show css width & height of screen on page load 
=================================================*/
window.onload = () => {
    deviceWidthAndHeight();
    read_css_width_onresize.classList.remove('hide-width');
    read_css_width_onresize.classList.add('reduce-width-opacity');
}

/*=============================================
    Show css width & height of screen on resize 
==============================================*/
const read_css_width_onresize = document.querySelector('#css_width_onresize');
window.onresize = () => {
    deviceWidthAndHeight();
    read_css_width_onresize.classList.remove('hide-width');
    read_css_width_onresize.classList.remove('reduce-width-opacity');
    let remove = () => {
        read_css_width_onresize.classList.add('reduce-width-opacity');
    }
    setTimeout(remove, 2000);
}
