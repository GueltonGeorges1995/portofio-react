import React from 'react'
import AboutImg from '../../img/aboutImg.jpg'
export default class About extends React.Component{
    
    render(){
        return(
            <div>
            
                <section id='about' className=''>
                    {/* image and description */}
                    <div> 
                        <div className='text-center my-5 mt-5'>
                            <h2 className='text-warning title-section'>
                                    Who Am I 
                            </h2>
                        </div>
                        <div className='container py-5'>
                            <div className='row'>
                                <div className="col-lg-4  col-6 about-media">
                                    <img src={AboutImg} alt="Picture of myself" className='aboutImg d-flex justify-content-center img-moi-media'/>
                                </div>
                                <div className="col-lg-8 d-flex justify-content-left">
                                    <ul className='list-decoration-none'>
                                        <li>
                                            <h3 className='text-warning'>Lorem ipsum dolor sit amet.</h3>
                                            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quo recusandae quia molestiae qui sint ullam tempora, atque eveniet eum amet beatae earum repellendus enim? Similique aliquid officia omnis quaerat!</p>
                                        </li>
                                        <li>
                                            <h3 className='text-warning'>Lorem ipsum dolor sit amet.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint.</p>
                                        </li>
                                        <li>
                                            <h3 className='text-warning'>Lorem ipsum dolor sit amet.</h3>
                                            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, odio! Asperiores porro dolore, possimus maxime ab animi ipsam iste hic beatae perspiciatis vero distinctio itaque quam nostrum aut deserunt. Est.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Skills information  */}
                    <div className='bg-section'>
                        <div className='text-center py-5'>
                            <h2 className='text-light title-section'>
                                    What Can I Do 
                            </h2>
                        </div>
                        
                        <div className='container py-5'>

                            <div className='text-center'>
                                <h5 className='text-light'>
                                    Web Developpement 
                                </h5>
                            </div>
                            <div className="row mb-5">
                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>HTML</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id='myBar1'>80%</div>
                                    </div>
                                </div>

                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>CSS</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>

                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>JS</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </div>

                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>REACT</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-center'>
                                <h5 className='text-light'>
                                    Language  
                                </h5>
                            </div>
                            <div className="row pb-5">
                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>French</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                </div>

                                <div className='col-lg-3 text-center'>
                                    <h4 className='text-light'>English</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </section>
            </div>
        )
    }
}