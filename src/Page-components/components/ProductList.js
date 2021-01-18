import React from 'react';
import style from '../styles/ProductList.module.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

//using react.memo as a subsititute for shouldcomponent update lifecycle method
const ProductListGenerator = React.memo(({data}) =>{
    return (
        <div className={style.ProductListItem}>
            <div className={style.ProductImage}>
                <img src={data.preview} alt = {data.name}/>
            </div>
            <div className={style.ProductDetails}>
                <h3>{data.name}</h3>
                <p>{`Rs. ${data.price}`}</p>
            </div>
            <div className={style.ProductDetailsBtn}>
                <Link to={`/shop/product/${data.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
})

const ProductList = React.memo((props) =>{
    
    let  {forHomeComponent} = props
    let {onlyAccessories,onlyClothes,all} = props 
    const productData = useSelector(state => state.product)
    const class1= style[props.className] ? style[props.className] : ""
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }
    //displaying 3 random  products from the productlist data and rendering it for the home page
    const index = []
    index.push(forHomeComponent &&  getRandomInt(0,3))
    index.push(forHomeComponent && getRandomInt(3,6))
    index.push(forHomeComponent && getRandomInt(6,9))
    index.push(forHomeComponent && getRandomInt(2,9))
    return (
        <>
            <div className={`${style.ProductList} ${class1}`}>
                <div className={style.ProductListWrapper}>
                    {onlyAccessories ? productData
                                    .filter(item => item.isAccessory)
                                    .map(item => <ProductListGenerator key = {item.id} data={item}/>):""}
                    {onlyClothes ? productData
                                    .filter(item => !item.isAccessory)
                                    .map(item => <ProductListGenerator key = {item.id} data={item}/>):""}
                    {all ? productData.map(item => <ProductListGenerator key = {item.id} data={item}/>) : ""}
                    
                    {forHomeComponent ? productData.filter((item,ind) => index.includes(ind)).map(item => <ProductListGenerator key = {item.id} data={item}/>) : ""}
                </div>
            </div>
        </>
    )
})
export  default ProductList