import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import elearning from '../../assets/elearning.png'
import profileLaborer from '../../assets/profile.png'
import license from '../../assets/license.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={profileLaborer}
          link="https://github.com/zah80/thesis-project"
          h3="khademni"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/omarNaifer12/-Food-Delivery-Website"
          h3="Food-Delivery-website"
        
        />
        <ProjectCard
          src={elearning}
          link="https://github.com/mehrezhammamii/Universe-E-Learning"
          h3="Universe-E-Learning"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Wassim-Hasnaoui/Real-Estate"
          h3="Real-Estate"
         
        />
         <ProjectCard
          src={license}
          link="https://github.com/omarNaifer12/react-projects/tree/main/project%20Manage%20drivers%20and%20vehicles"
          h3=" Manage drivers and vehicles"
         
        />
      </div>
    </section>
  );
}

export default Projects;
