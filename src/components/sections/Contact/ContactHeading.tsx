const ContactHeading = () => {
    return (
        <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black font-headers tracking-wider">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-headers drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              CONTACT
            </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Ready to start your next mission? Let's connect.
            </p>
        </div>
    )
}

export default ContactHeading;