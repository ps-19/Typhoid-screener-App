import React from 'react'
import { NavLink } from 'react-router-dom'
import './AboutUs.css'
import img1 from '../assets/image/photo1.jpg'
import img2 from '../assets/image/photo2.jpg'
import img3 from '../assets/image/photo3.jpg'
import img4 from '../assets/image/photo4.jpg'
import img5 from '../assets/image/photo5.jpg'

function AboutUs() {
    return (
        <>
            <main className="AboutUs">

                <section className="hero" id="hero">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={img1} className="img-fluid aboutUsphoto" alt="" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src={img2} className="img-fluid" alt="" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src={img3} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="heroText d-flex flex-column justify-content-center aboutUsphoto2">

                                    <h1 className="mt-auto mb-2">
                                        Better
                                        <div className="animated-info">
                                            <span className="animated-item">health</span>
                                            <span className="animated-item">days</span>
                                            <span className="animated-item">lives</span>
                                        </div>
                                    </h1>

                                    <p className="mb-4">MboaLab is an open and collaborative space located in Yaoundé, Cameroon. The aim of MboaLab is to catalyse sustainable local development and improve people’s living conditions through open science..</p>

                                    <div className="heroLinks d-flex flex-wrap align-items-center">
                                        <a className="custom-link me-4" target="_blank" href="https://website-mboalab.vercel.app/" data-hover="Learn More">Learn More</a>

                                        <p className="contact-phone mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                            <path svgsd="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg> +2376 9746 5154</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-padding" id="about">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 col-12">
                                <h2 className="mb-lg-3 mb-3">Meet Dr. Carson</h2>

                                <p>Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience mild to moderate symptoms and recover without special treatments.</p>

                                <p>You can feel free to use this CSS template for your medical profession or health care related websites. You can support us a little via PayPal if this template is good and useful for your work.</p>
                            </div>

                            <div className="col-lg-4 col-md-5 col-12 mx-auto">
                                <div className="featured-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                                    <p className="featured-text"><span className="featured-number">2</span> Years<br /> of Experiences</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="gallery">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-6 ps-0">
                                <img src={img4} className="img-fluid galleryImage aboutUsImg" alt="get a vaccine" title="get a vaccine for yourself" />
                            </div>

                            <div className="col-lg-6 col-6 pe-0">
                                <img src={img5} className="img-fluid galleryImage aboutUsImg" alt="wear a mask" title="wear a mask to protect yourself" />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-padding pb-0" id="timeline">
                    <div className="container">
                        <div className="row">

                            <h2 className="text-center mb-lg-5 mb-4">Our Timeline</h2>

                            <div className="timeline">
                                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                    <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                        <h3 className=" text-light">Get the vaccine</h3>

                                        <p>Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.</p>
                                    </div>

                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" className="bi bi-clipboard2-pulse-fill timeline-icons svgs" viewBox="0 0 16 16">
                                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                            <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                                        </svg>
                                    </div>

                                    <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                        <time>2021-07-31 Saturday</time>
                                    </div>
                                </div>

                                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                                    <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                        <h3 className=" text-light">Consulting your health</h3>

                                        <p>You are fully permitted to use this template for your commercial or personal website. You are not permitted to redistribute the template ZIP file for a download purpose on any other <NavLink to="https://www.google.com/search?q=free+css" target="_blank">Free CSS collection</NavLink> website.</p>
                                    </div>

                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-book timeline-icons svgs" viewBox="0 0 16 16">
                                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                        </svg>
                                    </div>

                                    <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                                        <time>2021-07-15 Thursday</time>
                                    </div>
                                </div>

                                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                    <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                        <h3 className=" text-light">Certified Nurses</h3>

                                        <p>Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arcu.</p>
                                    </div>

                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" className="bi bi-file-medical-fill timeline-icons svgs" viewBox="0 0 16 16">
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 4.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5a.5.5 0 1 1 1 0zM5.5 9h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                        </svg>
                                    </div>

                                    <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                        <time>2021-06-28 Monday</time>
                                    </div>
                                </div>

                                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                                    <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                        <h3 className=" text-light">Covid-19 Hospitals</h3>

                                        <p className="mb-0 pb-0">Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.</p>

                                        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla</p>
                                    </div>

                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-balloon-heart-fill timeline-icons svgs" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                                        </svg>
                                    </div>

                                    <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                                        <time>2021-05-30 Sunday</time>
                                    </div>
                                </div>

                                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                    <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                        <h3 className=" text-light">Freelance Nursing</h3>

                                        <p>If you need a working contact form that submits email to your inbox, please visit our <NavLink rel="nofollow" to="/contact" target="_parent">contact page</NavLink> for more information.</p>
                                    </div>

                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" className="bi bi-person-square timeline-icons svgs" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </div>

                                    <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                        <time>2021-05-18 Tuesday</time>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default AboutUs