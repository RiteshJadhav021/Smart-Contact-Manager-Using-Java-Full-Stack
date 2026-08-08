import { Hero } from "../Component/Hero"
import { Navbar } from "../Component/Navbar"
import { Stats } from "../Component/Stats"

 export const Home=()=>{
    return(
        <>
        <Navbar />
        <Hero />
        <Stats />
        
        </>
    );
}