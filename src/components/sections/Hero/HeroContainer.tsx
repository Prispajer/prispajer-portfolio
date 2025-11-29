import HeroDescription from "@/components/sections/Hero/HeroDescription.tsx";
import HeroButtons from "@/components/sections/Hero/HeroButtons.tsx";
import HeroHeading from "@/components/sections/Hero/HeroHeading.tsx";
import HeroBackground from "@/components/sections/Hero/HeroBackground.tsx";
import HeroSocials from "@/components/sections/Hero/HeroSocials.tsx";

const HeroContainer = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <HeroBackground/>
            <div className="container mx-auto py-20 relative">
                <div className="max-w-5xl mx-auto pt-24">
                    <div className="grid place-items-center">
                        <div className="max-w-2xl space-y-8 animate-fade-in">
                            <HeroHeading/>
                            <HeroDescription/>
                            <HeroButtons/>
                            <HeroSocials/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroContainer;