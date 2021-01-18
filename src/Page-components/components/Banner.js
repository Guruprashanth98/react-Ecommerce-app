import React from 'react';
import style from '../styles/Banner.module.css'
import {Link} from 'react-router-dom'

//rendering different buttons for different page components based on the parent component's props
const Banner = ({data,className,children,forAbout,forHome}) => {
    let {heading, parah, button} = data
    const class1= style[className] ? style[className] : ""
    return ( 
        <div className = {`${style.Banner} ${class1}`}>
            <div className = {style.Container}>
                <h2 className = {style.Heading}>
                    {heading}
                </h2>
                {parah ? <p className = {style.Paragraph}> {parah} </p> :  "" }
                <div className = {style.ButtonWrapper}>
                    {!forAbout && button && !forHome ? <Link to="/shop"><button className = {style.Button}>{button}</button></Link> : ""}
                    {forAbout ? <Link to="/Contact"><button className = {style.Button}>{button}</button></Link> : ""}
                    {forHome ? <Link to="/alert/how-were-responding-to-covid-19"><button className = {style.Button}>{button}</button></Link> : ""}
                </div>
                <>
                {children ? children : ""}
                </>
            </div>
        </div>
    );
}
 
export default Banner;