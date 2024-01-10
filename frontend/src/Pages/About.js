import AboutHero from "../Components/AboutHero/AboutHero";
import Header from "../Components/Header";
import AboutMeet from "../Components/AboutMeet/AboutMeet";
import AboutDoctors from "../Components/AboutDoctors/AboutDoctors";

function About()
{
    return(
        <div>
            <Header/>
            <AboutHero/>
            <AboutMeet/>
            <AboutDoctors/>
        </div>
    );
}

export default About;