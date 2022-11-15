import './typhoid-section.css';



function TyphoidSection(){
  
    return(
            <section className='typhoid-section pt-5 pb-5'>
            <div className='app-container'>
            <h2 className='mb-5 main-title'>Why Choose our Diagnoser</h2>
            <div className='d-flex gap-3 align-items-start justify-content-between'>
            <div className="main-text-container">
            <p className='main-header-text'>Mboalab has been committed into making the Typhoid online diagnostic tool work.</p>
            <p className="sub-text">We have researched for the best and most suitable ways to make the online diagnostic a success. The best of algorithms considering the problem context
            was choosen for use in this project. 
            </p>
            </div>
            <div className="d-flex gap-3">
            <div className='feature'>
            <p className='title'>Rapid & Sophisticated Diagnosis</p>
            <p className='text'>It helps in getting a rapid diagnosis, and it is Sophisticated in that it predicts based on the symptoms given and also based on what has been observed in the blood through the smear image that has been uploaded </p>
            </div>
            <div className='feature'>
            <p className='title'>Integrated Analysis</p>
            <p className='text'>As a medical practisioner, ou can analyze the blood through the online diagnoser and make a report from it.</p>
            </div>
            <div className='feature'>
            <p className='title'>Accurate Prediction</p>
            <p className='text'>Our system has been trained with numerous samples of data and it is therefore able to predict accurately if a patient has typhoid due to the complex algorithm that has
            been integrated into it</p>
            </div>
            </div>

            </div>
            </div>
                </section> 
    )
}



export default TyphoidSection;