import { TweenMax } from 'gsap/TweenMax';
import { ScrollToPlugin } from 'gsap/all'; // eslint-disable-line

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
    if (firstPageLoad) {
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
    if (firstPageLoad) {
        firstPageLoad = false;
        return;
    }

    transition('outro', callback, elements);
};

/**
 * Set css origin
 * @param type
 */
const setOrigin = type => {
    let wh = document.body.clientHeight;
    let so = window.scrollY;
    let dh = document.getElementById('app').clientHeight;
    let origin = 50;

    if (type === 'intro') {
        origin = ((wh * 0.5) / dh) * 100;
    }
    if (type === 'outro') {
        origin = ((so + wh / 2) / dh) * 100;
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
    const blend = document.querySelector('[data-blend]');

    let opacity = [];
    let z = [];
    let ease = '';
    // let cp = [];
    let duration = 0.4;

    if (type === 'intro') {
        opacity = [0, 1];
        z = [-20, 0];
        ease = 'Power4.easeOut';
        // cp = [0, 1];
        duration = 0.8;
    }
    if (type === 'outro') {
        opacity = [1, 0];
        z = [0, 20];
        ease = 'Power4.easeIn';
        // cp = [1, 0];
    }

    if (type === 'outro') {
        TweenMax.fromTo(
            blend,
            duration * 1.1,
            {
                y: "0%"
            },
            {
                y: "200%",
                ease: ease
            }
        );
    }

    TweenMax.fromTo(
        elements.mainContainer,
        duration,
        {
            opacity: opacity[0],
            y: z[0]
        },
        {
            opacity: opacity[1],
            y: z[1],
            ease: ease,
            // onComplete: callback
            onComplete: () => {
                callback();
                if (type === 'outro') {
                    TweenMax.set(window, { scrollTo: 0 });
                }
            }
        }
    );


    // TweenMax.fromTo(
    //     document.body,
    //     duration,
    //     {
    //         '--z': cp[0]
    //     },
    //     {
    //         '--z': cp[1],
    //         ease: ease,
    //         onComplete: () => {
    //             if (type === 'outro') {
    //                 TweenMax.set(window, { scrollTo: 0 });
    //             }
    //         }
    //     }
    // );
};
