import React from 'react';
import style from './Shop.module.css'
import TopBar from '../components/TopBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {useState} from 'react'
import ProductList from '../components/ProductList'

const ProductDisplay =React.memo(() =>{
    const [onlyClothes,setOnlyClothes] = useState(false)
    const [onlyAccessories,setOnlyAccessories] = useState(false)
    const [all, setAll] = useState(true)

    const toggle= (event) =>{
        setOnlyClothes(false)
        setOnlyAccessories(false)
        setAll(false)
        event(true)
    }

    return (
        <div className={style.ProductDisplaySection}>
            <div className ={style.Container}>
                <div className = {style.ShopCategory}>
                    <h2 className={style.Heading}>
                        Shop by Category
                    </h2>
                    <div className  ={style.Filters}>
                    <div className={style.FilterItem}>
                            <button onClick={() => toggle(setAll)} className={style.FilterBtn}>All</button>
                        </div>
                        <div className={style.FilterItem}>
                            <button onClick={() => toggle(setOnlyClothes)} className={style.FilterBtn}>Clothes</button>
                        </div>
                        <div className={style.FilterItem}>
                            <button onClick={() => toggle(setOnlyAccessories)} className={style.FilterBtn}>Accessories</button>
                        </div>
                        
                    </div>
                </div>
                <ProductList all={all} onlyClothes={onlyClothes} onlyAccessories = {onlyAccessories}/>
            </div>
        </div>
    )
})

const Shop = () => {
    return ( 
        <>
            <TopBar />
            <Banner data = {{heading:"Shop Our Products"}} className = "ShopBanner"/>
            <ProductDisplay />
            <Footer />
        </>
     );
}
 
export default Shop;