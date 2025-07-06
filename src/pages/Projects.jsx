
import Banner from "../components/Banner/Banner.jsx";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx"


export default Projects

function Projects () {
    return (
        <>
        <Header />
            <Banner title="Projects" image="projects.svg"/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer />
        </>
    )
}