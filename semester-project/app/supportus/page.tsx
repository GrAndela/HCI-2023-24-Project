"use client";

import React from 'react';
import Footer from '../../components/footer/page'; 
import './support-us.css'; 

const SupportUs = () => {
    return (
        <div className="support-us-container">
            <main className="support-us-main">
                <h1 className="section-title">Support Us</h1>

                <section className="support-us-section">
                    <h2 className="section-subtitle">How to Donate</h2>
                    <p>
                        Donations are vital for our shelter's operations. Your contributions help cover the costs of food, medical care,
                        and shelter maintenance. Here’s how you can donate:
                    </p>
                    <ul>
                        <li>-Make a financial donation online through our website.</li>
                        <li>-Donate food, old blankets, beds, and toys for our pets.</li>
                        <li>-Contribute to our medical expenses fund.</li>
                    </ul>
                </section>

                <section className="support-us-section">
                    <h2 className="section-subtitle">Foster or Adopt</h2>
                    <p>
                        Fostering a pet or adopting one is a wonderful way to support our mission. By providing a temporary or permanent
                        home, you help us open up space for other animals in need. Contact us to learn more about fostering and adoption.
                    </p>
                </section>

                <section className="support-us-section">
                    <h2 className="section-subtitle">Volunteer and Follow Us</h2>
                    <p>
                        Volunteers are the backbone of our shelter. You can help by joining our organized dog walks, participating in hiking
                        and swimming activities with the dogs, or simply following us on social media to spread the word about our mission.
                        Your involvement increases our chances of finding loving homes for our animals.
                    </p>
                </section>

                <section className="support-us-section">
                    <h2 className="section-subtitle">Organize Events</h2>
                    <p>
                        We regularly organize events like dog walks and beach outings to help our animals get noticed by potential adopters. 
                        These activities not only give the dogs a chance to socialize but also increase their visibility in the community. 
                        Join us for these events and help make a difference!
                    </p>
                </section>

                <section className="support-us-section">
                    <h2 className="section-subtitle">Help Find Lost Animals</h2>
                    <p>
                        If you come across a lost animal, please reach out to us. We can assist in reuniting pets with their owners or
                        finding a safe place for them until their families are located.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default SupportUs;
