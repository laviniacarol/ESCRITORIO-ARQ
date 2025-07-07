import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact () {
    return (
        <>
        <Header/>
        <Banner title="Contact" image="contact.svg"/>
        <div className="container">
            <ContactForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;
