import animejs from 'animejs';

/**
 * Check if er are here for the first time
 *
 * @type {boolean}
 */
let firstPageLoad = true;

/**
 * Page intro animation
 *
 * @param callback
 * @param elements
 */
export const pageIntro = (callback, elements) => {
    if (firstPageLoad) {
        firstPageLoad = false;
        return;
    }

    // Check if user doesn't like motion
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if(typeof window.scrollTo === "function") {
            window.scrollTo(0, 0);
        }

        callback();
        return;
    }

    transition('intro', callback, elements);
};

/**
 * Page outro animation
 *
 * @param callback
 * @param elements
 */
export const pageOutro = (callback, elements) => {
    if (firstPageLoad) {
        firstPageLoad = false;
        return;
    }

    // Check if user doesn't like motion
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if(typeof window.scrollTo === "function") {
            window.scrollTo(0, 0);
        }

        callback();
        return;
    }

    transition('outro', callback, elements);
};

/**
 * @param type
 * @param callback
 * @param elements
 */
const transition = (type, callback, elements) => {
    const tl = animejs.timeline({
        complete: () => {
            if(type === 'outro') {
                if(typeof window.scrollTo === "function") {
                    window.scrollTo(0, 0);
                }
            }

            callback();
        }
    });
    const blend = document.querySelector('[data-blend]');

    let opacity = [];
    let y = [];
    let ease = '';
    let duration = 300;

    if (type === 'intro') {
        opacity = [0, 1];
        y = [-20, 0];
        ease = 'easeOutQuart';
        duration = 800;
    }
    if (type === 'outro') {
        opacity = [1, 0];
        y = [0, 20];
        ease = 'easeInQuart';
    }

    tl.add({
        targets: elements.mainContainer,
        duration: duration,
        opacity: opacity,
        translateY: y,
        easing: ease
    }, 0);

    if (type === 'outro') {
        tl.add({
            targets: blend,
            translateY: ["0%", "200%"],
            easing: ease,
            duration: duration * 1.5
        }, 0);
    }
};
