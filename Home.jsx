import React from 'react'
import vg from "../assets/home.png"
import ai from "../assets/2 about.jpg"
import img1 from "../assets/plate.png"
import img2 from "../assets/pizza.png"
import img3 from "../assets/delevery.png"

import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

 
import "../styles/Home.scss"
function Home() {
  return (
    <>
    <div className="home" id='home'>
        <div className="home-content">
            <h1>Tasty food</h1>
            <h2>Try the best food of </h2>
                <h2>the week.</h2>
            <button>View Menu</button>
        </div>
        <div className="image">
            <img src={vg} alt="illustration" />
        </div>
    </div>

    <div id="about">
        <img src={ai} alt="/"/>
        <div className="right-content">
            <p style={{color:"#069c54",fontWeight:"700",marginBottom:"10px"}}>About us</p>
            <h2>We cook the best tasty food</h2>
            <p> Atque dolorum sint dignissimos, quisquam suscipit iure id ipsa aliquid nihil nostrum doloremque quae ipsam repellendus rerum!</p>
            <button>Explore history</button>
        </div>
    </div>

    <div id="service">
        <div className="content">
        <p style={{color:"#069c54",fontWeight:"600",marginBottom:"5px"}}>Offering</p>
        <h3>Our amazing services</h3>
        </div>
        <div className="card-container">
            <div className="card" >
                <img src={img1} alt=""  />
                <h4>Excellent food</h4>
                <p style={{fontWeight:"400",fontSize:"0.9rem",marginTop:"5px"}}>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>
            <div className="card">
                <img src={img2} alt="" />
                <h4>Fast food</h4>
                <p style={{fontWeight:"400",fontSize:"0.9rem",marginTop:"5px"}}>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>
            <div className="card">
                <img src={img3} alt="" />
                <h4>Delivery</h4>
                <p style={{fontWeight:"400",fontSize:"0.9rem",marginTop:"5px"}}>We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
            </div>
        </div>
        
    </div>

    <div id="menu">

        <div className="menu-content">
            <p style={{color:"#069c54",fontWeight:"600",marginBottom:"5px"}}>Special</p>
            <h3>Menu of the week</h3>
        </div>
        <div className="card-contener">
            <div className="card">
                <h4>Tomato Chutuny</h4>
                <p>Delicious Dish</p>
                <h5>$22.00</h5>
                <button>cart</button>
            </div>
            <div className="card">
                <h4>Salad with fish</h4>
                <p>Delicious Dish</p>
                <h5>$10.00</h5>
                <button>cart</button>
                
            </div>
            <div className="card">
                <h4>Spinach salad</h4>
                <p>Delicious Dish</p>
                <h5>$8.00</h5>
                <button>cart</button>
            </div>
        </div>
    </div>


    <div id="contact">
        <div className="text-content">
        <p  style={{color:"#069c54",fontWeight:"600",marginBottom:"5px"}}>Let's talk</p>
        <h3>Contact us</h3>
        <p>If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
        </div>
        <button>Contact us now</button>
    </div>

   
   <footer>
    <div className="first-div">
        <h3 style={{color:"#069c54",fontWeight:"600",marginBottom:"5px"}}>Tasty Food</h3>
        <p>Restaurant</p>
        <div className="icons">
            <FaFacebook />
            <FaInstagram/>
            <FaTwitter/>
        </div>
    </div>

    <div className="first-div">
        <h3>Services</h3>
        <p>Delivery</p>
        <p>Pricing</p>
        <p>Fast FOOD</p>
        <p>Reserve your spot</p>

    </div>
    <div className="first-div">
    <h3>Information</h3>
        <p>Event</p>
        <p>Contact us</p>
        <p>Privacy policy</p>
        <p>Terms of services</p>


    </div>

    <div className="first-div">
    <h3>Adress</h3>
        <p>city center</p>
        <p>gwalior</p>
        <p>999999999000</p>
        <p>tastyfood@email.com</p>


    </div>


   </footer>



    </> )
}
export default Home