import React from 'react';

const About: React.FC = () => {
    const skills = [
        { skill: 'Digital Marketing', percentage: 85 },
        { skill: 'SEO & Backlinks', percentage: 90 },
        { skill: 'Design & Development', percentage: 95 },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-primary">About Us<span></span></p>
                        <h1 className="mb-4">Your Trusted Digital Solution with 10 Years of Expertise</h1>
                        <p className="mb-4">We excel in driving growth for clients through strategic and innovative approaches.</p>
                        {skills.map((skill, index) => (
                            <div className="skill mb-4" key={index}>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">{skill.skill}</p>
                                    <p className="mb-2">{skill.percentage}%</p>
                                </div>
                                <div className="progress">
                                    <div className={`progress-bar ${skill.percentage >= 90 ? 'bg-success' : skill.percentage >= 85 ? 'bg-primary' : 'bg-dark'}`} role="progressbar" style={{ width: `${skill.percentage}%` }} aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        ))}
                        <a href="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.png" alt="About Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
