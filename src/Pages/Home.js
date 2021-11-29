import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
import Announcement2 from '../Components/Announcement2'


const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Announcement2/>
            <Slider/>
            <Categories/>
            <Products/>
            {/* <NewsLetter/> */}
            <Footer/>
        </div>
    )
}

export default Home

