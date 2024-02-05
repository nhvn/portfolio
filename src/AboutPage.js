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
                            <p class="small-paragraph">MY NAME IS</p>
                                <h1>Alan Nhan.</h1>
                                <div class="description descr-contain">
                                    <div class="text-contain">
                                        <p>I am a <span class="highlight">full-stack software engineer</span> with a passion for problem-solving and a versatile skillset. I graduated from <span class="highlight2">UCI</span> with a Bachelor of Science in Natural Sciences and I also finished a Full-Stack Software Development Program at <span class="highlight2">CSULB</span>.</p>
                                        <p>I have experience in working with teams, prioritizing tasks, and delivering high-quality results in fast-paced environments. I have also developed a keen interest in healthcare operations and procedures, as I was a former dental student and a dental assistant. I switched careers to pursue software engineering and I have successfully completed several projects using various frontend and backend technologies.</p>
                                        {/* <p>I am always eager to learn new skills and take on new challenges in software development, and I am actively seeking new opportunities to apply and grow my skillset in different roles.</p> */}
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
                <div class="right">
                    <div class="headshot-contain">
                        <div class="img-contain">
                        <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Self-Portrait of Alan Nhan"></img>
                    </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <section class="hobbies">
                <h2 id="titles">Obsessions</h2>
            <div className="hobbies-contain">
                <div className="hob" id="foodie">
                    <h2>foods&nbsp;</h2>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                </div>
                <div className="hob" id="cafe">
                <h2>cafes&nbsp;</h2>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                </div>
                <div className="hob" id="travel">
                <h2>travel&nbsp;</h2>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Coming Soon"></img>
                </div>
                </div>
            </section>
        </div>

    </div>
  );
};

export default AboutPage;
