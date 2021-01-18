import {Link} from 'react-router-dom'
import style from '../styles/TopBar.module.css'
import cartImg from '../../Assets/cartImg.png'
import {useSelector, useDispatch} from 'react-redux'
import {toggleCartDisplay} from '../../Action/action'
import {useState} from 'react'

const TopBar = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartProducts)
    let count = 0
    cart?.length>=1 ? count = cart.reduce((accumulator, item) => accumulator + item.count,0) : count = 0
    const [navBar,setNavBar] = useState(false)
    const toggleNavBar = () =>{
        setNavBar(!navBar)
    }
    //switching navbar using states
    const Hamburguer = () =>{
        return (<i className="fas fa-bars" onClick={toggleNavBar}></i>)
    }

    return ( 
        <header>
            <div className = {style.Container}>
                <div className = {style.NavWrapper}>
                    <Link to="/" className = {style.Link}>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt = "logo"></img>
                    </Link>
                    <div className = {style.RightNav}>
                        <nav className = {style.NavMenu}>
                            <Link className = {style.Link2} to="/"><div className = {style.NavLink}>Home</div></Link>
                            <Link className = {style.Link2} to="/about"><div className = {style.NavLink}>About</div></Link>
                            <Link className = {style.Link2} to="/shop"><div className = {style.NavLink}>Shop</div></Link>
                            <Link className = {style.Link2} to="/Donate"><div className = {style.NavLink}>Donate</div></Link>
                            <Link className = {style.Link2} to="/Contact"><div className = {style.NavLink}>Contact</div></Link>
                        </nav>
                        <div className = {style.Cart} onClick = {() => dispatch(toggleCartDisplay())} >
                        <img src={cartImg}  alt="cart.png"/><span>{count}</span>
                        </div>
                        <Hamburguer />
                        <NavBar className={navBar ? "active" : "not-active"} toggle =  {toggleNavBar}><Hamburguer /></NavBar>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default TopBar;
//Nav bar for screens less than 767px 
const NavBar = ({children,toggle,className}) =>{
    const class1= style[className]
    return (
        <div className={`${style.NavBar} ${class1}`}>
            <div className={style.NavBarContainer}>
                <nav className = {style.NavMenuDisplay}>
                    <Link className = {style.NavMenuLink2} onClick={toggle}to="/"><div className = {style.NavLink}>Home</div></Link>
                    <Link className = {style.NavMenuLink2} to="/about"><div className = {style.NavLink}>About</div></Link>
                    <Link className = {style.NavMenuLink2} to="/shop"><div className = {style.NavLink}>Shop</div></Link>
                    <Link className = {style.NavMenuLink2} to="/Donate"><div className = {style.NavLink}>Donate</div></Link>
                    <Link className = {style.NavMenuLink2} to="/Contact"><div className = {style.NavLink}>Contact</div></Link>
                </nav>
            </div>
            {children}
        </div>
    )
}