import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import './Card.scss';

const Card = ({ projectsList }) => {
    const [selectedProject, setSelectedProject] = useState({});

    const selectProject = project => setSelectedProject(project);

    useEffect(() => {
        console.log(`Hay ${document.getElementsByClassName('wrapper').length} proyectos`);
        document.getElementsByClassName('wrapper')[0].classList.add('active');
    })

    let accNavProjects = 0;

    const projectsNavigateUp = () => {
        accNavProjects++;
        document.getElementsByClassName('wrapper')[accNavProjects - 1].classList.remove('active');
        document.getElementsByClassName('wrapper')[accNavProjects].classList.add('active');
    }

    const projectsNavigateDown = () => {
        accNavProjects--;
        document.getElementsByClassName('wrapper')[accNavProjects + 1].classList.remove('active');
        document.getElementsByClassName('wrapper')[accNavProjects].classList.add('active');

    }


    console.log(projectsList);
    return <div className='projects__container'>
        <nav className='projects__nav'>
            <div><a className="prev" href="#" onClick={projectsNavigateDown}></a></div>
            <div><a className="next" href="#" onClick={projectsNavigateUp}></a></div>
        </nav>
        {projectsList.map((element, index) => {
            return <div className={`wrapper wrapper__${index}`}
                id='wrapper-projects'
                key={element.Name}
                onClick={() => { selectProject(element) }}
            >
                <div className={`overviewInfo-${element.Name}`}>
                    <div className="productinfo">
                        <div className="grouptext">
                            {/* IMG TEXT */}
                        </div>
                    </div>
                </div>
                <div className="productSpecifications">
                    <h1 id='project-name'> {element.Name} </h1>
                    <p>{element.Description}</p>
                    <div className="productFeatures">
                        {element.Technologies.map(tech => {
                            return <div className="feature">
                                <div className="featureIcon">
                                    <img src={Object.values(tech)}></img>
                                </div>
                                <div className="featureText">
                                    <p>{Object.keys(tech)}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="checkoutButton">
                        <div className="showmore">
                            <p>See more about the project</p>
                        </div>
                        <div className="buttonaction">
                            <h3 className='buttonaction-icon'><a href={element.Url} target="_blank" ><BsArrowRightSquare /></a></h3>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default Card;