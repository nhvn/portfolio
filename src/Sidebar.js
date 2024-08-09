import React from 'react';
import { FaYoutube, FaTiktok, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="https://www.linkedin.com/in/alannhans" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://github.com/nhvn" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://www.tiktok.com/@totezalan?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"><FaTiktok /></a></li>
        {/* <li><a href="https://www.youtube.com/channel/UCeq4B3hUh6C-sDbvtQPiwjA" target="_blank" rel="noreferrer"><FaYoutube /></a></li> */}
        <li><a href="https://twitter.com/totezalan" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
