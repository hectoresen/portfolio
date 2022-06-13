import React from 'react';
import {AiOutlineFilePdf} from 'react-icons/ai';
import {MdDownload} from 'react-icons/md';
import myCv from '../../Assets/CV.pdf';
import './CvButton.scss';

const CvButton = () => {
    return (
        <div className='cvdownload'>
            <a href={myCv} download='CV - Hector Escolante Enriquez'>
                <span className='cvdownload-pdf'><AiOutlineFilePdf /></span>
                <span className='cvdownload-download'><MdDownload /></span>
                <span className='cvdownload-text'>Download my resume</span>
            </a>
        </div>
    )
}

export default CvButton;