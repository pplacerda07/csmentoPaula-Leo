import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Adds '.revealed' class to children with '.reveal' class when they enter the viewport.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.15
 * @param {string} options.rootMargin - IntersectionObserver root margin
 */
const useRevealOnScroll = (options = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        const container = containerRef.current;
        if (container) {
            const revealElements = container.querySelectorAll('.reveal');
            revealElements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return containerRef;
};

export default useRevealOnScroll;
