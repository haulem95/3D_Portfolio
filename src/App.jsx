import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Showcase />
            <LogoSection />
        </>
    )
}
export default App;