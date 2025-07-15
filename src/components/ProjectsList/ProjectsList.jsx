import { useContext, useState, useEffect } from 'react';
import './ProjectsList.css'

//ASSETS
import LikedFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'


//COMPONENTS
import Button from '../Button/Button';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';

//UTILS 
import { getApiData } from '../../services/apiServices';



function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProjects] = useState([]);
  const appContext = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'));
    if (savedFavProjects) {
      setFavProjects(savedFavProjects);
    }
  }, []);

  const handleSavedProjects = (id) => {
    setFavProjects((prevFavProjects) => {
      let updated;
      if (prevFavProjects.includes(id)) {
        updated = prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        updated = [...prevFavProjects, id];
      }
      sessionStorage.setItem("favProjects", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {projects &&
          projects.map((project) => (
            <div
              className="projects-card d-flex jc-center al-center fd-column"
              key={project.id}
            >
              <div
                className="thumb tertiary-background"
                style={{
                  backgroundImage: `url(${project.thumb})`,
                  backgroundColor: 'transparent',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <Button
                buttonStyle="unstyled"
                onClick={() => handleSavedProjects(project.id)}
              >
                <img
                  src={favProjects.includes(project.id) ? LikedFilled : LikeOutline}
                  height="20px"
                  alt="like"
                />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsList;


