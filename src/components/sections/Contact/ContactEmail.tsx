import {Mail} from "lucide-react";

const ContactEmail= () => {
    return (
        <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-black tracking-wider text-primary">
                    EMAIL
                </h3>
            </div>
            <a
                href="mailto:contact@example.com"
                className="text-xl sm:text-2xl md:text-3xl font-bold break-words text-foreground/90 hover:text-primary transition-colors block"
            >
                koziel.adrian98@gmail.com
            </a>
        </div>
    )
}

export default ContactEmail;