import React from 'react';
import style from '../styles/ImageCard.module.css'

const ImageCard = ({data,  className}) => {
    let count = 0
    const class1= style[className] ? style[className] : ""
    return (  
        <div className = {`${style.ImageCard} ${class1}`}>
            <div className={style.Container}>
                <div className={style.Image}>
                </div>
                <div className={style.Description}>
                    <div className={style.ContentWrapper}>
                        <h2 className={style.Heading}>{data.heading}</h2>
                        {data?.parah?.map((item) => <p key = {count++}>{item}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ImageCard;