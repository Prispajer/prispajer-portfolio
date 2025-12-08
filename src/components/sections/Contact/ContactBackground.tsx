import {GradientDots} from "@/components/ui/gradient-dots.tsx";

const ContactBackground = () => {
    return (
        <div className="absolute inset-0 bg-background">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
            <GradientDots
                dots={[
                    {
                        position: "circle at 50% 60%",
                        color: "rgba(185,28,28,0.18)",
                        stop: "25%",
                    },
                    {
                        position: "ellipse at top left",
                        color: "rgba(239,68,68,0.10)",
                        stop: "50%",
                    },
                    {
                        position: "ellipse at bottom right",
                        color: "rgba(124,29,29,0.1)",
                        stop: "60%",
                    },
                    {
                        position: "circle at 80% 80%",
                        color: "rgba(220,38,38,0.06)",
                        stop: "30%",
                    },
                    {
                        position: "circle at 50% 60%",
                        color: "rgba(185,28,28,0.18)",
                        stop: "45%",
                    },
                    {
                        position: "circle at 70% 30%",
                        color: "rgba(185,28,28,0.15)",
                        stop: "25%",
                    },
                ]}
            />
        </div>
    )
}

export default ContactBackground;