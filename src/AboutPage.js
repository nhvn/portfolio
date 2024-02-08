// AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div>
        <div className="about fade">
            <div className="flex">
                <div className="left">
                    <section className="title">
                        <div className="description">
                            <p className="small-paragraph">MY NAME IS</p>
                                <h1>Alan Nhan.</h1>
                                <div className="description descr-contain">
                                    <div className="text-contain">
                                        <p>I am a <span className="highlight">full-stack software engineer</span> with a passion for problem-solving and a versatile skillset. I graduated from <span className="highlight2">UCI</span> with a Bachelor of Science in Natural Sciences and I also finished a Full-Stack Software Development Program at <span className="highlight2">CSULB</span>.</p>
                                        <p>I have experience in working with teams, prioritizing tasks, and delivering high-quality results in fast-paced environments. I have also developed a keen interest in healthcare operations and procedures, as I was a former dental student and a dental assistant. I switched careers to pursue software engineering and I have successfully completed several projects using various frontend and backend technologies.</p>
                                        {/* <p>I am always eager to learn new skills and take on new challenges in software development, and I am actively seeking new opportunities to apply and grow my skillset in different roles.</p> */}
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
                <div className="right">
                    <div className="headshot-contain">
                        <div className="img-contain">
                        <img src={process.env.PUBLIC_URL + '/img/portrait.png'} alt="Self-Portrait of Alan Nhan"></img>
                    </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <section className="hobbies">
                <h2 id="titles">Obsessions</h2>
            <div className="hobbies-contain">
                <div className="hob" id="foodie">
                    <img src={process.env.PUBLIC_URL + '/img/food1.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/food2.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/food3.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/food4.png'} alt="Coming Soon"></img>
                </div>
                <div className="hob" id="cafe">
                    <img src={process.env.PUBLIC_URL + '/img/cafe1.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/cafe2.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/cafe3.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/cafe4.png'} alt="Coming Soon"></img>
                </div>
                <div className="hob" id="travel">
                    <img src={process.env.PUBLIC_URL + '/img/travel1.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/travel2.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/travel3.png'} alt="Coming Soon"></img>
                    <img src={process.env.PUBLIC_URL + '/img/travel4.png'} alt="Coming Soon"></img>
                </div>
                </div>
            </section>
        </div>

    </div>
  );
};

export default AboutPage;
