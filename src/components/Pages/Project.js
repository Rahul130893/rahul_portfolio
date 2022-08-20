import React from 'react'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'
import pharmeasy from "../images/pharmeasy.png.png"
import bigbasekthero from "../images/bigbasket hero.jpeg"
// import githubhero from "../images/Mini Github.png"
import cricbuzz from "../images/Cricbuzz.png.png"
// import grubhero from "../images/GrubHub Hero.png"
import kindmeal from "../images/kindmeal_image.png"

function Project() {
    return (
      <div className="Project" id="projectDiv">
        <div className="head">
          My Projects
          <div className="projectsIntro">
            <div>Here are some of the projects that I have done</div>
          </div>
        </div>
        <div className="container">
          {/* project one */}
          <div className="projs">
            <div className="img">
              <img src={bigbasekthero} alt="movies" />
            </div>
            <div className="title">BigBasket Clone</div>
            <div className="projinfo">
              A web application to buy groceries online in India.
              <br />
              <br />
              Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage
            </div>
            <div className="flex">
              <div className="projlinks">
                <a href="https://bigbasket-clone.vercel.app/" target={"_blank"}>
                  Live
                </a>
              </div>
              <div className="projlinks">
                <a
                  href="https://github.com/Iqbal0786/Bigbasket_Clone"
                  target={"_blank"}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* project two */}
          <div className="projs">
            <div className="img pharm">
              <img src={pharmeasy} autoCapitalize alt="movies" />
            </div>
            <div className="title">PharmEasy Clone</div>
            <div className="projinfo">
              Pharmeasy is an Indian healthcare app and ecommerce platform.
              <br />
              Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage | MongoDb
              | Express | Mongoose | NPM | Heroku | etc.
            </div>
            <div className="flex">
              <div className="projlinks">
                <a
                  href="https://pharmeasy-clone.netlify.app/"
                  target={"_blank"}
                >
                  Live
                </a>
              </div>
              <div className="projlinks">
                <a
                  href="https://github.com/bharathk07/PHARMEASY-CLONE"
                  target={"_blank"}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* project three */}
          <div className="projs">
            <div className="img">
              <img src={cricbuzz} alt="movies" />
            </div>
            <div className="title">CricBuzz Clone</div>
            <div className="projinfo">
              A web application for getting live cricket scores and news related
              to cricket.
              <br />
              Tech Stack: HTML | CSS | Javascript | DOM | Weather API
            </div>
            <div className="flex">
              <div className="projlinks">
                <a href="https://cric-buzz.vercel.app/" target={"_blank"}>
                  Live
                </a>
              </div>
              <div className="projlinks">
                <a
                  href="https://github.com/Rahul130893/CricBuzz"
                  target={"_blank"}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* project four */}
          <div className="projs">
            <div className="img">
              <img src={kindmeal} alt="movies" />
            </div>
            <div className="title">KindmMeal Clone</div>
            <div className="projinfo">
              KindMeal.my is Malaysia's leading meat-free lifestyle platform,
              indulging you with delicious discounted vegetarian meals to save
              animals, health, environment and money.
              <br />
              Tech Stack:React | Redux | Material-ui | Node.js | Express | HTML
              | CSS | Javascript | Data Structure And Algorithm
            </div>
            <div className="flex">
              <div className="projlinks">
                <a href="https://kindmeal.vercel.app/" target={"_blank"}>
                  Live
                </a>
              </div>
              <div className="projlinks">
                <a
                  href="https://github.com/rishianand39/Kindmeal-clone"
                  target={"_blank"}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="moreprojs">
          <div>For more You can view my github</div>
          <div>
            <a href="https://github.com/Rahul130893/" target={"_blank"}>
              <FaGithub /> Github
            </a>
          </div>
        </div>
        <BottomAbout />
      </div>
    );
}

export default Project
