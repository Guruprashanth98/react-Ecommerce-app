
import React from 'react';
import style from './ReadOurStatement.module.css'
import TopBar from '../components/TopBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const ReadOurStatement = () => {
    return ( <>
    <TopBar />
    <Banner data = {{heading:"How we're responding to COVID-19"}} className = "ShopBanner"/>
    <div className={style.ReadContent}>
        <div className={style.ReadContainer}>
            <div className={style.ReadWrapper}>
                <h2>What’s a Rich Text element?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus leo ac porta hendrerit. Proin vitae elit vitae dolor tristique auctor. Mauris mi odio, interdum ut purus sit amet, ullamcorper facilisis urna. Cras vitae mattis justo.</p>
                <h4>Static and dynamic content editing</h4>
                <p>Nulla felis metus, consectetur sed ex sit amet, tincidunt ornare quam. Proin rhoncus dapibus mi et tincidunt. Aliquam orci velit, convallis a molestie ut, porttitor placerat tortor. Nunc eu tellus et sem vestibulum hendrerit. Cras lobortis ligula eu mauris elementum, sit amet pharetra lorem luctus. </p>
                <h4>How to customize formatting for each rich text</h4>
                <p>Ut tincidunt condimentum arcu ac dapibus. Phasellus in bibendum libero. Mauris ultrices lorem malesuada, sagittis neque ac, volutpat felis. Quisque sit amet leo quis eros cursus luctus eu a nunc. Mauris id enim vel purus pretium viverra id a nisl. Suspendisse nec eros posuere nibh molestie euismod. Morbi auctor ipsum a quam suscipit, ac posuere nunc accumsan. </p>
            </div>
        </div>
    </div>
    <Footer />
    </> );
}
 
export default ReadOurStatement;