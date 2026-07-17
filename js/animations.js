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
 * Animates numerical stat counters up to their target values.
 * @param {HTMLElement} element - The DOM element displaying the number.
 */
export function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // Animation length in milliseconds
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * target);
        
        element.textContent = currentValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target + suffix;
        }
    }

    requestAnimationFrame(step);
}

/**
 * Configures the Intersection Observer to trigger reveal transitions on scroll.
 */
export function initScrollReveal() {
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                
                // If the element is a stats counter, trigger the counting animation
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                observer.unobserve(entry.target); // Execute animation only once
            }
        });
    }, revealOptions);

    // Observe reveal components and statistics containers
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .stat-number');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
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

    // Initialize Scroll Reveal & Counter systems
    initScrollReveal();
}

