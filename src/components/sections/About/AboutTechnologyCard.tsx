import {motion} from "motion/react";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import {fadeCard} from "@/data/animations.ts";
import type {TechnologyItem} from "@/types/technology.ts";

const MotionCard = motion.create(Card);

type AboutTechnologyCardProps = {
    technology: TechnologyItem;
    index: number;
}
const AboutTechnologyCard = ({technology, index} : AboutTechnologyCardProps) => {
    return (
        <MotionCard
            key={index}
            initial="hidden"
            whileInView="show"
            variants={fadeCard(60, 60)}
            viewport={{ once: true, amount: 0 }}
            className="w-50 min-w-50 sm:min-w-45 sm:min-h-22 border-0 py-2 z-10"
            style={{
                boxShadow: `
                  4px 4px 10px ${technology.borderColor},
                  -4px 4px 10px ${technology.borderColor},
                  4px -4px 10px ${technology.borderColor},
                  -4px -4px 10px ${technology.borderColor}
                `,
                opacity: 1,
            }}
        >
            <CardContent className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-0">
                <img className="max-w-12 sm:max-w-15" alt={technology.alt} src={technology.image} />
                <CardTitle className="font-buttons sm:pt-1">{technology.name}</CardTitle>
            </CardContent>
        </MotionCard>
    )
}

export default AboutTechnologyCard;