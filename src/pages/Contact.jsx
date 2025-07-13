import { useContext} from 'react';
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";


//CONTEXT
import { AppContext } from '../contexts/AppContext';



function Contact () {
        const appContext = useContext(AppContext)
    return (
        <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.svg"/>
        <div className="container">
            <ContactForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;
