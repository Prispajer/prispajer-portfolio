const PortfolioBackground = () => {
    return (
        <div className="absolute inset-0 bg-background">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
        </div>
    )
}

export default PortfolioBackground;