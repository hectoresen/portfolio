import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import { defaultClasses, setDownClasses, setUpClasses } from './card-script';
import { FormattedMessage  as T} from 'react-intl';
import './Card.scss';

const Card = ({ projectsList }) => {
    const projectCards = document.getElementsByClassName('wrapper');
    const [accTotalProjects, setAccTotalProjects] = useState(0);

    useEffect(() => {
        setAccTotalProjects(projectCards.length);
        defaultClasses(projectCards);
    });

    let middleProjects = parseInt(projectCards.length / 2);

    const projectsNavigateUp = () => {
        projectCards[middleProjects].classList.remove('wrapper__active');

        /* Primer elemento pasa a ser el último elemento */
        projectCards[accTotalProjects -1].parentNode.insertBefore(projectCards[0], accTotalProjects.nextSibling);
        projectCards[middleProjects].classList.add('wrapper__active');

        setUpClasses(middleProjects, projectCards);
    }

    const projectsNavigateDown = () => {
        projectCards[middleProjects].classList.remove('wrapper__active');

        /* Último elemento pasa a ser el primero */
        projectCards[0].parentNode.insertBefore(projectCards[0], accTotalProjects.nextSibling);
        projectCards[middleProjects].classList.add('wrapper__active');

        setDownClasses(middleProjects, projectCards)
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
                <div className="projectSpecifications">
                    <h1 id='project-name'> {element.Name} </h1>
                    <p>{element.Description}</p>
                    <div className="productFeatures">
                        {element.Technologies.map((tech, index) => {
                            return <div className="feature"
                                        key={index}
                                        >
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
                            <p><T id="Projects.btn.seeMore" /></p>
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