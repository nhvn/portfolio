import React from 'react';
import Sidebar from './Sidebar';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false
    };
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad() {
    if (this.foodieImg && this.cafeImg && this.travelImg) {
      this.setState({ imagesLoaded: true });
    }
  }

  render() {
    const { imagesLoaded } = this.state;

    return (
      <div>
        <Sidebar />
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
                        <p>
                          I am a <span className="highlight">full-stack software engineer</span> with a passion for
                          problem-solving and a versatile skillset. I am currently pursuing a Master of Science in Computer Science at <span className="highlight2">USC</span>.
                        </p>
                        <p>
                          I actively practice LeetCode to enhance my problem-solving abilities, participate in hackathons during my free time, and am seeking new opportunities to apply and grow my skillset.
                        </p>

                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="right">
                <div className="img-contain">
                  <img src={process.env.PUBLIC_URL + '/img/portrait.png'} alt="Self-Portrait of Alan Nhan"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <section className="hobbies">
            <h2 id="titles">Current obsessions</h2>
            <div className={`hobbies-contain ${imagesLoaded ? 'images-loaded' : ''}`}>
              <div className="hob" id="foodie">
                <img
                  className="blur-image"
                  ref={(imgRef) => (this.foodieImg = imgRef)}
                  src={process.env.PUBLIC_URL + '/img/hobFood.png'}
                  alt="Coming Soon"
                  onLoad={this.handleImageLoad}
                ></img>
              </div>
              <div className="hob" id="cafe">
                <img
                  className="blur-image"
                  ref={(imgRef) => (this.cafeImg = imgRef)}
                  src={process.env.PUBLIC_URL + '/img/hobCafe.png'}
                  alt="Coming Soon"
                  onLoad={this.handleImageLoad}
                ></img>
              </div>
              <div className="hob" id="travel">
                <img
                  className="blur-image"
                  ref={(imgRef) => (this.travelImg = imgRef)}
                  src={process.env.PUBLIC_URL + '/img/hobTravel.png'}
                  alt="Coming Soon"
                  onLoad={this.handleImageLoad}
                ></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutPage;