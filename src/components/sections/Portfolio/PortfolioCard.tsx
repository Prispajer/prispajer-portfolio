import {motion} from "motion/react";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import PortfolioButtons from "@/components/sections/Portfolio/PortfolioButtons.tsx";
import {fadeCard} from "@/data/animations.ts";

const MotionCard = motion.create(Card);

const PortfolioCard = ({portfolio, index} : {portfolio: {name: string
        image?: string
        stack: string[]
        liveApp?: string
        sourceCode: string
        videoDemo?: string
        description: string}, index: number}) => {
    return (
        <MotionCard
            key={index}
            initial="hidden"
            whileInView="show"
            variants={fadeCard(60)}
            viewport={{ once: true, amount: 0 }}
            className="relative flex flex-col bg-gradient-card backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-700 shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] group overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="flex flex-col h-full p-0">
                <div className="relative h-64 md:h-72 overflow-hidden">
                    {portfolio.image ? (
                        <img
                            src={portfolio.image}
                            alt={portfolio.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br">
                            No image
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="flex flex-col flex-grow min-h-[240px] p-6">
                    <CardTitle className="text-2xl font-black tracking-wider text-third group-hover:text-accent transition-colors cursor-default">
                        {portfolio.name}
                    </CardTitle>
                    <p className="mt-2 text-foreground/80 text-justify leading-relaxed cursor-default">
                        {portfolio.description}
                    </p>
                    <div className="flex flex-wrap mt-4 gap-2 overflow-x-auto">
                        {portfolio.stack.map((technology, index) => (
                            <span
                                key={index}
                                className="flex items-center justify-center px-3 py-1 text-xs font-bold bg-primary/20 text-center text-primary border border-primary/30 rounded-full cursor-default"
                            >
                        {technology}
                      </span>
                        ))}
                    </div>
                    <PortfolioButtons sourceCode={portfolio.sourceCode} liveApp={portfolio?.liveApp} videoDemo={portfolio?.videoDemo} />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/60 rounded-tr-lg animate-line-expand pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/60 rounded-bl-lg animate-line-expand pointer-events-none" />
            </CardContent>
        </MotionCard>
    )
}

export default PortfolioCard;