import React from 'react'
import "../styles/profilecard.css";

const ProfileCard = ({ data }) => {
    const {avatar_url, login, public_repos, name, followers, location, following, bio } = data;
    // console.log();
  return (
    <div className="profile_container">
      <div className="profile_card_container">
        <div className="profile_image_container">
            <img src={avatar_url} alt={name} />
        </div>
        <div className="flex">
            <h2 className="boxed_text">{login}</h2>
            <h2 className="boxed_text">{public_repos}</h2>
        </div>
        <div className="flex">
            <h2 className="boxed_text">{name}</h2>
            <h2 className="boxed_text">{followers}</h2>
        </div>
        <div className="flex">
            <h2 className="boxed_text">{location}</h2>
            <h2 className="boxed_text">{following}</h2>
        </div>
        <p className="bio">
            {bio}
        </p>
        <div className="btn_container">
          <a href="https://github.com/Raghav-0311" target="_blank" className="btn_profile_link">
            <button className="profile_btn">View Profile</button>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileCard
