import React from 'react'
import './Service.css'

function Contact() {
  const URL = "https://typhoid-main.herokuapp.com/"
  return (
    <>
      <div className="col-8 mx-auto marginGiven">
        <section className="mb-4">

          <h1 className="h1-responsive font-weight-bold text-center mr-5">Contact Us</h1>
          <br />
          <h6 className="text-center w-responsive mx-auto mb-5 mr-5">Do you have any questions? <br /><br />Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</h6>

          <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">

              <form action={`${URL}contact`} method="post" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="yourname" className="form-control" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="youremail" className="form-control" placeholder="Your Email" required />
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="yoursubject" className="form-control" placeholder="Subject" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="Number" id="phone" name="yourphone" className="form-control" placeholder="Phone Number" required />
                    </div>
                  </div>
                </div>
                <div className="row">

                  <div className="col-md-12">

                    <div className="md-form">
                      <textarea type="text" id="message" name="yourmessage" rows="6" className="form-control md-textarea" placeholder="Start writing from here..."></textarea>
                    </div>

                  </div>
                </div>
                <button
                  type="submit"
                  id="form-submit"
                  className="btn btn-info btn-send  pt-2 btn-block"
                >Send Message</button>
              </form>
            </div>


            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>31066, Yaoundé, Cameroon</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+23 76 9746 5154</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>mboalab@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact