const PortfolioHeading = () => {
    return (
        <div className="text-center mb-16 space-y-6">
            <h2 className="relative text-center text-5xl md:text-6xl font-headers tracking-wider overflow-hidden">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              PORTFOLIO
            </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
            <p className="max-w-2xl mx-auto text-xl text-foreground/80 cursor-default">
                Here you can browse my latest projects. These are result of my hard
                work and everything I'll learn is translated into new project to
                practice new skills.
            </p>
        </div>
    )
}

export default PortfolioHeading;