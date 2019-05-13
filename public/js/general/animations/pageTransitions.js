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
 * @param type
 * @param callback
 * @param elements
 */
const transition = (type, callback, elements) => {
    const blend = document.querySelector('[data-blend]');

    let opacity = [];
    let z = [];
    let ease = '';
    let duration = 0.4;

    if (type === 'intro') {
        opacity = [0, 1];
        z = [-20, 0];
        ease = 'Power4.easeOut';
        duration = 0.8;
    }
    if (type === 'outro') {
        opacity = [1, 0];
        z = [0, 20];
        ease = 'Power4.easeIn';
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
};
