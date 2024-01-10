import Content from "../Components/Content/Content";
import Doctors from "../Components/Doctors/Doctors";
import Header from "../Components/Header";
import Hero from "../Components/Hero/Hero";
import Meet from "../Components/Meet/Meet";
import Services from "../Components/Services/Services";
import Help from "../Components/Help/Help"
import Footer from "../Components/Footer/Footer";



function Home()
{
    return(
        <div>
            <Header/>
            <Hero/>
            <Content/>
            <Meet/>
            <Doctors/>
            <Services/>
            <Help/>
            <Footer/>
        </div>
    );
}

export default Home;