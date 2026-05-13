import { useEffect } from 'react';

/**
 * Custom cursor: small dot that follows the mouse.
 * Grows on interactive elements (a, button).
 */
export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    const grow  = () => cursor.classList.add('big');
    const shrink = () => cursor.classList.remove('big');

    document.addEventListener('mousemove', move);

    const attach = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };

    attach();
    // Re-attach on DOM changes (e.g. dynamic sections)
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      mo.disconnect();
    };
  }, []);
}
