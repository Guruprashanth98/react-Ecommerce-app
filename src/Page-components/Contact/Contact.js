import React from 'react';
import style from './Contact.module.css'
import TopBar from '../components/TopBar'
import Footer from  '../components/Footer'
import Banner from '../components/Banner'
import axios from 'axios'
import {useState} from 'react'
import { Link} from "react-scroll";

const Contact = () => {
    return ( 
        <>
            <TopBar />
            <Banner data = {{heading:"Contact Acme Outdoors"}} className = "ContactBanner">
                <ContactCard />
            </Banner>
            <ContactForm />
            <Footer />
        </>
     );
}
 
export default Contact;

const ContactCard = () => {
    return ( 
        <>
            <div className={style.ContactCard}>
                <div className={style.Contact}>
                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" className={style.ContactIcon}/>
                    <h2>Contact Us</h2>
                    <p>Just want to say hi?&nbsp;We'd love to hear from you. We love our customers and community!&nbsp;</p>
                    <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}><button className={style.ContactButton}>Send Us A Message</button></Link>
                </div>
                <div className={style.Contact}>
                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" className={style.ContactIcon}/>
                    <h2>Get Support</h2>
                    <p>Have an issue with an order or with a product you purchased from us?&nbsp; Fill out our support form.</p>
                    <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}><button className={style.ContactButton}>Contact Support</button></Link>
                </div>
            </div>
            <div className={style.ContactImage}></div>
        </>
     );
}
 
class ContactForm extends React.Component{
    constructor(){
        super()
        this.state = {
            successContainer : false
        }
    }

    updateState = ((value) =>{
        this.setState({successContainer:value})
    })

    render(){
        return (
            <div id="contact" className={style.ContactForm}>
                <div className={style.ContactContainer}>
                    <div className={style.ContactWrapper}>
                        <div className={style.ContactLeft}>
                            <h2>Contact Us</h2>
                            <div className={style.ContactDetails}>
                                <p>Acme Outdoors<br/>123 Rainy Street<br/>Oklahoma City, OK 73129</p>
                                <p>‍<br/><strong>General Inquiries:</strong>&nbsp;(405) 555-5555<br/><strong>Customer Support:</strong>&nbsp;(405) 555-5556</p>
                            </div>
                        </div>
                        <div className={style.ContactRight}>
                            <h2>Contact Form</h2>
                            <p>Send us a message and we'll get back to you as soon as we can! </p>
                            {this.state.successContainer ? <SuccessElement /> : <FormElement state={this.state} item = {this.updateState}/> }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const FormElement = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data  = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        }
        axios.post("https://5d76bf96515d1a0014085cf9.mockapi.io/order",data)
        .then((response) =>{
            props.item(true) //showing success message
        })
        .catch((e) =>{
            console.log(e)
            props.item(true) //showing success message even if  the  post fails(because shoplane's api-endpoint's post method often fails)
        })
        setSubmitBtnValue("Please Wait...")
    }

    //creating references for DOM nodes to access form elements
    const name  = React.createRef()
    const email = React.createRef()
    const message = React.createRef()
    
    let [submitBtnValue,setSubmitBtnValue] = useState("Submit")
    return ( 
        <div className={style.FormDiv}>
            <form className={style.Form} name="form"  onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                    <input type="text" className={style.FormInput}  name="name"  placeholder="Enter your name" id="name" required ref={name}/>
                <label htmlFor="email">Email Address</label>
                    <input type="email" className={style.FormInput} name="email"  placeholder="Enter your email address" id="email" required ref={email}/>
                <label htmlFor="Message">Your Message</label>
                    <textarea placeholder="Enter your message" id="Message" name="message" ref={message} className={style.FormInput}></textarea>
                <input type="submit" value={submitBtnValue} className={style.SubmitBtn}/>
            </form>
        </div>
    );
}
 
const SuccessElement = () => {
    return ( 
        <div className={style.SuccessWrapper}>
            <div>Thank you! Your submission has been received! We'll be in touch soon!</div>
        </div>
     );
}
 
