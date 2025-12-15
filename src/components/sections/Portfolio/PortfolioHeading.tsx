const PortfolioHeading = () => {
    return (
        <div className="text-center pb-5 sm:pb-0 space-y-6">
            <h2 className="relative text-center text-5xl md:text-6xl font-headers tracking-wider overflow-hidden">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              PORTFOLIO
            </span>
            </h2>
            <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
            <p className="max-w-2xl mx-auto text-xl text-foreground/80 text-center cursor-default">
                Here you’ll find the projects I’ve built along my journey. Each represents both hard work and the lessons I’ve learned, transformed into hands‑on experience.
            </p>
        </div>
    )
}

export default PortfolioHeading;