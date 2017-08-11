import {TweenMax} from 'gsap';

/**
 * Initial intro animation
 * @param callback
 * @param elements
 */
export const mainIntro = (callback, elements) => {
    TweenMax.to(elements.mainContainer, 1, {
        opacity: 1,
        onComplete: callback
    });
};

/**
 * Page intro animation
 * @param callback
 * @param elements
 */
export const pageIntro = (callback, elements) => {
    // TweenMax.to(elements.mainContainer, 0.5, {
    //     opacity: 1,
    //     onComplete: callback
    // });
    TweenMax.fromTo(elements.mainContainer, 0.5, {
        opacity: 0,
        z: -100
    }, {
        opacity: 1,
        z: 0,
        ease: Power2.easeOut,
        onComplete: callback
    });
    TweenMax.fromTo(document.body, 0.5, {
        '--z': -100
    }, {
        '--z': 0
    })
};

/**
 * Page outro animation
 * @param callback
 * @param elements
 */
export const pageOutro = (callback, elements) => {
    // TweenMax.to(elements.mainContainer, 0.5, {
    //     opacity: 0,
    //     onComplete: callback
    // });
    TweenMax.fromTo(elements.mainContainer, 0.5, {
        opacity: 1,
        z: 0
    }, {
        opacity: 0,
        z: 100,
        ease: Power2.easeIn,
        onComplete: callback
    });
    TweenMax.fromTo(document.body, 0.5, {
        '--z': 0
    }, {
        '--z': 10
    })
};
