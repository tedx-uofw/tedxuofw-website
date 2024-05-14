import React from 'react'

const Form = () => {
  return (
    <div className='form-container'>

{/* onSubmit={this.handleSubmit.bind(this)} method="POST" */}

        <form id="contact-form" >
            <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" className="form-control" value="Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value="youremailhere@uw.edu" required/>
            </div>
            <div className="form-group">
                <label htmlFor="organization"></label>
                <input type="text" className="form-control" value="Name of Organization (opt)" />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber"></label>
                <input type="text" className="form-control" value="Your Phone Number (opt)" />
            </div>
            <div className="form-group">
                <label htmlFor="message"></label>
                <textarea className="form-control" rows="5" value="Reason for contact (questions about TEDxUofW, why you want to become a sponsor, etc)"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
