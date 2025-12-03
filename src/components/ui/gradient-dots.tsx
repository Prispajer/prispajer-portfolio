import * as React from "react"

interface GradientDotsProps extends React.ComponentProps<"div"> {
    dots: {
        position: string
        color: string
        stop: string
    }[]
}

function GradientDots({ dots = [] }: GradientDotsProps) {
    return (
        <>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                        background: `radial-gradient(${dot.position}, ${dot.color}, transparent ${dot.stop})`,
                    }}
                />
            ))}
        </>
    )
}

export { GradientDots }