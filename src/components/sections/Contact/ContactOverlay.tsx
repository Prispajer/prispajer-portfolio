const ContactOverlay = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-xl rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg animate-pulse" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg animate-pulse" />
        </>
    )
}

export default ContactOverlay;