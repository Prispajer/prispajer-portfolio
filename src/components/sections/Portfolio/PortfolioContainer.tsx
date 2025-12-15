import {motion} from "motion/react";
import PortfolioBackground from "@/components/sections/Portfolio/PortfolioBackground.tsx";
import PortfolioCard from "@/components/sections/Portfolio/PortfolioCard.tsx";
import PortfolioHeading from "@/components/sections/Portfolio/PortfolioHeading.tsx";
import {portfolioItems} from "@/data/data.ts";
import {fadeWhileLoading} from "@/data/animations.ts";


const PortfolioContainer = () => {
    return (
        <section
            id="portfolio"
            className="relative flex items-center justify-center pt-30 pb-30 overflow-hidden"
        >
            <PortfolioBackground/>
            <motion.div initial="hidden" whileInView="show" variants={fadeWhileLoading(-160, 0, 0)} viewport={{ once: true, amount: 0 }} className="container relative mx-auto max-w-11/12 sm:max-w-10/12">
                <PortfolioHeading/>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-20 gap-8">
                    {portfolioItems.map((portfolio, index) => (
                        <PortfolioCard portfolio={portfolio} index={index}/>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default PortfolioContainer;