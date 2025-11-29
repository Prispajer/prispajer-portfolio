import * as React from "react"

interface GradientDotsProps extends React.ComponentProps<"div"> {
    dots: {
        className: string
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
                    className={dot.className}
                    style={{
                        background: `radial-gradient(${dot.position}, ${dot.color}, transparent ${dot.stop})`,
                    }}
                />
            ))}
        </>
    )
}

export { GradientDots }