import {GradientDots} from "@/components/ui/gradient-dots.tsx";

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-background to-card/50">
            <GradientDots
                dots={[
                    {
                        className: "absolute inset-0",
                        position: "circle at 50% 50%",
                        color: "rgba(220,38,38,0.15)",
                        stop: "50%",
                    },
                    {
                        className: "absolute top-0 left-0 w-full h-full",
                        position: "ellipse at top left",
                        color: "rgba(239,68,68,0.1)",
                        stop: "50%",
                    },
                    {
                        className: "absolute bottom-0 right-0 w-full h-full",
                        position: "ellipse at bottom right",
                        color: "rgba(185,28,28,0.12)",
                        stop: "50%",
                    },
                ]}
            />

            {Array(40)
                .fill(null)
                .map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-ember shadow-ember"
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: `${Math.random() * 20}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                    />
                ))}
        </div>
    )
}

export default HeroBackground;