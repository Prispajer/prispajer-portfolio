import NavbarContainer from "@/components/sections/Navbar/NavbarContainer.tsx";
import HeroContainer from "@/components/sections/Hero/HeroContainer.tsx";
import AboutContainer from "@/components/sections/About/AboutContainer.tsx";
import ContactContainer from "@/components/sections/Contact/ContactContainer.tsx";
import PortfolioContainer from "@/components/sections/Portfolio/PortfolioContainer.tsx";
import FooterContainer from "@/components/sections/Footer/FooterContainer.tsx";

function App() {

    return (
        <div className="min-h-screen">
            <NavbarContainer/>
            <HeroContainer/>
            <AboutContainer/>
            <PortfolioContainer/>
            <ContactContainer/>
            <FooterContainer/>
        </div>
    )
}

export default App
