import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-gray-500 text-primary-content p-10">
                <aside>
                    <img src={Logo} alt="Logo" className='w-14 h-14' />
                    <p className="font-bold">
                        HERO.IO Tach Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a htef="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebook} size="xl" className='mr-3'/>
                        </a>
                        <a htef="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faYoutube} size="xl" className='mr-3'/>
                        </a>
                        <a htef="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} size="xl" className='mr-3'/>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;