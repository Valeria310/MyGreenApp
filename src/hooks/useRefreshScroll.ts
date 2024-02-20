import { useEffect } from 'react';

export function useRefreshScroll() {

    useEffect(() => {
        const navigationEntries = window.performance.getEntriesByType('navigation');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
            console.log('reload');
            window.scrollTo(0, 0);
            if (window.location.hash) {
                window.history.replaceState('', document.title, window.location.pathname); // hash reset if page reloaded
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        else if(navigationEntries.length > 0 && navigationEntries[0].type === 'navigate') {
            const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
            scrollToElement(elementId); // scroll to hash if page is loaded
        }

    }, [] );


    const scrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


}
