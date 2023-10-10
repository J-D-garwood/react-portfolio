import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Resume() {
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6'>
                <h2>Some of my skills are..</h2>
                <ul>
                    <li>Proficient in Front-End Development</li>
                    <li>React.js Expertise</li>
                    <li>Git Version Control</li>
                    <li>Cross-Browser Compatibility</li>
                    <li>API Integration</li>
                    <li>Mobile-First Design</li>
                    <li>Effective Communication</li>
                </ul>
                <a href="..\..\..\assets\resume.pdf">Download my resume</a>
            </div>
        </div>
    );
}

