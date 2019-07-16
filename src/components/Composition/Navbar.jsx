import React from 'react'
export default class Navbar extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll' ,() =>{
            const isTop = window.scrollY > 100
            const nav = document.getElementById('nav')
            if(isTop){
                nav.classList.add('scrolled')
            }else {
                nav.classList.remove('scrolled')
            }
        })
    }
    
    
    
    render(){
        return(
            <div className='nav-media'>
                <nav className="navbar navbar-expand-lg  fixed-top" id='nav'>
                        <a className="navbar-brand nav-elem ml-5" href="https://www.google.com" target="_blank"> Georges Guelton</a>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                            <ul className="navbar-nav  mt-2 mt-lg-0 mr-5">
                                <li className="nav-item">
                                    <a className="nav-link nav-elem" href="#header">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  nav-elem" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  nav-elem" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  nav-elem" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  nav-elem" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}