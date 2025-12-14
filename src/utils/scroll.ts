export const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const distance = element && element.getBoundingClientRect().top + window.scrollY;
    element && smoothScrollTo(distance!, 1000);
}

export const smoothScrollTo = (targetY: number, duration: number = 1000) => {
    const startY = window.scrollY;
    const diffY = targetY - startY;
    if (diffY === 0) return;
    window.requestAnimationFrame(createScrollStep(startY, diffY, duration));
}

const createScrollStep = (startY: number, diffY: number, duration: number) => {
    let startTime: number | null = null;

    return function scrollStep(timestamp: number){
        if(!startTime) startTime = timestamp;
        const lastingTime = timestamp - startTime;
        const percent = Math.min(lastingTime/duration,1)
        const eased = percent < 0.5 ? 2 * percent * percent : -1 + (4-2 * percent) * percent;
        const currentY = startY + (diffY * eased);

        window.scrollTo(0, currentY);

        if(lastingTime < duration) {
            window.requestAnimationFrame(scrollStep);
            ["wheel", "keydown", "touchmove"].forEach(event => (window.addEventListener(event, preventDefault, {passive: false} as AddEventListenerOptions)))
        }
        else{
            ["wheel", "keydown", "touchmove"].forEach(event => (window.removeEventListener(event, preventDefault, {passive: false} as AddEventListenerOptions )))
        }
    }
}
const preventDefault = (event: Event) => (event.preventDefault());

