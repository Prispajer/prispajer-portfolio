import NavbarContainer from "@/components/sections/Navbar/NavbarContainer.tsx";
import HeroContainer from "@/components/sections/Hero/HeroContainer.tsx";
import AboutContainer from "@/components/sections/About/AboutContainer.tsx";

function App() {

    return (
        <div className="min-h-screen">
            <NavbarContainer/>
            <HeroContainer/>
            <AboutContainer/>
        </div>
    )
}

export default App
