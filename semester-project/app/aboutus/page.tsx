"use client";

import React from 'react';
import './about.css'; 

const About = () => {
    return (
        <div className="about-container">
            <main className="about-main">
                <h1 className="section-title">About Us</h1>

                <section className="about-section">
                    <h2 className="section-subtitle">Our Story</h2>
                    <p>
                        We started our journey in 2015 with a simple mission: to provide a safe and loving home for animals in need. 
                        Since then, we have grown significantly, rescuing and caring for over 100 pets each year.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-subtitle">Our Location</h2>
                    <p>
                        Visit us at Somewhere in the world. Our shelter is open for visits and adoptions from 8:00 until 20:00. We welcome you to come
                        and meet our wonderful animals!
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-subtitle">How You Can Help</h2>
                    <p>
                        There are many ways to support our mission! You can volunteer your time, donate supplies or funds, or foster a pet
                        in need. Your support makes a huge difference in the lives of our animals.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-subtitle">Our Volunteers</h2>
                    <p>
                        Our dedicated volunteers are the heart of our shelter. Many of them began their journey by finding a stray animal
                        and deciding to help. They contribute their time and love to make a positive impact on our shelter.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-subtitle">Stories from Our Volunteers</h2>
                    <div className="story">
                        <div className="story-text">
                            <p>
                                Meet [Volunteer Name]. They started volunteering with us after finding a stray kitten in their neighborhood. 
                                Their story is a testament to the impact of individual actions and the power of community support.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="section-subtitle">Donations</h2>
                    <p>
                        Donations help us cover the costs of food, medical care, and shelter for our animals. Every contribution, big or
                        small, is greatly appreciated and helps us continue our work.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default About;
