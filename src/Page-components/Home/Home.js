import TopBar from '../components/TopBar'
import Banner from '../components/Banner'
import ImageCard from '../components/ImageCard'
import Footer from '../components/Footer'
import React from 'react';
import style from './Home.module.css'
import ProductList from '../components/ProductList'
import {Link} from 'react-router-dom'

const bannerProps = {
    heading: <>Serving you <br/> since 1989.</>,
    parah: "Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.",
    button: "Shop Merch"
}
const secondaryBannerProps = {
    heading : <>How we're keeping you <br/>safe during COVID-19</>,
    parah: "As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.",
    button : "Read Our Statement"
}

const ImageCardData = {
    heading: "Shop Local",
    parah : ["We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.",
            "That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.",
            "But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.",
            "-------",
            "Jane & John Doe",
            "Acme Outdoors"]
}

const SupportSection = () =>{
    return (
        <div className = {style.SupportSection}>
            <div className = {style.Container}>
                <div className = {style.TopWrapper}>
                    <div className  ={style.Left}>
                        <div className={style.LeftHead}>Ways to support</div>
                        <h2 className = {style.LeftText}>Support Acme Outdoors</h2>
                    </div>
                    <div className = {style.Right}>
                        <p>
                            COVID-19 has forced us to close our retail space, 
                            but we need support from patrons like yourself now more than ever. 
                            Below, we’ve listed the best ways to help us through this season.
                        </p>
                    </div>
                </div>
                <div className = {style.SupportWrapper}>
                    <div className  ={style.SupportColumn}>
                        <div className = {style.SupportCard}>
                            <div className={style.CardNumber}>01</div>
                            <div className={style.CardText}>SHOP<br/>PRODUCTS</div>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg" alt="Circle" className={style.Shape}></img>
                            
                        </div>
                        <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
                    </div>
                    <div className  ={style.SupportColumn}>
                        <div className = {style.SupportCard}>
                            <div className={style.CardNumber}>02</div>
                            <div className={style.CardText}>Donate</div>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg" alt="Triangle" className={style.Shape} style = {{right: "-11%",
  bottom: "-17%"}}></img>
                        </div>
                        <p>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
                    </div>
                    <div className  ={style.SupportColumn}>
                        <div className = {style.SupportCard}>
                            <div className={style.CardNumber}>03</div>
                            <div className={style.CardText}>Buy <br/> Gift Cards</div>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg" alt="Square" className={style.Shape} style = {{right: "-14%",
  bottom: "-31%"}} ></img>
                        </div>
                        <p>Have all the outdoor gear you need for now?&nbsp;Buy a gift card and use it later or share it with friends and family. </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 


const Home = () => {
    return (
        <React.Fragment> 
            <TopBar />
            <Banner data = {bannerProps}/>
            <SupportSection />
            <Banner data = {secondaryBannerProps} forHome={true} className = "SecondaryBanner"/>
            <div className={style.ProductListHome}>
                <div className={style.Container}>
                    <div className={style.TopWrapper}>
                        <div className={style.ShopProducts}>
                            <div className={style.Text}>shop products</div>
                            <h2 className={style.TextMeta}>Open 24/7/365.</h2>
                        </div>
                    </div>
                    <ProductList forHomeComponent={true} className="ForHome"/>
                    <div className={style.ViewMore}>
                        <Link to="/shop">
                            <button>View All Products</button>
                        </Link>
                    </div>
                </div>
            </div>
            <ImageCard  data ={ImageCardData} />
            <Footer />
        </React.Fragment>
    );
}
 
export default Home;