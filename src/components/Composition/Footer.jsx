import React from 'react'
export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <section className='bg-section height-footer d-flex align-items-center justify-content-center' id='footer'>
                    <div className='text-center'>
                        <h6 className='text-light'>
                            You Can find Me On
                        </h6>
                        <div>
                            <a href="http://www.google.com" target="_blank"><i className="fab fa-linkedin mx-2 iconeFooter" ></i></a>
                            <a href="http://www.google.com" target="_blank"><i className="fab fa-github mx-2 iconeFooter" ></i></a>
                            <a href="http://www.google.com" target="_blank"><i className="fab fa-facebook mx-2 iconeFooter" ></i></a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}