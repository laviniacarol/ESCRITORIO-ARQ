import { useContext} from 'react';
import Banner from "../components/Banner/Banner.jsx";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx"


//CONTEXT
import { AppContext } from '../contexts/AppContext';



function Projects () {
        const appContext = useContext(AppContext)
    return (
        <>
        <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects}image="projects.svg"/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer />
        </>
    )
}

export default Projects
