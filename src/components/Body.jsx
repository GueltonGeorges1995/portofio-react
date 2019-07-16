import React from 'react'
import Header from './Composition/Header'
import About from './Composition/About'
import Services from './Composition/Services'
import Projects from './Composition/Projects'
import Contact from './Composition/Contact'
import Footer from './Composition/Footer'
import Navbar from './Composition/Navbar'
export default class Body extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <About />
                <Services />
                <Projects />
                <Contact />
                <Footer />
            </div>
        )
    }
}