import { useInView } from 'react-intersection-observer';

export const useFixedContactButton = () => useInView({
    threshold: 0,
    rootMargin: '90px',
    onChange: (inView) => {
        const button = document.getElementById('contact-us');
        if (!button) return;
        if(inView) {
            button.style.position = 'absolute';
        } else {
            button.removeAttribute('style');
        }
    }
});
