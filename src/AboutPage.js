import React from 'react';

const AboutPage = () => {
  return (
    <div>
        <div className="about fade">
            <div className="flex">
                <div className="top">
                    <div className="left">
                        <section className="title">
                            <div className="description">
                                <h4 className="small-paragraph">MY NAME IS</h4>
                                <h1>Alan Nhan.</h1>
                                <div className="description descr-contain">
                                    <div className="text-contain">
                                        <p>I am a <span className="highlight">full-stack software engineer</span> with a passion for problem-solving and a versatile skillset. I graduated from <span className="highlight2">UCI</span> with a Bachelor of Science in Natural Sciences and I also finished a Full-Stack Software Development Program at <span className="highlight2">CSULB</span>.</p>
                                        <p>Currently expanding my knowledge in the fields of Machine Learning and Artificial Intelligence, while seeking new opportunities to apply and grow my skillset.</p>
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
            </div>
            <div className="divider"></div>
            <section className="hobbies">
                <h2 id="titles">Current obsessions</h2>
                <div className="hobbies-contain">
                    <div className="hob" id="foodie">
                        <img src={process.env.PUBLIC_URL + '/img/hobFood.png'} alt="Coming Soon"></img>
                    </div>
                    <div className="hob" id="cafe">
                        <img src={process.env.PUBLIC_URL + '/img/hobCafe.png'} alt="Coming Soon"></img>
                    </div>
                    <div className="hob" id="travel">
                        <img src={process.env.PUBLIC_URL + '/img/hobTravel.png'} alt="Coming Soon"></img>
                    </div>
                </div>
            </section>
        </div>

    </div>
  );
};

export default AboutPage;
