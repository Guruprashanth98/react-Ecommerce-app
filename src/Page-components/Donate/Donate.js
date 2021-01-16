import React from 'react';
import style from './Donate.module.css'
import TopBar from '../components/TopBar'
import Banner from '../components/Banner'
import  Footer from '../components/Footer'
import {donateObjData} from './donateObjData'
import {Link} from 'react-router-dom'

const BannerProps = {
    heading: <>Here at Acme Outdoors <br/> <span className="SpanBanner">every dollar counts</span></>,
    parah: "Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times."
}

const DonateContent = ()=>{
    return(
        <>
            <div className = {style.DonateContent}>
                <div className={style.DonateContainer}>
                    <div className={style.DonateWrapper}>
                        {donateObjData.map(item =>{
                            return (
                                <Link key={item.id} className  = {style.Link}to={`/donate/donate-${item.price}`}>
                                    <div  className={style.DonateText}>{item.name}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const Donate = () => {
    return ( 
        <>
            <TopBar />
            <Banner data = {BannerProps} className="DonateBanner" />
            <DonateContent />
            <Footer/>
        </>
     );
}
 
export default Donate;