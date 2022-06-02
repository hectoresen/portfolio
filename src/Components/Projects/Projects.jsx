import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import './Projects.scss';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({});

  const selectProject = project => setSelectedProject(project);

  useEffect(() =>{
    console.log(`Hay ${document.getElementsByClassName('wrapper').length} proyectos`);
    document.getElementsByClassName('wrapper')[0].classList.add('active');
  })

  let accNavProjects = 0;

  const projectsNavigateUp = () =>{
    accNavProjects ++;
    document.getElementsByClassName('wrapper')[accNavProjects -1].classList.remove('active');
    document.getElementsByClassName('wrapper')[accNavProjects].classList.add('active');
  }

  const projectsNavigateDown = () =>{
    accNavProjects --;
    document.getElementsByClassName('wrapper')[accNavProjects +1].classList.remove('active');
    document.getElementsByClassName('wrapper')[accNavProjects].classList.add('active');

  }

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
    },
    {
      Name : 'Intranet',
      Description: '12-day personal challenge, develop a complete application with users, administrators, event management, news and much more',
      Technologies: [
        {React: 'https://media.discordapp.net/attachments/964479986855706624/980756695548575744/kisspng-react-business-javascript-computer-software-npm-react-5b2dd02b688437.5188897215297290674281.png'},
        {Javascript: 'https://media.discordapp.net/attachments/964479986855706624/979816266275635200/kisspng-javascript-portable-network-graphics-logo-clip-art-javascript-programs-amp-output-apps-on-google-5b69409b183213.5468079715336244750991.png'},
        {Node: 'https://media.discordapp.net/attachments/964479986855706624/980759399305986048/kisspng-node-js-javascript-software-developer-express-js-c-node-js-5b4bc172b6aa80.4777337515316913787482.png'},
        {Express: 'https://media.discordapp.net/attachments/964479986855706624/981986567419727932/expressjs.png'},
        {MongoDB: 'https://media.discordapp.net/attachments/964479986855706624/980760407797035008/kisspng-mongodb-nosql-document-oriented-database-portable-thessaloniki-mongodb-user-group-thessaloniki-g-5b639f0975a398.5970418615332554334819.png'},
        {Html: 'https://media.discordapp.net/attachments/964479986855706624/979814194511773756/kisspng-responsive-web-design-html-computer-icons-css3-wor-css-5ada2556b56739.2541863015242458467431.png'},
        {Sass: 'https://media.discordapp.net/attachments/964479986855706624/980755994374180934/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0.0178421215493876488854.png?width=904&height=676'}
      ],
      Url: 'https://github.com/hectoresen/intranet'
    },
  ];


  return (
    <div className='projects' id='projects'>
        <nav className='projects__nav'>
          <div><a className="prev" href="#" onClick={projectsNavigateDown}></a></div>
          <div><a className="next" href="#" onClick={projectsNavigateUp}></a></div>
        </nav>
      <div className='projects__container'>
        {myProjects.map(element =>{
          return       <div className='wrapper'
                            id='wrapper-projects'
                            key={element.Name}
                            onClick={() => {selectProject(element)}}
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
              {element.Technologies.map(tech =>{
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
    </div>
  )
}

export default Projects