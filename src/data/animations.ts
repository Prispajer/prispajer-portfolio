import type {Variants} from "motion/react";

export const parentFade: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

export const fadeWhileLoading = (
    vertical: number = 20,
    horizontal: number = 0,
    delay: number = 0
): Variants => {
    return {
        hidden: {
            y: vertical,
            x: horizontal,
            scale: 0.95,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.8,
                delay: delay,
            },  
        },
    };
};

export const fadeCard = (vertical: number = 40, delay: number = 0): Variants => ({
    hidden: { y: vertical, opacity: 0, scale: 0.95 },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.6,
            delay,
        },
    },
});
