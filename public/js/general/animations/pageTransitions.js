import {TweenMax} from 'gsap/TweenMax';

/**
 * Check if er are here for the first time
 * @type {boolean}
 */
let firstPageLoad = true;

/**
 * Page intro animation
 * @param callback
 * @param elements
 */
export const pageIntro = (callback, elements) => {
    if(firstPageLoad) {
        firstPageLoad = false;
        return;
    }

    transition('intro', callback, elements);
};

/**
 * Page outro animation
 * @param callback
 * @param elements
 */
export const pageOutro = (callback, elements) => {
    if(firstPageLoad) {
        firstPageLoad = false;
        return;
    }

    transition('outro', callback, elements);
};

/**
 * Set css origin
 * @param type
 */
const setOrigin = (type) => {
    let wh = document.body.clientHeight;
    let so = window.scrollY;
    let dh = document.getElementById('app').clientHeight;
    let origin = 50;

    if(type === "intro"){
        origin = ((wh * 0.5) / dh) * 100;
    }
    if(type === "outro"){
        origin = (so+wh/2) / dh * 100;
    }

    document.body.style.setProperty('--originY', origin);
};

/**
 * Ben's magic transition
 * @param type
 * @param callback
 * @param elements
 */
const transition = (type, callback, elements) => {
    setOrigin(type);

    let opacity = [];
    let z = [];
    let ease = '';
    let cp = [];

    if(type === "intro"){
        opacity = [0, 1];
        z = [-100, 0];
        ease = 'Power4.easeOut';
        cp = [-100, 0];
    }
    if(type === "outro"){
        opacity = [1, 0];
        z = [0, 100];
        ease = 'Power4.easeIn';
        cp = [0, 10];
    }

    TweenMax.fromTo(elements.mainContainer, 0.8, {
        opacity: opacity[0],
        z: z[0]
    }, {
        opacity: opacity[1],
        z: z[1],
        ease: ease,
        onComplete: callback
    });
    TweenMax.fromTo(document.body, 0.8, {
        '--z': cp[0]
    }, {
        '--z': cp[1],
        ease: ease,
        onComplete: () => {
            if(type === "outro"){
                TweenMax.set(window, {scrollTo: 0})
            }
        }
    });
};
