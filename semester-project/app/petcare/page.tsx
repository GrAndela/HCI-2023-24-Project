"use client";

import React from 'react';
import Footer from '../../components/footer/page';
import './petcare.css';

const PetCare = () => {
    return (
        <div className="app-container">
            <main className="flex flex-col items-center justify-between p-10">
                <h1 className="section-title">Pet Care</h1>

                <div className="care-section">
                    <h2 className="section-title">Caring for Dogs</h2>
                    <div className="care-content">
                        <img
                            src="dog_image.jpg"  
                            alt="Dog Care"
                            className="care-image"
                        />
                        <div className="care-text">
                            <p>
                                Dogs require regular exercise, a balanced diet, and plenty of social interaction.
                                Different breeds have different activity needs—working breeds like Border Collies need
                                much more exercise than smaller breeds like Chihuahuas. Make sure to provide toys and
                                activities that stimulate their mind and body.
                            </p>
                            <p>
                                Regular grooming is also essential, especially for long-haired breeds. Ensure that your
                                dog is bathed and brushed regularly to keep their coat healthy. Feeding should be done
                                according to their size, age, and activity level. Fresh water should always be available.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="care-section">
                    <h2 className="section-title">Caring for Cats</h2>
                    <div className="care-content">
                        <img
                            src="cat_image.jpg"
                            alt="Cat Care"
                            className="care-image"
                        />
                        <div className="care-text">
                            <p>
                                Cats are independent animals, but they still need attention and care. They require a
                                clean litter box, regular meals, and a safe environment to explore. Scratching posts and
                                toys are important to keep them entertained and to satisfy their natural instincts.
                            </p>
                            <p>
                                Grooming is also crucial, especially for long-haired cats, to prevent mats and tangles.
                                Regular brushing helps reduce shedding and hairballs. Feeding should be balanced, with
                                high-quality food appropriate for their age and health status. They are known for their
                                love of play.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="neutering-info">
                    <h3>Importance of Neutering</h3>
                    <p>
                        Neutering is essential to prevent overpopulation and ensure that fewer animals end up in shelters.
                        It helps reduce the number of homeless pets and contributes to their long-term health.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default PetCare;
