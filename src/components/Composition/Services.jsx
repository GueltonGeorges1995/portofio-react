import React from 'react'
export default class Services extends React.Component{
    render(){
        return(
            <div>
                <section id='services'>
                    <div className='text-center my-5'>
                        <h2 className='text-warning title-section'>
                            My Services 
                        </h2>
                    </div>

                    <div className='container py-5'>
                        <div className='row mb-5'>
                            <div className="col-lg-4 text-center">
                                <i className="fas fa-laptop-code iconeSize mb-3"></i>
                                <h5 className='text-warning'>Web Developpement</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quod?</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <i className="fas fa-mobile-alt iconeSize mb-3"></i>
                                <h5 className='text-warning'>Responsive</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, autem. Architecto reiciendis pariatur soluta deserunt vel quos esse! Fuga excepturi ex esse reiciendis! Rerum accusantium quasi dicta similique nostrum labore!</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <i className="fas fa-file-code iconeSize mb-3"></i>
                                <h5 className='text-warning'>Clean Code</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, consequatur!</p>
                            </div>
                            
                        </div>

                        <div className='row mb-5'>
                            <div className="col-lg-4 text-center">
                                <i className="fas fa-headset iconeSize mb-3"></i>
                                <h5 className='text-warning'>Customer Support</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, et.</p>
                            </div>
                           
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
