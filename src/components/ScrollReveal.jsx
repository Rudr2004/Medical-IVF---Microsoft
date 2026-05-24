import React, { useEffect } from 'react';

export default function ScrollReveal({ currentPage, children }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01, // Trigger as soon as 1% is visible
          rootMargin: '0px',
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Fallback: if element is already in or above the viewport, show it immediately
        if (rect.top < window.innerHeight) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 50);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return <>{children}</>;
}

