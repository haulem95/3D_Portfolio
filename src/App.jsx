import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeaturesCard from "./sections/FeaturesCard";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import ExperienceSection from "./sections/ExperienceSection";
import TechStacks from "./sections/TechStacks";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Showcase />
            <LogoSection />
            <FeaturesCard />
            <ExperienceSection />
            <TechStacks />
        </>
    )
}
export default App;