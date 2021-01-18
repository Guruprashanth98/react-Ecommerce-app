import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Home from './Page-components/Home/Home'
import About from './Page-components/About/About'
import Shop from './Page-components/Shop/Shop'
import Donate from './Page-components/Donate/Donate'
import Contact from './Page-components/Contact/Contact'
import Cart from './Page-components/components/Cart'
import {useEffect} from 'react'
import {addProduct} from './Action/action'
import ProductDetail from './Page-components/Shop/ProductDetail';
import { withRouter, useLocation } from "react-router-dom";
import ReadOurStatement from './Page-components/Home/ReadOurStatement'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const  ScrollToTop = withRouter(_ScrollToTop)

//Folders are structured as Page components  and common components, reduces, actions, store
//common components are used accross multiple pages
  

function App() {
  let dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(addProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <Cart  />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path={`/`}  component={Home}/>
            <Route path={`/about`}  component={About}/>
            <Route exact path={`/shop`}  component={Shop}/>
            <Route  path={`/shop/product/:id`} component={ProductDetail}/>
            <Route exact path={`/donate`}  component={Donate}/>
            <Route path={`/donate/:id`} component={ProductDetail}/>
            <Route path={`/contact`}  component={Contact}/>
            <Route path={`/alert/how-were-responding-to-covid-19`}  component={ReadOurStatement} />
            <Route render = {()=><h1>400 ERROR</h1>} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;