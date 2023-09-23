import { useInView } from 'react-intersection-observer';

export const useHideContactButton = () => useInView({
    threshold: 0,
    rootMargin: '0px',
    onChange: (inView) => {
        const button = document.getElementById('contact-us');
        if (!button) return;
        if(inView) {
            button.style.display = 'none';
        } else {
            button.removeAttribute('style');
        }
    }
});
