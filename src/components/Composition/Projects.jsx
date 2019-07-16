import React from 'react'
import site1 from '../../img/site1.png'
import site2 from '../../img/site2.png'
import site3 from '../../img/site3.png'
import site4 from '../../img/site4.png'
import site5 from '../../img/site5.png'
import site6 from '../../img/site6.png'
export default class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
            all: "col-lg-4",
            htmlCss: "col-lg-4",
            js: "col-lg-4",
            react: "col-lg-4",
            etage: 'row py-3',
            btn1: 'nav-link nav-Project active-navbar-project mx-1',
            btn2:'nav-link nav-Project mx-1' ,
            btn3:'nav-link nav-Project mx-1',
            btn4:'nav-link nav-Project mx-1'
        }
    }
    handleBtn1(){
        this.setState({
            all: "col-lg-4",
            htmlCss: "col-lg-4",
            js: "col-lg-4",
            react: "col-lg-4",
            etage: 'row py-3',
            btn1: 'nav-link nav-Project mx-1 active-navbar-project',
            btn2: 'nav-link nav-Project mx-1' ,
            btn3: 'nav-link nav-Project mx-1',
            btn4: 'nav-link nav-Project mx-1'
        })
    }
    handleBtn2(){
        this.setState({
            js: 'col-lg-4 d-none',
            react: 'col-lg-4 d-none',
            htmlCss: "col-lg-4",
            etage: 'row py-3',
            btn1: 'nav-link nav-Project mx-1',
            btn2: 'nav-link nav-Project mx-1 active-navbar-project' ,
            btn3: 'nav-link nav-Project mx-1',
            btn4: 'nav-link nav-Project mx-1'
        })
    }
    handleBtn3(){
        this.setState({
            htmlCss: 'col-lg-4 d-none',
            react: 'col-lg-4 d-none',
            js: "col-lg-4",
            etage: 'row',
            btn1: 'nav-link nav-Project mx-1',
            btn2: 'nav-link nav-Project mx-1' ,
            btn3: 'nav-link nav-Project mx-1 active-navbar-project',
            btn4: 'nav-link nav-Project mx-1'
        })
    }
    handleBtn4(){
        this.setState({
            htmlCss: 'col-lg-4 d-none',
            js: 'col-lg-4 d-none',
            react: "col-lg-4",
            etage: 'row',
            btn1: 'nav-link nav-Project mx-1',
            btn2: 'nav-link nav-Project mx-1' ,
            btn3: 'nav-link nav-Project mx-1',
            btn4: 'nav-link nav-Project mx-1 active-navbar-project'
        })
    }











    render(){
        return(
            <div>
                <section className='bg-section' id='projects'>
                    <div className='text-center py-5'>
                        <h2 className='text-light title-section'>
                            What Have I Already Done 
                        </h2>
                    </div>
                    <nav className="navbar navbar-expand-lg container">
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo02">
                            <ul className="navbar-nav project-media">
                                <li className="nav-item">
                                    <a className={this.state.btn1} href="#!" onClick={this.handleBtn1.bind(this)}>ALL</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.btn2} href="#!" onClick={this.handleBtn2.bind(this)}>HTML/CSS</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.btn3} href="#!" onClick={this.handleBtn3.bind(this)}>JS</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.btn4} href="#!" onClick={this.handleBtn4.bind(this)}>REACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>



                    <div className='container py-5 projets-media-img'>
                        <div className={this.state.etage}>
                            <div className={this.state.htmlCss}>
                                <a href={site1} target="_blank" ><img src={site1} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                            <div className={this.state.htmlCss}>
                                <a href={site2} target="_blank"><img src={site2} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                            <div className={this.state.htmlCss}>
                                <a href={site3} target="_blank"><img src={site3} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                        </div>
                        <div className={this.state.etage}>
                            <div className={this.state.js}>
                                    <a href={site4} target="_blank"><img src={site4} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                            <div className={this.state.js}>
                                <a href={site5} target="_blank"><img src={site5} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                            <div className={this.state.react}>
                                <a href={site6} target="_blank"><img src={site6} alt="" width='300px' className='media-img-site'/></a>
                            </div>
                        </div>
                    </div>

                    <div className='text-center py-5 mb-5'>
                        <h6 className='text-light'>
                            You Can find all my Web Sites On GitHub
                        </h6>
                    </div>

                </section>
            </div>
        )
    }
}
