const HeroHeading = () => {
    return (
        <div className="relative grid place-items-center space-y-4">
            <h2 className="text-lg lg:text-2xl text-muted-foreground mb-4 tracking-widest">
                I'M
            </h2>

            <h1
                className="flex flex-col items-center
                   text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                   font-black leading-26 tracking-wide cursor-default font-headers"
            >
        <span className="inline-block">
          <span
              className="bg-gradient-to-r from-primary via-accent to-primary
                       bg-clip-text text-transparent animate-flicker
                       drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            ADRIAN
          </span>
        </span>
                <span className="relative inline-block">
          <span
              className="bg-gradient-to-r from-primary via-accent to-primary
                       bg-clip-text text-transparent animate-flicker
                       drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            KOZIEŁ
          </span>
        </span>
            </h1>
            <div
                className="absolute bottom-11 left-0 w-full h-2
                   bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow"
            />

            <p
                className="text-3xl md:text-4xl text-muted-foreground pt-8
                   font-semibold tracking-wider"
            >
                Web Developer
            </p>
        </div>
    )
}

export default HeroHeading