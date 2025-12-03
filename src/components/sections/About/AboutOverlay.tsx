const AboutOverlay = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg animate-float-diagonal-up-left" />
            <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg animate-float-diagonal-down-right" />
        </>
    )
}

export default AboutOverlay;