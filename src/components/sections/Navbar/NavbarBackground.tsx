const NavbarBackground = () => {
    return (
        <>
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full">
                <div className="w-full h-full bg-transparent border-b-0 border-t-4 border-x-2 border-accent rounded-full animate-pulse" />
            </div>
            <div className="absolute top-0 left-1/2 w-40 -translate-x-1/2 h-full">
                <div className="w-full h-full bg-transparent border-b-0 border-t-4 border-x-2 border-accent rounded-full animate-pulse" />
            </div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-full">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-28 sm:h-34 bg-gradient-to-b from-accent/40 via-primary/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 h-34 sm:h-40 bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-28 sm:h-34 bg-gradient-to-b from-secondary/40 via-secondary/40 to-transparent" />
        </>
    )
}

export default NavbarBackground;