import React from 'react'
import "../styles/hero.css";

const Hero = ({ navigateCard }) => {
  return (
    <div className="hero_container">
      <div className="text_container">
        <h2 className="greet">Welcome to,</h2>
        <h2 className="title">Profile Card</h2>
        <h2 className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam consectetur qui hic inventore similique illo eveniet natus quasi dolore modi, odit saepe eaque accusantium possimus harum beatae. Quibusdam, at.
        Nostrum quod magnam quasi sed exercitationem quibusdam, nemo totam in iure vel quo consequatur ipsa mollitia ullam perferendis nihil provident cupiditate assumenda ipsum repudiandae animi fugit similique. Ratione, atque ea?
        </h2>
        <a href="card">
        <button 
            className="hero_btn" 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigateCard();
            }}
        >
            View Card
        </button>
        </a>
      </div>
      <div className="image_container">
        <img src="https://1.bp.blogspot.com/--JFmzWfIZcE/X6kMkOZdzUI/AAAAAAAAA8c/8c1NpUOMdWYZOKHeWxQvwyVCyXjK_U28QCLcBGAsYHQ/s1280/Neumorphism%2BProfile%2BCard%2BUI%2BDesign%2Busing%2Bonly%2BHTML%2B%2526%2BCSS.webp" alt="hero card" className="hero_image" />
      </div>
    </div>
  )
}

export default Hero
