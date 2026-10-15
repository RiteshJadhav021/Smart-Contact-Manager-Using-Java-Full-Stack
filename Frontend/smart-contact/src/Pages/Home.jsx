
import { About } from "../Component/About";
import { Contact } from "../Component/Contact";
import { Feature } from "../Component/Feature";
import { Footer } from "../Component/Footer";
import { Hero } from "../Component/Hero"
import { Navbar } from "../Component/Navbar"
import { Stats } from "../Component/Stats"


 export const Home=()=>{
    return(
        <>
        <Navbar />
        <Hero />
        <Stats />
        <Feature />
        <About />
        <Contact />
        <Footer/>
        
        </>
    );
}