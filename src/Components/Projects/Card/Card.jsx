import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import './Card.scss';

const Card = ({ projectsList }) => {
    const projectCards = document.getElementsByClassName('wrapper');
    const [accTotalProjects, setAccTotalProjects] = useState(0);


    useEffect(() => {
        setAccTotalProjects(projectCards.length);
        projectCards[parseInt(projectCards.length / 2)].classList.add('wrapper__active');
    })
    let middleProjects = parseInt(projectCards.length / 2);

    const projectsNavigateUp = () => {
        projectCards[middleProjects].classList.remove('wrapper__active');

        /* Primer elemento pasa a ser el último elemento */
        projectCards[accTotalProjects -1].parentNode.insertBefore(projectCards[0], accTotalProjects.nextSibling);
        projectCards[middleProjects].classList.add('wrapper__active');

    }

    const projectsNavigateDown = () => {
        projectCards[middleProjects].classList.remove('wrapper__active');

        /* Último elemento pasa a ser el primero */

        projectCards[0].parentNode.insertBefore(projectCards[0], accTotalProjects.nextSibling);
        projectCards[middleProjects].classList.add('wrapper__active');
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