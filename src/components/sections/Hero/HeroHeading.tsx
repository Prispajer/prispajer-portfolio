const HeroHeading = () => {
    return (
        <div className="relative grid place-items-center space-y-4">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 tracking-widest cursor-default">
                I'M
            </h2>

            <h1
                className="flex flex-col items-center
                   text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                   font-black leading-tight tracking-wide cursor-default font-headers"
            >
        <span
            className="bg-heading-1
                     bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] animate-inferno-glow"
        >
          ADRIAN
        </span>
                <span
                    className="bg-heading-1
                     bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] animate-inferno-glow"
                >
          KOZIEŁ
        </span>
            </h1>

            <div
                className="absolute bottom-11 left-0 w-full h-2
                   bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow"
            />

            <p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground pt-8
                   font-semibold tracking-wider cursor-default"
            >
                Web Developer
            </p>
        </div>
    )
}

export default HeroHeading