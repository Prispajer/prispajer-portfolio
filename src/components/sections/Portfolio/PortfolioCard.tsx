import {motion} from "motion/react";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import PortfolioButtons from "@/components/sections/Portfolio/PortfolioButtons.tsx";
import PortfolioImage from "@/components/sections/Portfolio/PortfolioImage.tsx";
import {fadeCard} from "@/data/animations.ts";
import type {PortfolioItem} from "@/types/portfolio.ts";


const MotionCard = motion.create(Card);

type PortfolioCardProps = {
    portfolio: PortfolioItem;
    index: number;
}

const PortfolioCard = ({portfolio, index} : PortfolioCardProps) => {
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
                <PortfolioImage name={portfolio.name} image={portfolio.image} />
                <div className="flex flex-col flex-grow min-h-[240px] p-6">
                    <CardTitle className="text-2xl font-black tracking-wider text-third group-hover:text-accent transition-colors duration-900 cursor-default">
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
                    <PortfolioButtons liveApp={portfolio.liveApp} sourceCode={portfolio.sourceCode} videoDemo={portfolio.videoDemo}
                    />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/60 rounded-tr-lg animate-line-expand pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/60 rounded-bl-lg animate-line-expand pointer-events-none" />
            </CardContent>
        </MotionCard>
    )
}

export default PortfolioCard;