import React from 'react';
import Card from './Card/Card';
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
    {
      Name : 'E-Commerce',
      Description: 'Final project for the Upgrade Hub (Full Stack) bootcamp. It is an e-commerce with user authentication, administrators, shopping cart, product stock management and much more.',
      Technologies: [
        {React: 'https://media.discordapp.net/attachments/964479986855706624/980756695548575744/kisspng-react-business-javascript-computer-software-npm-react-5b2dd02b688437.5188897215297290674281.png'},
        {Javascript: 'https://media.discordapp.net/attachments/964479986855706624/979816266275635200/kisspng-javascript-portable-network-graphics-logo-clip-art-javascript-programs-amp-output-apps-on-google-5b69409b183213.5468079715336244750991.png'},
        {Node: 'https://media.discordapp.net/attachments/964479986855706624/980759399305986048/kisspng-node-js-javascript-software-developer-express-js-c-node-js-5b4bc172b6aa80.4777337515316913787482.png'},
        {Express: 'https://media.discordapp.net/attachments/964479986855706624/981986567419727932/expressjs.png'},
        {MongoDB: 'https://media.discordapp.net/attachments/964479986855706624/980760407797035008/kisspng-mongodb-nosql-document-oriented-database-portable-thessaloniki-mongodb-user-group-thessaloniki-g-5b639f0975a398.5970418615332554334819.png'},
        {Html: 'https://media.discordapp.net/attachments/964479986855706624/979814194511773756/kisspng-responsive-web-design-html-computer-icons-css3-wor-css-5ada2556b56739.2541863015242458467431.png'},
        {Sass: 'https://media.discordapp.net/attachments/964479986855706624/980755994374180934/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0.0178421215493876488854.png?width=904&height=676'}
      ],
      Url: 'https://github.com/hectoresen/Proyecto-Final-Upgrade-Hub'
    },
  ];


  return (
    <div className='projects' id='projects'>
      <Card projectsList={myProjects}/>
    </div>
  )
}

export default Projects