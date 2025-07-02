import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";

function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Sub</p>
            <Button buttonStyle="secondary" arrow >oi</Button>
            <div className="container">
                <Hero/>
            </div>
            <Footer />
        </>
    );
}

export default Home;
