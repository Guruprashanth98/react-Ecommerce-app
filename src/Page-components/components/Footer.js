import React from 'react';
import {Link} from 'react-router-dom'
import style from '../styles/Footer.module.css'

const Footer = () => {
    return ( 
        <div className={style.Footer}>
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <div className={style.LogoWrapper}>
                        <Link to = '/' className = {style.Link}>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo" />
                        </Link>
                        
                    </div>
                    <div className = {style.SocialLink}>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" width="30" alt="Twitter Logo" />
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg" width="30" alt="Facebook Logo" />
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" width="30" alt="Instagram Logo" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;