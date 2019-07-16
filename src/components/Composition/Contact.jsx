import React from 'react'
export default class Contact extends React.Component{
    constructor(){
        super()
        this.state={
            mail: false
        }

    }


    handleInput(event){
        const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
         if (expressionReguliere.test(event.target.value)) {
            this.setState({
                  mail: true
            })
      }
    }
    
    
    
    
    
    
    render(){
        return(
            <div>
                <section className='mb-5' id='contact'>
                    <div className='text-center py-5'>
                        <h2 className='text-warning title-section'>
                            Get In Touch
                        </h2>
                        
                        
                    </div>
                    <div className='container py-5'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={this.handleInput.bind(this)}  type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"      placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="yalalala">Subject</label>
                                <input type="text" className="form-control" id="yalalala" placeholder="Type the Subject" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Tell Me About Your Project</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                            <input type="submit"  className="btn bg-btn-sub text-light" value='send message' />
                        </form>
                    </div>
                    
                </section>
            </div>
        )
    }
}