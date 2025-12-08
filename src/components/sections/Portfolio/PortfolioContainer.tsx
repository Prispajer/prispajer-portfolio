import PortfolioBackground from "@/components/sections/Portfolio/PortfolioBackground.tsx";
import PortfolioCard from "@/components/sections/Portfolio/PortfolioCard.tsx";
import {portfolioItems} from "@/data/data.ts";
import PortfolioHeading from "@/components/sections/Portfolio/PortfolioHeading.tsx";


const PortfolioContainer = () => {
    return (
        <section
            id="portfolio"
            className="relative flex items-center justify-center pt-40 overflow-hidden"
        >
            <PortfolioBackground/>
            <div className="container mx-auto px-4 max-w-10/12 relative">
                <PortfolioHeading/>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {portfolioItems.map((portfolio, index) => (
                        <PortfolioCard portfolio={portfolio} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioContainer;