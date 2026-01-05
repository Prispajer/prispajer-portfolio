import {GradientDots} from "@/components/ui/gradient-dots.tsx";

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 bg-background">
            <GradientDots
                dots={[
                    {
                        position: "circle at 50% 45%",
                        color: "rgba(185,28,28,0.25)",
                        stop: "60%",
                    },
                    {
                        position: "ellipse at top right",
                        color: "rgba(220,38,38,0.15)",
                        stop: "30%",
                    },
                    {
                        position: "ellipse at bottom left",
                        color: "rgba(124,29,29,0.12)",
                        stop: "60%",
                    },
                ]}
            />
            {Array(40)
                .fill(null)
                .map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-ember-rise shadow-ember"
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