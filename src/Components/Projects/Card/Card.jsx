import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import './Card.scss';

const Card = ({ projectsList }) => {
    const [accTotalProjects, setAccTotalProjects] = useState(0);

    const projectCards = document.getElementsByClassName('wrapper');

    useEffect(() => {
        projectCards[0].classList.add('wrapper__0');
        setAccTotalProjects(projectCards.length);
    })
    let accNavProjects = 0;

    const projectsNavigateUp = () => {
        accNavProjects++;
        if(accNavProjects > accTotalProjects -1){
            projectCards[accNavProjects -1].classList.remove('wrapper__0');
            accNavProjects = accTotalProjects - accNavProjects;
            projectCards[accNavProjects].classList.add('wrapper__0');
        }else{
            let cardLv1 = projectCards[accNavProjects-1]
            cardLv1.classList.remove('wrapper__0');
            cardLv1.classList.add('wrapper__1');
            projectCards[accNavProjects].classList.add('wrapper__0');
        };
    }

    const projectsNavigateDown = () => {
        accNavProjects--;
        document.getElementsByClassName('wrapper')[accNavProjects + 1].classList.remove('wrapper__0');
        document.getElementsByClassName('wrapper')[accNavProjects].classList.add('wrapper__0');
    }

    return <div className='projects__container'>
        <nav className='projects__nav'>
            <div><a className="prev" href="#" onClick={projectsNavigateDown}></a></div>
            <div><a className="next" href="#" onClick={projectsNavigateUp}></a></div>
        </nav>
        {projectsList.map((element, index) => {
            return <div className={`wrapper wrapper__${index}`}
                id='wrapper-projects'
                key={element.Name}
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