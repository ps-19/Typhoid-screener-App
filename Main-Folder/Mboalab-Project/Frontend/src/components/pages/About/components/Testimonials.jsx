import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials text-center">
        <div className="container">
          <h3>Testimonials</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card border-light bg-light text-center">
                <i
                  className="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                ></i>
                <div className="card-body blockquote">
                  <p className="card-text">
                    My experience with Mboalab has been great. I have been able
                    to get the best medical care and advice from the best
                    doctors in the country.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Olawore Breakthroughs</cite>
                  </footer>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-light bg-light text-center">
                <i
                  className="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                ></i>
                <div className="card-body blockquote">
                  <p className="card-text">
                    This is the best medical organization in the country. Their
                    services are top notch and their doctors are very nice.
                    Thank you Mboalab.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Adebiyi Segun</cite>
                  </footer>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-light bg-light text-center">
                <i
                  className="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                ></i>
                <div className="card-body blockquote">
                  <p className="card-text">
                    Thank you Mboalab for the great service. I have been able to
                    get the best medical care and advice from the best doctors
                    in the country. I am very grateful.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Kabiru Ogunleke</cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
