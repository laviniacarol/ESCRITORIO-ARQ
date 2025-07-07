import Header from "../components/Header/Header";
import AboutText from "../components/AboutText/AboutText";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";

export default About

function About () {
    return (
        <>
         <Header />
            <Banner title="About" image="about.svg"/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer />
        </>
    )
}