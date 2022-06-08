

export const setUpClasses = (middleProject, allProjects) =>{

    /* Clean classes to middle project */
    allProjects[middleProject].classList.remove('wrapper__inactive1');

    if(allProjects[middleProject].classList.contains('wrapper__inactive2')){
        allProjects[middleProject].classList.remove('wrapper__inactive2');
    }

    allProjects[middleProject -2].classList.remove('wrapper__inactive1')
    allProjects[middleProject -2].classList.add('wrapper__inactive2')

    allProjects[middleProject -1].classList.remove('wrapper__inactive2')
    allProjects[middleProject -1].classList.add('wrapper__inactive1');


    if(allProjects[middleProject +1].classList.contains('wrapper__inactive2')){
        allProjects[middleProject +1].classList.remove('wrapper__inactive2');
    }
    allProjects[middleProject +1].classList.add('wrapper__inactive1');
    allProjects[middleProject +2].classList.add('wrapper__inactive2');

};

export const setDownClasses = () =>{
    console.log('down');
}