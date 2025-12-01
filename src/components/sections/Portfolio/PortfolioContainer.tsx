import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioItems } from "@/data/data.ts";
import PortfolioBackground from "@/components/sections/Portfolio/PortfolioBackground.tsx";

const PortfolioContainer = () => {
    return (
        <section
            id="portfolio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 z-0"
        >
            <PortfolioBackground/>
            <div className="container mx-auto px-4 max-w-10/12 relative z-10 ">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-5xl md:text-6xl font-black font-headers tracking-wider">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              PORTFOLIO
            </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
                    <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                        Here you can browse my latest projects. These are result of my hard work and everything I'll learn is translated into new project to practice new skills.
                    </p>
                </div>
                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-10/12 mx-auto"
                >
                    <CarouselContent>
                        {portfolioItems.map((portfolio, index) => (
                            <CarouselItem key={index} className="basis-full lg:basis-1/2 2xl:basis-1/3">
                                <div className="p-4 cursor-pointer">
                                    <Card className="relative bg-gradient-card backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] group overflow-hidden">
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <CardContent className="relative p-0">
                                            {/* Project Image */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={portfolio.image}
                                                    alt={portfolio.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                            </div>

                                            {/* Project Info */}
                                            <div className="p-6 space-y-4">
                                                <h3 className="text-2xl font-black tracking-wider text-test group-hover:text-accent transition-colors">
                                                    {portfolio.name}
                                                </h3>
                                                <p className="text-foreground/80 leading-relaxed">
                                                    {portfolio.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {portfolio.technologies.map((technology, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary border border-primary/30 rounded-full"
                                                        >
                              {technology}
                            </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Corner accents */}
                                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/60 rounded-tr-lg" />
                                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/60 rounded-bl-lg" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-primary/50 hover:border-primary hover:bg-primary/10 cursor-pointer" />
                    <CarouselNext className="border-primary/50 hover:border-primary hover:bg-primary/10 cursor-pointer" />
                </Carousel>
            </div>
        </section>
    );
};

export default PortfolioContainer;