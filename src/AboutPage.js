// AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div>
        <div class="about fade">
            <div class="flex">
                <div class="left">
                    <section class="title">
                        <div class="description">
                            <p class="small-paragraph">ABOUT ME...</p>
                                <h1>I'm Alan</h1>
                                <div class="description descr-contain">
                                    <div class="text-contain">
                                        <p>I am a dedicated <span class="highlight">full-stack software engineer</span> who's skilled in frontend and backend technologies...</p>
                                        <p>Currently, I'm expanding my knowledge in the fields of Machine Learning and Artificial Intelligence, while actively seeking new opportunities to apply and grow my skillset.</p>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
                <div class="right">
                    <div class="img-contain">
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Self-Portrait of Alan Nhan"></img>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default AboutPage;
