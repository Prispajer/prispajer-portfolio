import {GradientDots} from "@/components/ui/gradient-dots.tsx";

const AboutBackground = () => {
    return (
        <div className="absolute inset-0 bg-background">
            <GradientDots
                dots={[
                    {
                        position: "circle at 50% 60%",
                        color: "rgba(185,28,28,0.18)",
                        stop: "25%",
                    },
                    {
                        position: "ellipse at top left",
                        color: "rgba(239,68,68,0.08)",
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
                    {
                        position: "circle at 70% 80%",
                        color: "rgba(185,28,28,0.05)",
                        stop: "5%",
                    },
                ]}
            />
        </div>
    )
}

export default AboutBackground;