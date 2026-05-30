import Image from 'next/image'
import React from 'react'

const HomePageTeamSection: React.FC = () => {
    return (
        <>
            <div className="home1-team-section mb-120">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-4 col-lg-5 col-md-8">
                            <div className="section-title text-center">
                                
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <ul className="team-list">
                        <li className="single-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-name-and-desig">
                                <span>Production Manager</span>
                                <h4>Olivern James</h4>
                            </div>
                            <div className="team-img">
                                <img width={100} height={100} src="/assets/new-images/team/dum.jpg" alt="" />
                            </div>
                            <a href="https://www.facebook.com/" className="social-area">
                                <div className="icon">
                                    <span><i className="bx bxl-facebook" /></span>
                                </div>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="single-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-name-and-desig">
                                <span>Machine Operator</span>
                                <h4>Michael Daniel</h4>
                            </div>
                            <div className="team-img">
                                <img width={100} height={100} src="/assets/new-images/team/dum.jpg" alt="" />
                            </div>
                            <a href="https://www.linkedin.com/" className="social-area">
                                <div className="icon">
                                    <span><i className="bx bxl-linkedin" /></span>
                                </div>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li className="single-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="team-name-and-desig">
                                <span>Safety Officer</span>
                                <h4>Matthew Julian</h4>
                            </div>
                            <div className="team-img">
                                <img width={100} height={100} src="/assets/new-images/team/dum.jpg" alt="" />
                            </div>
                            <a href="https://x.com/" className="social-area">
                                <div className="icon">
                                    <span><i className="bx bxl-linkedin" /></span>
                                </div>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li className="single-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="team-name-and-desig">
                                <span>Process Engineer</span>
                                <h4>Anthony Wyatt</h4>
                            </div>
                            <div className="team-img">
                                <img width={100} height={100} src="/assets/new-images/team/dum.jpg" alt="" />
                            </div>
                            <a href="https://www.linkedin.com/" className="social-area">
                                <div className="icon">
                                    <span><i className="bx bxl-linkedin" /></span>
                                </div>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li className="single-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="team-name-and-desig">
                                <span>Shift Supervisor</span>
                                <h4>Cooper Josiah</h4>
                            </div>
                            <div className="team-img">
                                <img width={100} height={100} src="/assets/new-images/team/dum.jpg" alt="" />
                            </div>
                            <a href="https://www.instagram.com/" className="social-area">
                                <div className="icon">
                                    <span><i className="bx bxl-instagram" /></span>
                                </div>
                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default HomePageTeamSection
