/**
 * @module Animations
 * @description Handles interactive animations, page transition setups, and scroll-triggered animations.
 */

'use strict';

/**
 * Executes a typing (typewriter) effect on a specific element.
 * @param {HTMLElement} element - The target element to render text inside.
 * @param {string} text - The raw string text to type.
 * @param {number} typingSpeed - Delay between characters in milliseconds.
 * @param {Function} callback - Execution callback triggered once typing completes.
 */
export function runTypewriter(element, text, typingSpeed = 30, callback = null) {
    if (!element) return;
    
    // Create text content span and flashing cursor node
    const contentSpan = document.createElement('span');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    
    element.innerHTML = '';
    element.appendChild(contentSpan);
    element.appendChild(cursorSpan);

    let index = 0;
    
    function type() {
        if (index < text.length) {
            contentSpan.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            cursorSpan.classList.add('finished');
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }
    
    type();
}

/**
 * Initializes the animations module.
 */
export function initAnimations() {
    const introElement = document.getElementById('hero-intro');
    if (introElement) {
        const introductionText = "I build modern web applications, scalable digital products, and open-source solutions with a focus on performance and user experience.";
        
        // Delay typing effect slightly to let the initial reveal animations settle
        setTimeout(() => {
            runTypewriter(introElement, introductionText, 25);
        }, 1200);
    }
}
