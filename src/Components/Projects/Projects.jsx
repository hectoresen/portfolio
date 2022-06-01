import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import './Projects.scss';


const Projects = () => {

  const myProjects = [
    {
      Name : 'UpgradeFly',
      Description: 'Project with Angular for the Upgrade Hub bootcamp (Full Stack)',
      Technologies: [
        {Angular: 'https://media.discordapp.net/attachments/964479986855706624/980757086000541726/kisspng-angularjs-rxjs-angular-november-meetup-javascript-building-applications-with-angular-material-genu-5bf28bff4df5f6.2092311215426222073193.png'},
        {Javascript: 'https://media.discordapp.net/attachments/964479986855706624/979816266275635200/kisspng-javascript-portable-network-graphics-logo-clip-art-javascript-programs-amp-output-apps-on-google-5b69409b183213.5468079715336244750991.png'},
        {Typescript: 'https://media.discordapp.net/attachments/964479986855706624/981596048172662914/icons8-typescript-480.png'},
        {Html: 'https://media.discordapp.net/attachments/964479986855706624/979814194511773756/kisspng-responsive-web-design-html-computer-icons-css3-wor-css-5ada2556b56739.2541863015242458467431.png'},
        {Sass: 'https://media.discordapp.net/attachments/964479986855706624/980755994374180934/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0.0178421215493876488854.png?width=904&height=676'}
      ],
      Url: 'https://github.com/hectoresen/upgrade-angular-project'
    }
  ]
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        {myProjects.map(element =>{
          return       <div className="wrapper" key={element.Name}>
          <div className="overviewInfo">
            <div className="productinfo">
              <div className="grouptext">
                {/* IMG TEXT */}
              </div>
            </div>
          </div>
          <div className="productSpecifications">
            <h1> {element.Name} </h1>
            <p>{element.Description}</p>
            <div className="productFeatures">
              {element.Technologies.map(tech =>{
                return <div className="feature" key={tech}>
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
    </div>
  )
}

export default Projects